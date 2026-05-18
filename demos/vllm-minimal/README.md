# Demo: vllm-minimal

> Spin up vLLM locally, serve an open-weight model, and hit the OpenAI-compatible API.

## What this covers
- Installing vLLM
- Serving a model with useful production flags
- Making requests via curl and Python
- Checking metrics (throughput, prefix cache hit rate)

## Status
🔴 Not built yet — build this after reading [vllm.md](../../01-model-serving/vllm.md)

## Files
```
vllm-minimal/
├── README.md          ← this file
├── serve.sh           ← vLLM startup script with production flags
├── client.py          ← Python client using openai SDK
└── metrics.py         ← scrape vLLM Prometheus metrics
```

## Prerequisites
- Python 3.10+
- CUDA-capable GPU (or use CPU with a small model for testing)
- `pip install vllm openai`

## Build notes
> _Add observations here as you build it._
