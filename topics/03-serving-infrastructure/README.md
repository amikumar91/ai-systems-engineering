?# 03 · Serving Infrastructure

> **How to deploy and scale.** The engines, parallelism strategies, and operational concepts that turn a model into a production service.

| Step | Topic | One-liner | Status |
|------|-------|-----------|--------|
| 1 | [vLLM](vllm.md) | The most widely used open-source inference engine — PagedAttention, continuous batching | 🔴 |
| 2 | [OpenAI-compatible API](openai-compatible-api.md) | The REST interface standard that makes engines interchangeable | 🔴 |
| 3 | [TGI — Text Generation Inference](tgi.md) | HuggingFace's inference server — strengths vs vLLM | 🔴 |
| 4 | [TensorRT-LLM](tensorrt-llm.md) | NVIDIA's compiled inference engine — maximum GPU throughput | 🔴 |
| 5 | [SGLang](sglang.md) | Structured generation language — fast multi-call and constrained decoding | 🔴 |
| 6 | [llama.cpp & Ollama](llama-cpp-ollama.md) | CPU-first inference for local and edge use cases | 🔴 |
| 7 | [Triton Inference Server](triton-inference-server.md) | NVIDIA's production serving framework supporting multiple backends | 🔴 |
| 8 | [P/D disaggregation](prefill-decode-disaggregation.md) | Splitting prefill and decode onto separate workers for efficiency | 🔴 |
| 9 | [Tensor parallelism](tensor-parallelism.md) | Splitting model layers across GPUs horizontally | 🔴 |
| 10 | [Pipeline parallelism](pipeline-parallelism.md) | Splitting model layers across GPUs vertically in stages | 🔴 |
| 11 | [Expert parallelism](expert-parallelism.md) | Distributing MoE expert networks across GPUs | 🔴 |
| 12 | [Serving metrics](serving-metrics.md) | Throughput, latency SLO, goodput — how to measure a serving system | 🔴 |
| 13 | [Batch inference](batch-inference.md) | Offline processing of large request volumes without latency constraints | 🔴 |
| 14 | [Edge inference](edge-inference.md) | Running models on-device with constrained compute and memory | 🔴 |
| 15 | [NVIDIA Dynamo](nvidia-dynamo.md) | NVIDIA's new inference and serving framework (2025) | 🔴 |

---

**← Previous section:** [02 · Model Optimization](../02-model-optimization/README.md) | **Next section →** [04 · Retrieval & Memory](../04-retrieval-memory/README.md)
