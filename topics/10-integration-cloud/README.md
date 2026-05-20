# 10 · Integration & Cloud

> **Connecting to your existing stack.** Gateways, routing, streaming, cloud provider specifics, and deployment topology.

| Step | Topic | One-liner | Status |
|------|-------|-----------|--------|
| 1 | [Streaming (SSE)](streaming-sse.md) | Server-sent events for token-by-token streaming from LLM APIs | 🔴 |
| 2 | [AI gateway](ai-gateway.md) | The entry point: auth, rate limiting, routing, and observability in one layer | 🔴 |
| 3 | [Auth & rate limiting](auth-rate-limiting.md) | OAuth, API keys, and per-tenant token budgets | 🔴 |
| 4 | [Load balancing](load-balancing.md) | Distributing requests across model replicas — LLM-specific challenges | 🔴 |
| 5 | [Model router](model-router.md) | Routing requests to different models based on cost, latency, or capability | 🔴 |
| 6 | [KV cache-aware routing](kv-cache-aware-routing.md) | Routing requests to the replica that already has the matching KV cache | 🔴 |
| 7 | [Prefix-aware routing](prefix-aware-routing.md) | Routing by shared prompt prefix to maximize cache hit rate | 🔴 |
| 8 | [Fallback chain](fallback-chain.md) | Cascading through model options when the primary fails or is rate-limited | 🔴 |
| 9 | [Open-weight vs managed endpoints](open-weight-vs-managed.md) | The cost, control, and operational tradeoffs between self-hosted and API | 🔴 |
| 10 | [Cloud platforms](cloud-platforms.md) | Vertex AI, Azure ML, and SageMaker — what each offers for LLM workloads | 🔴 |
| 11 | [Managed inference](managed-inference.md) | Groq, Baseten, Modal — fast inference APIs without self-hosting | 🔴 |
| 12 | [Hugging Face Inference Endpoints](huggingface-endpoints.md) | One-click hosted inference for HF models | 🔴 |
| 13 | [Data sovereignty](data-sovereignty.md) | Legal and architectural constraints on where model data can go | 🔴 |
| 14 | [VPC & private endpoint](vpc-private-endpoint.md) | Keeping LLM traffic inside your network perimeter | 🔴 |
| 15 | [On-prem & hybrid deployment](on-prem-hybrid.md) | Running models on your own hardware alongside cloud capacity | 🔴 |

---

**← Previous section:** [09 · Observability & Ops](../09-observability-ops/README.md)
