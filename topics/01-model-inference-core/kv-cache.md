---
sidebar_position: 8
---
﻿# KV cache

> **Layer:** Model serving  
> **Status:** 🟢 Notes written  
> **Related:** [vLLM](../03-serving-infrastructure/vllm.md) · [Prefill / decode disaggregation](../03-serving-infrastructure/prefill-decode-disaggregation.md) · [KV cache-aware routing](../10-integration-cloud/kv-cache-aware-routing.md)

---

## What it is

The KV cache (Key-Value cache) is the memory structure that makes autoregressive LLM decoding feasible at any reasonable speed. Without it, generating each new token would require re-reading and re-processing the entire conversation history from scratch — which would make inference roughly N² slower as responses get longer.

K and V refer to the **Key** and **Value** matrices in the transformer's attention mechanism. During the prefill phase, as the model reads your prompt, it computes K and V tensors for every token at every layer. The KV cache stores these so the decode phase can reuse them rather than recompute.

---

## How it works

### Attention recap (the minimal version)

In a transformer, every token "attends" to every previous token. To do this, three matrices are computed per token per layer: **Query (Q)**, **Key (K)**, and **Value (V)**. The attention score between token A and token B is computed from Q_A · K_B. The output is a weighted sum of all V vectors.

During decode (generating token by token), only the **new** token has a new Q. All previous tokens' K and V are already known — they don't change. So you cache them.

### What gets stored

For each request, the KV cache stores:
- One K tensor and one V tensor per transformer layer
- For every token in the current context (prompt + generated tokens so far)

Size grows linearly with context length and number of layers. For a 7B model with 32 layers processing 4096 tokens, the KV cache can be several GB per request — which is why GPU memory is the primary bottleneck in LLM serving, not compute.

### Prefix caching

If many requests share the same system prompt, you can cache the KV state for that prefix once and reuse it across all requests. The prefill cost for the shared portion is paid only once. In production systems with a fixed system prompt (very common), this is a significant latency and compute saving.

vLLM implements this with `--enable-prefix-caching`. The cache key is a hash of the token IDs in the shared prefix.

### KV cache quantization

The KV cache itself can be quantized (stored in FP8 or INT8 instead of FP16/BF16) to reduce memory footprint and fit more concurrent requests on the same GPU — at a small quality cost.

---

## Why it matters

The KV cache is the central resource constraint in LLM serving. Everything in vLLM's architecture — PagedAttention, continuous batching, prefix caching — is fundamentally about managing KV cache memory more efficiently.

In a production system:
- **Too little KV cache memory** → fewer concurrent requests → lower throughput → higher cost per request
- **Too much context per request** → KV cache fills GPU memory → other requests get queued → latency spikes
- **Shared system prompt without prefix caching** → redundant prefill compute on every request

Understanding the KV cache is the prerequisite for understanding almost every inference optimization technique.

---

## Key terms

| Term | Meaning |
|------|---------|
| **K/V tensors** | Key and Value matrices cached per token per layer |
| **Prefill** | Phase where the KV cache is built from the prompt |
| **Decode** | Phase where cached K/V is reused to generate each new token |
| **Prefix caching** | Reusing KV cache for shared prompt prefixes across requests |
| **PagedAttention** | vLLM's dynamic memory allocator for KV cache pages |
| **KV cache quantization** | Storing K/V in lower precision (FP8) to save memory |
| **Context length** | Determines KV cache size — longer context = more memory |
| **Cache eviction** | Dropping KV cache entries when memory is full |

---

## Code / demo

```python
# vLLM handles KV cache automatically — but you control it via flags

# Enable prefix caching (reuse KV for shared system prompts)
python -m vllm.entrypoints.openai.api_server \
  --model Qwen/Qwen2.5-7B-Instruct \
  --enable-prefix-caching \
  --max-model-len 8192           # cap context = cap KV cache size per request

# KV cache quantization (FP8 — saves ~50% KV memory)
python -m vllm.entrypoints.openai.api_server \
  --model Qwen/Qwen2.5-7B-Instruct \
  --kv-cache-dtype fp8
```

```python
# Measuring prefix cache hit rate via vLLM metrics endpoint
import requests

metrics = requests.get("http://localhost:8000/metrics").text
# Look for: vllm:gpu_prefix_cache_hit_rate
# A high hit rate (>0.8) means your system prompt prefix caching is working well
```

---

## My notes

> _Fill in as you observe KV cache behaviour in production._

- What's the typical context length per request in your use case?
- Is prefix caching enabled? If the system prompt is fixed across requests, this is low-hanging fruit.
- What GPU memory utilization does vLLM report? (`--gpu-memory-utilization` default is 0.9 — the rest is reserved for KV cache)
- Have you hit OOM errors? That's usually the KV cache growing faster than expected on long conversations

---

## Resources

1. [Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180) — the paper that introduced PagedAttention and explains why KV cache memory is the bottleneck
2. [vLLM docs — prefix caching](https://docs.vllm.ai/en/latest/automatic_prefix_caching/apc.html)
3. [Transformers explained — attention mechanism](https://jalammar.github.io/illustrated-transformer/) — Jay Alammar's visual guide, the clearest explanation of Q/K/V that exists
