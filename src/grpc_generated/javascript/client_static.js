// Copyright (c) 2022, NVIDIA CORPORATION & AFFILIATES. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//  * Neither the name of NVIDIA CORPORATION nor the names of its
//    contributors may be used to endorse or promote products derived
//    from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ``AS IS'' AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE

// const grpc = require('@grpc/grpc-js');
const grpc = require('grpc')

const tritonServiceGrpc = require("./generated/grpc_service_grpc_pb");
const tritonServicePb = require("./generated/grpc_service_pb")

// const protoLoader = require('@grpc/proto-loader');
const util = require('util');
// const PROTO_PATH = __dirname + '/proto/grpc_service.proto';
// const PROTO_IMPORT_PATH = __dirname + '/proto'

// const GRPCServicePackageDefinition = protoLoader.loadSync(PROTO_PATH, {
//     includeDirs: [PROTO_IMPORT_PATH],
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true
// });

function BufferToInt32Array(buf) {
    newArray = new Int32Array(buf.byteLength / 4)
    dv = new DataView(buf.buffer)
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = dv.getInt32(buf.byteOffset + (i * 4), littleEndian = true);
    }
    return newArray
}

// const inference = grpc.loadPackageDefinition(GRPCServicePackageDefinition).inference;

async function main() {
    const argv = process.argv.slice(2)
    const host = argv.length > 0 ? argv[0] : "localhost";
    const port = argv.length > 1 ? argv[1] : "8001";

    // const model_name = "simple";
    const model_name = "test_uint";
    const model_version = "";
    const batch_size = 1
    const dimension = 4

    // const client = new inference.GRPCInferenceService(host + ':' + port, grpc.credentials.createInsecure());
    const client = new tritonServiceGrpc.GRPCInferenceServiceClient(
        `${host}:${port}`, grpc.credentials.createInsecure()
    )

    const serverLive = util.promisify(client.serverLive).bind(client);
    const serverReady = util.promisify(client.serverReady).bind(client);
    const modelMetadata = util.promisify(client.modelMetadata).bind(client);
    const modelInfer = util.promisify(client.modelInfer).bind(client);

    const serverLiveRequest = new tritonServicePb.ServerLiveRequest()
    serverLiveResponse = await serverLive(serverLiveRequest);

    // const serverLiveResponse = await new Promise((resolve, reject) => {
    //     client.serverLive(serverLiveRequest, (error, serverLiveResponse) => {
    //         if (error) reject(error);
    //         else resolve(serverLiveResponse)
    //     })
    // })
    console.log("Triton Health - Live:", serverLiveResponse.getLive());
    if(!serverLiveResponse.getLive()) {
        console.error("Triton is not Live")
        process.exit(1);
    }

    // serverReadyResponse = await serverReady({});
    // console.log("Triton Health - Ready:", serverReadyResponse.ready);
    // if(!serverReadyResponse.ready) {
    //     console.error("Triton is not Ready")
    //     process.exit(1);
    // }

    // modelMetadataResponse = await modelMetadata({ name: model_name, version: model_version });
    // console.log("\nModel Info:", modelMetadataResponse)

    // Input Data
    // Use input dimension [batch_size, dimension]

    let input0_data = Array(batch_size * dimension).fill().map((element, index) => index + 1)
    let input1_data = Array(batch_size * dimension).fill().map((element, index) => index + 1)

    input0_data = Uint32Array.from(input0_data)
    input1_data = Uint32Array.from(input1_data)

    console.log(input0_data)
    console.log(input1_data)


    const input0_contents = new tritonServicePb.InferTensorContents()
    input0_contents.setUintContentsList(input0_data)
    const input1_contents = new tritonServicePb.InferTensorContents()
    input1_contents.setUintContentsList(input0_data)

    const input0 = new tritonServicePb.ModelInferRequest.InferInputTensor()
    input0.setName("INPUT0")
    input0.setDatatype("UINT32")
    input0.setShapeList([dimension])
    input0.setContents(input0_contents)

    const input1 = new tritonServicePb.ModelInferRequest.InferInputTensor()
    input1.setName("INPUT1")
    input1.setDatatype("UINT32")
    input1.setShapeList([dimension])
    input1.setContents(input0_contents)

    const output0 = new tritonServicePb.ModelInferRequest.InferRequestedOutputTensor()
    output0.setName("OUTPUT0")

    const output1 = new tritonServicePb.ModelInferRequest.InferRequestedOutputTensor()
    output1.setName("OUTPUT1")


    const modelInferRequest = new tritonServicePb.ModelInferRequest()
    modelInferRequest.setModelName(model_name)
    modelInferRequest.setModelVersion(model_version)
    modelInferRequest.setInputsList([input0, input1])
    modelInferRequest.setOutputsList([output0, output1])

    // console.log(JSON.stringify(modelInferRequest, null, "  "))
    console.log(modelInferRequest)
    // modelInferRequest.addRawInputContents(new Uint8Array(input0_data.buffer))
    // modelInferRequest.addRawInputContents(new Uint8Array(input1_data.buffer))




    // const input1_data = Array(batch_size * dimension).fill().map((element, index) => index)

    // const input0 = {
    //     name: "INPUT0",
    //     datatype: "INT32",
    //     shape: [batch_size, dimension],
    //     contents: {
    //         int_contents: input0_data
    //     }
    // }

    // const input1 = {
    //     name: "INPUT1",
    //     datatype: "INT32",
    //     shape: [batch_size, dimension],
    //     contents: {
    //         int_contents: input1_data
    //     }
    // }

    // const modelInferRequest = {
    //     model_name: model_name,
    //     model_version: model_version,
    //     inputs: [input0, input1],
    //     outputs: [
    //         { name: "OUTPUT0" },
    //         { name: "OUTPUT1" }
    //     ]
    // }

    const outputs = await modelInfer(modelInferRequest);

    console.log(outputs)

    output_data = outputs.getRawOutputContentsList().map(BufferToInt32Array);
    // output_data = outputs.raw_output_contents.map((value) => {value | 0})

    console.log("\nChecking Inference Output")
    console.log("-------------------------")
    for (let i = 0; i < dimension; i++) {
        console.log(input0_data[i] + " + " + input1_data[i] + " = " + output_data[0][i])
        console.log(input0_data[i] + " - " + input1_data[i] + " = " + output_data[1][i])
        if (((input0_data[i] + input1_data[i]) != output_data[0][i]) ||
                ((input0_data[i] - input1_data[i]) != output_data[1][i])) {
            console.error("Unexpected results encountered")
            process.exit(1);
        }
    }

}

main()
