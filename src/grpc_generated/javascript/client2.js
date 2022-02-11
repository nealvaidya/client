var http = require('http');
var fs = require('fs');
var path = require('path');
const { parse } = require('querystring');

const {encode, decode} = require('gpt-3-encoder')

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const util = require('util');
const { type } = require('os');
const PROTO_PATH = __dirname + '/proto/grpc_service.proto';
const PROTO_IMPORT_PATH = __dirname + '/proto'

const GRPCServicePackageDefinition = protoLoader.loadSync(PROTO_PATH, {
    includeDirs: [PROTO_IMPORT_PATH],
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

function BufferToInt32Array(buf) {
    newArray = new Int32Array(buf.byteLength / 4)
    dv = new DataView(buf.buffer)
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = dv.getInt32(buf.byteOffset + (i * 4), littleEndian = true);
    }
    return newArray
}

const inference = grpc.loadPackageDefinition(GRPCServicePackageDefinition).inference;

async function send_request(encoded_text, output_len) {
    const argv = process.argv.slice(2)
    const host = argv.length > 0 ? argv[0] : "localhost";
    const port = argv.length > 1 ? argv[1] : "8001";
    const model_name =  argv.length > 2 ? argv[2] :"my-gpt3-5b-io_60_20-half_1-pp_1-tp_2-mbs_1";
    const model_version = "";

    console.log("Connecting...")
    const client = new inference.GRPCInferenceService(host + ':' + port, grpc.credentials.createInsecure());

    const serverLive = util.promisify(client.serverLive).bind(client);
    const serverReady = util.promisify(client.serverReady).bind(client);
    const modelMetadata = util.promisify(client.modelMetadata).bind(client);
    const modelInfer = util.promisify(client.modelInfer).bind(client);

    serverLiveResponse = await serverLive({});
    console.log("Triton Health - Live:", serverLiveResponse.live);
    if(!serverLiveResponse.live) {
        console.error("Triton is not Live")
        return null;
    }

    serverReadyResponse = await serverReady({});
    console.log("Triton Health - Ready:", serverReadyResponse.ready);
    if(!serverReadyResponse.ready) {
        console.error("Triton is not Ready")
        return null;
    }

    modelMetadataResponse = await modelMetadata({ name: model_name, version: model_version });
    console.log("\nModel Info:", modelMetadataResponse)

    // Input Data
    var input_tokens_tensor = new Array(encoded_text.length);
    for (let i = 0; i < encoded_text.length; i++) {
        input_tokens_tensor[i] = encoded_text[i];
      }

    var input_len_tensor = new Array(1);
    input_len_tensor[0] = input_tokens_tensor.length;

    var output_len_tensor = new Array(1);
    output_len_tensor[0] = output_len;

    console.log(input_tokens_tensor);
    console.log(input_len_tensor, output_len_tensor);

    console.log("Preparing Triton data...")
    const input0 = {
        name: "INPUT_ID",
        datatype: "UINT32",
        shape: [1, 1, input_tokens_tensor.length],
        contents: {
            uint32_contents: input_tokens_tensor
        }
    }

    const input1 = {
        name: "REQUEST_INPUT_LEN",
        datatype: "UINT32",
        shape: [1, 1],
        contents: {
            uint32_contents: input_len_tensor
        }
    }

    const input2 = {
        name: "REQUEST_OUTPUT_LEN",
        datatype: "UINT32",
        shape: [1, 1],
        contents: {
            uint32_contents: output_len_tensor
        }
    }

    const modelInferRequest = {
        model_name: model_name,
        model_version: model_version,
        inputs: [input0, input1, input2],
        outputs: [
            { name: "OUTPUT0" }
        ]
    }

    console.log("Calling model...")
    console.log(modelInferRequest)
    const outputs = await modelInfer(modelInferRequest);

    output_data = outputs.raw_output_contents.map(BufferToInt32Array);

    console.log("\nChecking Inference Output");
    console.log("-------------------------");
    console.log(output_data);
    return output_data;

}


http.createServer(function(req, res){

    if(req.url === "/" && req.method === 'POST'){
        // Handle post info...
        console.log("Handle post info...");
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            let data = JSON.parse(body);
            console.log(data.prompts);
            data['prompts_encoded'] = encode(data['prompts'][0]);
            data['prompts_decoded'] = decode(data['prompts_encoded']);
            console.log(data);
            console.log("encoded prompt", typeof(data['prompts_encoded'][0]));
            console.log("encoded prompt len", data['prompts_encoded'].length);
            console.log("num tokens:", typeof(data.tokens_to_generate));
            res.end(JSON.stringify(data));
            send_request(data['prompts_encoded'], data.tokens_to_generate);
        });
    }else if(req.url === "/"){
        console.log("Serving main file...");
        fs.readFile("./index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });

    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }else if(req.url.match("\.js$")){
        var jsPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(jsPath);
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fileStream.pipe(res);

    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

}).listen(80);
