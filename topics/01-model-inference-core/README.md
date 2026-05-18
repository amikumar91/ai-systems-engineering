?# 01 · Model Inference Core

> **What runs the model.** Start here before any other section — everything else builds on these concepts.

Work through topics in the order below. Each one depends on the previous.

| Step | Topic | One-liner | Status |
|------|-------|-----------|--------|
| 1 | [LLM, SLM & Foundation Models](llm-slm-overview.md) | What an LLM actually is and how it differs from earlier ML models | 🟢 |
| 2 | [Tokenization](tokenization.md) | How raw text is split into the tokens a model actually sees | 🟢 |
| 3 | [Embeddings](embeddings.md) | How tokens get numerical meaning in high-dimensional space | 🔴 |
| 4 | [Transformer architecture](transformer.md) | The encoder-decoder architecture that underlies every modern LLM | 🔴 |
| 5 | [Attention mechanism](attention-mechanism.md) | How the model relates every token to every other token | 🔴 |
| 6 | [Context window](context-window.md) | Why there's a limit and what happens when you hit it | 🔴 |
| 7 | [Autoregressive decoding](autoregressive-decoding.md) | How the model generates one token at a time | 🔴 |
| 8 | [KV cache](kv-cache.md) | How intermediate attention state is cached to avoid recomputing | 🔴 |
| 9 | [TTFT & TBT metrics](ttft-tbt-metrics.md) | Time to first token and time between tokens — how you measure inference speed | 🔴 |
| 10 | [Continuous batching](continuous-batching.md) | How multiple requests share the GPU without waiting for each other | 🔴 |
| 11 | [Paged attention](paged-attention.md) | Dynamic KV cache memory management — the core vLLM innovation | 🔴 |
| 12 | [FlashAttention](flash-attention.md) | IO-aware attention that cuts memory usage and speeds up training/inference | 🔴 |
| 13 | [Chunked prefill](chunked-prefill.md) | Breaking long prompts into chunks to improve scheduling fairness | 🔴 |
| 14 | [Speculative decoding](speculative-decoding.md) | Using a small draft model to generate candidates the large model verifies | 🔴 |
| 15 | [Mixture of Experts (MoE)](mixture-of-experts.md) | Routing each token to a subset of specialized sub-networks | 🔴 |
| 16 | [Multimodal LLMs & VLMs](multimodal-llm.md) | Extending language models to images, audio, and video | 🔴 |
| 17 | [Reasoning models](reasoning-models.md) | Models trained to think step-by-step before answering | 🔴 |

---

**Next section →** [02 · Model Optimization](../02-model-optimization/README.md)
