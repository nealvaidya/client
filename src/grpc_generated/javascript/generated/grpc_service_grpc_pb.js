// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2020, NVIDIA CORPORATION. All rights reserved.
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
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
'use strict';
var grpc = require('grpc');
var grpc_service_pb = require('./grpc_service_pb.js');
var model_config_pb = require('./model_config_pb.js');

function serialize_inference_CudaSharedMemoryRegisterRequest(arg) {
  if (!(arg instanceof grpc_service_pb.CudaSharedMemoryRegisterRequest)) {
    throw new Error('Expected argument of type inference.CudaSharedMemoryRegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_CudaSharedMemoryRegisterRequest(buffer_arg) {
  return grpc_service_pb.CudaSharedMemoryRegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_CudaSharedMemoryRegisterResponse(arg) {
  if (!(arg instanceof grpc_service_pb.CudaSharedMemoryRegisterResponse)) {
    throw new Error('Expected argument of type inference.CudaSharedMemoryRegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_CudaSharedMemoryRegisterResponse(buffer_arg) {
  return grpc_service_pb.CudaSharedMemoryRegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_CudaSharedMemoryStatusRequest(arg) {
  if (!(arg instanceof grpc_service_pb.CudaSharedMemoryStatusRequest)) {
    throw new Error('Expected argument of type inference.CudaSharedMemoryStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_CudaSharedMemoryStatusRequest(buffer_arg) {
  return grpc_service_pb.CudaSharedMemoryStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_CudaSharedMemoryStatusResponse(arg) {
  if (!(arg instanceof grpc_service_pb.CudaSharedMemoryStatusResponse)) {
    throw new Error('Expected argument of type inference.CudaSharedMemoryStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_CudaSharedMemoryStatusResponse(buffer_arg) {
  return grpc_service_pb.CudaSharedMemoryStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_CudaSharedMemoryUnregisterRequest(arg) {
  if (!(arg instanceof grpc_service_pb.CudaSharedMemoryUnregisterRequest)) {
    throw new Error('Expected argument of type inference.CudaSharedMemoryUnregisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_CudaSharedMemoryUnregisterRequest(buffer_arg) {
  return grpc_service_pb.CudaSharedMemoryUnregisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_CudaSharedMemoryUnregisterResponse(arg) {
  if (!(arg instanceof grpc_service_pb.CudaSharedMemoryUnregisterResponse)) {
    throw new Error('Expected argument of type inference.CudaSharedMemoryUnregisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_CudaSharedMemoryUnregisterResponse(buffer_arg) {
  return grpc_service_pb.CudaSharedMemoryUnregisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelConfigRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ModelConfigRequest)) {
    throw new Error('Expected argument of type inference.ModelConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelConfigRequest(buffer_arg) {
  return grpc_service_pb.ModelConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelConfigResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ModelConfigResponse)) {
    throw new Error('Expected argument of type inference.ModelConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelConfigResponse(buffer_arg) {
  return grpc_service_pb.ModelConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelInferRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ModelInferRequest)) {
    throw new Error('Expected argument of type inference.ModelInferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelInferRequest(buffer_arg) {
  return grpc_service_pb.ModelInferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelInferResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ModelInferResponse)) {
    throw new Error('Expected argument of type inference.ModelInferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelInferResponse(buffer_arg) {
  return grpc_service_pb.ModelInferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelMetadataRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ModelMetadataRequest)) {
    throw new Error('Expected argument of type inference.ModelMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelMetadataRequest(buffer_arg) {
  return grpc_service_pb.ModelMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelMetadataResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ModelMetadataResponse)) {
    throw new Error('Expected argument of type inference.ModelMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelMetadataResponse(buffer_arg) {
  return grpc_service_pb.ModelMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelReadyRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ModelReadyRequest)) {
    throw new Error('Expected argument of type inference.ModelReadyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelReadyRequest(buffer_arg) {
  return grpc_service_pb.ModelReadyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelReadyResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ModelReadyResponse)) {
    throw new Error('Expected argument of type inference.ModelReadyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelReadyResponse(buffer_arg) {
  return grpc_service_pb.ModelReadyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelStatisticsRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ModelStatisticsRequest)) {
    throw new Error('Expected argument of type inference.ModelStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelStatisticsRequest(buffer_arg) {
  return grpc_service_pb.ModelStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelStatisticsResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ModelStatisticsResponse)) {
    throw new Error('Expected argument of type inference.ModelStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelStatisticsResponse(buffer_arg) {
  return grpc_service_pb.ModelStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ModelStreamInferResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ModelStreamInferResponse)) {
    throw new Error('Expected argument of type inference.ModelStreamInferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ModelStreamInferResponse(buffer_arg) {
  return grpc_service_pb.ModelStreamInferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_RepositoryIndexRequest(arg) {
  if (!(arg instanceof grpc_service_pb.RepositoryIndexRequest)) {
    throw new Error('Expected argument of type inference.RepositoryIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_RepositoryIndexRequest(buffer_arg) {
  return grpc_service_pb.RepositoryIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_RepositoryIndexResponse(arg) {
  if (!(arg instanceof grpc_service_pb.RepositoryIndexResponse)) {
    throw new Error('Expected argument of type inference.RepositoryIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_RepositoryIndexResponse(buffer_arg) {
  return grpc_service_pb.RepositoryIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_RepositoryModelLoadRequest(arg) {
  if (!(arg instanceof grpc_service_pb.RepositoryModelLoadRequest)) {
    throw new Error('Expected argument of type inference.RepositoryModelLoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_RepositoryModelLoadRequest(buffer_arg) {
  return grpc_service_pb.RepositoryModelLoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_RepositoryModelLoadResponse(arg) {
  if (!(arg instanceof grpc_service_pb.RepositoryModelLoadResponse)) {
    throw new Error('Expected argument of type inference.RepositoryModelLoadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_RepositoryModelLoadResponse(buffer_arg) {
  return grpc_service_pb.RepositoryModelLoadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_RepositoryModelUnloadRequest(arg) {
  if (!(arg instanceof grpc_service_pb.RepositoryModelUnloadRequest)) {
    throw new Error('Expected argument of type inference.RepositoryModelUnloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_RepositoryModelUnloadRequest(buffer_arg) {
  return grpc_service_pb.RepositoryModelUnloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_RepositoryModelUnloadResponse(arg) {
  if (!(arg instanceof grpc_service_pb.RepositoryModelUnloadResponse)) {
    throw new Error('Expected argument of type inference.RepositoryModelUnloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_RepositoryModelUnloadResponse(buffer_arg) {
  return grpc_service_pb.RepositoryModelUnloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ServerLiveRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ServerLiveRequest)) {
    throw new Error('Expected argument of type inference.ServerLiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ServerLiveRequest(buffer_arg) {
  return grpc_service_pb.ServerLiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ServerLiveResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ServerLiveResponse)) {
    throw new Error('Expected argument of type inference.ServerLiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ServerLiveResponse(buffer_arg) {
  return grpc_service_pb.ServerLiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ServerMetadataRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ServerMetadataRequest)) {
    throw new Error('Expected argument of type inference.ServerMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ServerMetadataRequest(buffer_arg) {
  return grpc_service_pb.ServerMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ServerMetadataResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ServerMetadataResponse)) {
    throw new Error('Expected argument of type inference.ServerMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ServerMetadataResponse(buffer_arg) {
  return grpc_service_pb.ServerMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ServerReadyRequest(arg) {
  if (!(arg instanceof grpc_service_pb.ServerReadyRequest)) {
    throw new Error('Expected argument of type inference.ServerReadyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ServerReadyRequest(buffer_arg) {
  return grpc_service_pb.ServerReadyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_ServerReadyResponse(arg) {
  if (!(arg instanceof grpc_service_pb.ServerReadyResponse)) {
    throw new Error('Expected argument of type inference.ServerReadyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_ServerReadyResponse(buffer_arg) {
  return grpc_service_pb.ServerReadyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_SystemSharedMemoryRegisterRequest(arg) {
  if (!(arg instanceof grpc_service_pb.SystemSharedMemoryRegisterRequest)) {
    throw new Error('Expected argument of type inference.SystemSharedMemoryRegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_SystemSharedMemoryRegisterRequest(buffer_arg) {
  return grpc_service_pb.SystemSharedMemoryRegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_SystemSharedMemoryRegisterResponse(arg) {
  if (!(arg instanceof grpc_service_pb.SystemSharedMemoryRegisterResponse)) {
    throw new Error('Expected argument of type inference.SystemSharedMemoryRegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_SystemSharedMemoryRegisterResponse(buffer_arg) {
  return grpc_service_pb.SystemSharedMemoryRegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_SystemSharedMemoryStatusRequest(arg) {
  if (!(arg instanceof grpc_service_pb.SystemSharedMemoryStatusRequest)) {
    throw new Error('Expected argument of type inference.SystemSharedMemoryStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_SystemSharedMemoryStatusRequest(buffer_arg) {
  return grpc_service_pb.SystemSharedMemoryStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_SystemSharedMemoryStatusResponse(arg) {
  if (!(arg instanceof grpc_service_pb.SystemSharedMemoryStatusResponse)) {
    throw new Error('Expected argument of type inference.SystemSharedMemoryStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_SystemSharedMemoryStatusResponse(buffer_arg) {
  return grpc_service_pb.SystemSharedMemoryStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_SystemSharedMemoryUnregisterRequest(arg) {
  if (!(arg instanceof grpc_service_pb.SystemSharedMemoryUnregisterRequest)) {
    throw new Error('Expected argument of type inference.SystemSharedMemoryUnregisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_SystemSharedMemoryUnregisterRequest(buffer_arg) {
  return grpc_service_pb.SystemSharedMemoryUnregisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inference_SystemSharedMemoryUnregisterResponse(arg) {
  if (!(arg instanceof grpc_service_pb.SystemSharedMemoryUnregisterResponse)) {
    throw new Error('Expected argument of type inference.SystemSharedMemoryUnregisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inference_SystemSharedMemoryUnregisterResponse(buffer_arg) {
  return grpc_service_pb.SystemSharedMemoryUnregisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// @@
// @@.. cpp:var:: service InferenceService
// @@
// @@   Inference Server GRPC endpoints.
// @@
var GRPCInferenceServiceService = exports.GRPCInferenceServiceService = {
  // @@  .. cpp:var:: rpc ServerLive(ServerLiveRequest) returns
// @@       (ServerLiveResponse)
// @@
// @@     Check liveness of the inference server.
// @@
serverLive: {
    path: '/inference.GRPCInferenceService/ServerLive',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ServerLiveRequest,
    responseType: grpc_service_pb.ServerLiveResponse,
    requestSerialize: serialize_inference_ServerLiveRequest,
    requestDeserialize: deserialize_inference_ServerLiveRequest,
    responseSerialize: serialize_inference_ServerLiveResponse,
    responseDeserialize: deserialize_inference_ServerLiveResponse,
  },
  // @@  .. cpp:var:: rpc ServerReady(ServerReadyRequest) returns
// @@       (ServerReadyResponse)
// @@
// @@     Check readiness of the inference server.
// @@
serverReady: {
    path: '/inference.GRPCInferenceService/ServerReady',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ServerReadyRequest,
    responseType: grpc_service_pb.ServerReadyResponse,
    requestSerialize: serialize_inference_ServerReadyRequest,
    requestDeserialize: deserialize_inference_ServerReadyRequest,
    responseSerialize: serialize_inference_ServerReadyResponse,
    responseDeserialize: deserialize_inference_ServerReadyResponse,
  },
  // @@  .. cpp:var:: rpc ModelReady(ModelReadyRequest) returns
// @@       (ModelReadyResponse)
// @@
// @@     Check readiness of a model in the inference server.
// @@
modelReady: {
    path: '/inference.GRPCInferenceService/ModelReady',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ModelReadyRequest,
    responseType: grpc_service_pb.ModelReadyResponse,
    requestSerialize: serialize_inference_ModelReadyRequest,
    requestDeserialize: deserialize_inference_ModelReadyRequest,
    responseSerialize: serialize_inference_ModelReadyResponse,
    responseDeserialize: deserialize_inference_ModelReadyResponse,
  },
  // @@  .. cpp:var:: rpc ServerMetadata(ServerMetadataRequest) returns
// @@       (ServerMetadataResponse)
// @@
// @@     Get server metadata.
// @@
serverMetadata: {
    path: '/inference.GRPCInferenceService/ServerMetadata',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ServerMetadataRequest,
    responseType: grpc_service_pb.ServerMetadataResponse,
    requestSerialize: serialize_inference_ServerMetadataRequest,
    requestDeserialize: deserialize_inference_ServerMetadataRequest,
    responseSerialize: serialize_inference_ServerMetadataResponse,
    responseDeserialize: deserialize_inference_ServerMetadataResponse,
  },
  // @@  .. cpp:var:: rpc ModelMetadata(ModelMetadataRequest) returns
// @@       (ModelMetadataResponse)
// @@
// @@     Get model metadata.
// @@
modelMetadata: {
    path: '/inference.GRPCInferenceService/ModelMetadata',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ModelMetadataRequest,
    responseType: grpc_service_pb.ModelMetadataResponse,
    requestSerialize: serialize_inference_ModelMetadataRequest,
    requestDeserialize: deserialize_inference_ModelMetadataRequest,
    responseSerialize: serialize_inference_ModelMetadataResponse,
    responseDeserialize: deserialize_inference_ModelMetadataResponse,
  },
  // @@  .. cpp:var:: rpc ModelInfer(ModelInferRequest) returns
// @@       (ModelInferResponse)
// @@
// @@     Perform inference using a specific model.
// @@
modelInfer: {
    path: '/inference.GRPCInferenceService/ModelInfer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ModelInferRequest,
    responseType: grpc_service_pb.ModelInferResponse,
    requestSerialize: serialize_inference_ModelInferRequest,
    requestDeserialize: deserialize_inference_ModelInferRequest,
    responseSerialize: serialize_inference_ModelInferResponse,
    responseDeserialize: deserialize_inference_ModelInferResponse,
  },
  // @@  .. cpp:var:: rpc ModelStreamInfer(stream ModelInferRequest) returns
// @@       (stream ModelStreamInferResponse)
// @@
// @@     Perform streaming inference.
// @@
modelStreamInfer: {
    path: '/inference.GRPCInferenceService/ModelStreamInfer',
    requestStream: true,
    responseStream: true,
    requestType: grpc_service_pb.ModelInferRequest,
    responseType: grpc_service_pb.ModelStreamInferResponse,
    requestSerialize: serialize_inference_ModelInferRequest,
    requestDeserialize: deserialize_inference_ModelInferRequest,
    responseSerialize: serialize_inference_ModelStreamInferResponse,
    responseDeserialize: deserialize_inference_ModelStreamInferResponse,
  },
  // @@  .. cpp:var:: rpc ModelConfig(ModelConfigRequest) returns
// @@       (ModelConfigResponse)
// @@
// @@     Get model configuration.
// @@
modelConfig: {
    path: '/inference.GRPCInferenceService/ModelConfig',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ModelConfigRequest,
    responseType: grpc_service_pb.ModelConfigResponse,
    requestSerialize: serialize_inference_ModelConfigRequest,
    requestDeserialize: deserialize_inference_ModelConfigRequest,
    responseSerialize: serialize_inference_ModelConfigResponse,
    responseDeserialize: deserialize_inference_ModelConfigResponse,
  },
  // @@  .. cpp:var:: rpc ModelStatistics(
// @@                     ModelStatisticsRequest)
// @@                   returns (ModelStatisticsResponse)
// @@
// @@     Get the cumulative inference statistics for a model.
// @@
modelStatistics: {
    path: '/inference.GRPCInferenceService/ModelStatistics',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.ModelStatisticsRequest,
    responseType: grpc_service_pb.ModelStatisticsResponse,
    requestSerialize: serialize_inference_ModelStatisticsRequest,
    requestDeserialize: deserialize_inference_ModelStatisticsRequest,
    responseSerialize: serialize_inference_ModelStatisticsResponse,
    responseDeserialize: deserialize_inference_ModelStatisticsResponse,
  },
  // @@  .. cpp:var:: rpc RepositoryIndex(RepositoryIndexRequest) returns
// @@       (RepositoryIndexResponse)
// @@
// @@     Get the index of model repository contents.
// @@
repositoryIndex: {
    path: '/inference.GRPCInferenceService/RepositoryIndex',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.RepositoryIndexRequest,
    responseType: grpc_service_pb.RepositoryIndexResponse,
    requestSerialize: serialize_inference_RepositoryIndexRequest,
    requestDeserialize: deserialize_inference_RepositoryIndexRequest,
    responseSerialize: serialize_inference_RepositoryIndexResponse,
    responseDeserialize: deserialize_inference_RepositoryIndexResponse,
  },
  // @@  .. cpp:var:: rpc RepositoryModelLoad(RepositoryModelLoadRequest) returns
// @@       (RepositoryModelLoadResponse)
// @@
// @@     Load or reload a model from a repository.
// @@
repositoryModelLoad: {
    path: '/inference.GRPCInferenceService/RepositoryModelLoad',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.RepositoryModelLoadRequest,
    responseType: grpc_service_pb.RepositoryModelLoadResponse,
    requestSerialize: serialize_inference_RepositoryModelLoadRequest,
    requestDeserialize: deserialize_inference_RepositoryModelLoadRequest,
    responseSerialize: serialize_inference_RepositoryModelLoadResponse,
    responseDeserialize: deserialize_inference_RepositoryModelLoadResponse,
  },
  // @@  .. cpp:var:: rpc RepositoryModelUnload(RepositoryModelUnloadRequest)
// @@       returns (RepositoryModelUnloadResponse)
// @@
// @@     Unload a model.
// @@
repositoryModelUnload: {
    path: '/inference.GRPCInferenceService/RepositoryModelUnload',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.RepositoryModelUnloadRequest,
    responseType: grpc_service_pb.RepositoryModelUnloadResponse,
    requestSerialize: serialize_inference_RepositoryModelUnloadRequest,
    requestDeserialize: deserialize_inference_RepositoryModelUnloadRequest,
    responseSerialize: serialize_inference_RepositoryModelUnloadResponse,
    responseDeserialize: deserialize_inference_RepositoryModelUnloadResponse,
  },
  // @@  .. cpp:var:: rpc SystemSharedMemoryStatus(
// @@                     SystemSharedMemoryStatusRequest)
// @@                   returns (SystemSharedMemoryStatusRespose)
// @@
// @@     Get the status of all registered system-shared-memory regions.
// @@
systemSharedMemoryStatus: {
    path: '/inference.GRPCInferenceService/SystemSharedMemoryStatus',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.SystemSharedMemoryStatusRequest,
    responseType: grpc_service_pb.SystemSharedMemoryStatusResponse,
    requestSerialize: serialize_inference_SystemSharedMemoryStatusRequest,
    requestDeserialize: deserialize_inference_SystemSharedMemoryStatusRequest,
    responseSerialize: serialize_inference_SystemSharedMemoryStatusResponse,
    responseDeserialize: deserialize_inference_SystemSharedMemoryStatusResponse,
  },
  // @@  .. cpp:var:: rpc SystemSharedMemoryRegister(
// @@                     SystemSharedMemoryRegisterRequest)
// @@                   returns (SystemSharedMemoryRegisterResponse)
// @@
// @@     Register a system-shared-memory region.
// @@
systemSharedMemoryRegister: {
    path: '/inference.GRPCInferenceService/SystemSharedMemoryRegister',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.SystemSharedMemoryRegisterRequest,
    responseType: grpc_service_pb.SystemSharedMemoryRegisterResponse,
    requestSerialize: serialize_inference_SystemSharedMemoryRegisterRequest,
    requestDeserialize: deserialize_inference_SystemSharedMemoryRegisterRequest,
    responseSerialize: serialize_inference_SystemSharedMemoryRegisterResponse,
    responseDeserialize: deserialize_inference_SystemSharedMemoryRegisterResponse,
  },
  // @@  .. cpp:var:: rpc SystemSharedMemoryUnregister(
// @@                     SystemSharedMemoryUnregisterRequest)
// @@                   returns (SystemSharedMemoryUnregisterResponse)
// @@
// @@     Unregister a system-shared-memory region.
// @@
systemSharedMemoryUnregister: {
    path: '/inference.GRPCInferenceService/SystemSharedMemoryUnregister',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.SystemSharedMemoryUnregisterRequest,
    responseType: grpc_service_pb.SystemSharedMemoryUnregisterResponse,
    requestSerialize: serialize_inference_SystemSharedMemoryUnregisterRequest,
    requestDeserialize: deserialize_inference_SystemSharedMemoryUnregisterRequest,
    responseSerialize: serialize_inference_SystemSharedMemoryUnregisterResponse,
    responseDeserialize: deserialize_inference_SystemSharedMemoryUnregisterResponse,
  },
  // @@  .. cpp:var:: rpc CudaSharedMemoryStatus(
// @@                     CudaSharedMemoryStatusRequest)
// @@                   returns (CudaSharedMemoryStatusRespose)
// @@
// @@     Get the status of all registered CUDA-shared-memory regions.
// @@
cudaSharedMemoryStatus: {
    path: '/inference.GRPCInferenceService/CudaSharedMemoryStatus',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.CudaSharedMemoryStatusRequest,
    responseType: grpc_service_pb.CudaSharedMemoryStatusResponse,
    requestSerialize: serialize_inference_CudaSharedMemoryStatusRequest,
    requestDeserialize: deserialize_inference_CudaSharedMemoryStatusRequest,
    responseSerialize: serialize_inference_CudaSharedMemoryStatusResponse,
    responseDeserialize: deserialize_inference_CudaSharedMemoryStatusResponse,
  },
  // @@  .. cpp:var:: rpc CudaSharedMemoryRegister(
// @@                     CudaSharedMemoryRegisterRequest)
// @@                   returns (CudaSharedMemoryRegisterResponse)
// @@
// @@     Register a CUDA-shared-memory region.
// @@
cudaSharedMemoryRegister: {
    path: '/inference.GRPCInferenceService/CudaSharedMemoryRegister',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.CudaSharedMemoryRegisterRequest,
    responseType: grpc_service_pb.CudaSharedMemoryRegisterResponse,
    requestSerialize: serialize_inference_CudaSharedMemoryRegisterRequest,
    requestDeserialize: deserialize_inference_CudaSharedMemoryRegisterRequest,
    responseSerialize: serialize_inference_CudaSharedMemoryRegisterResponse,
    responseDeserialize: deserialize_inference_CudaSharedMemoryRegisterResponse,
  },
  // @@  .. cpp:var:: rpc CudaSharedMemoryUnregister(
// @@                     CudaSharedMemoryUnregisterRequest)
// @@                   returns (CudaSharedMemoryUnregisterResponse)
// @@
// @@     Unregister a CUDA-shared-memory region.
// @@
cudaSharedMemoryUnregister: {
    path: '/inference.GRPCInferenceService/CudaSharedMemoryUnregister',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.CudaSharedMemoryUnregisterRequest,
    responseType: grpc_service_pb.CudaSharedMemoryUnregisterResponse,
    requestSerialize: serialize_inference_CudaSharedMemoryUnregisterRequest,
    requestDeserialize: deserialize_inference_CudaSharedMemoryUnregisterRequest,
    responseSerialize: serialize_inference_CudaSharedMemoryUnregisterResponse,
    responseDeserialize: deserialize_inference_CudaSharedMemoryUnregisterResponse,
  },
};

exports.GRPCInferenceServiceClient = grpc.makeGenericClientConstructor(GRPCInferenceServiceService);
