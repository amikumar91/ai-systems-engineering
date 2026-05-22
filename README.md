# AI Systems Engineering

> Personal knowledge base — 136 topics covering the full production AI stack, from inference mechanics to agents, evaluation, and governance.

---

## Learning Paths

136 topics is a lot. These paths give you a focused trail based on your goal. Original sections are untouched.

| Path | Topics | Time |
|------|--------|------|
| ⚡ Quick Start | 7 | ~2 days |
| 🧱 Essentials | 22 | ~2 weeks |
| 🔨 For Builders | 28 | ~3 weeks |
| ⚙️ Systems Depth | ~79 | Ongoing |

→ Full detail in [`topics/learning-paths/index.md`](./topics/learning-paths/index.md)

---

## Progress

**8 / 136 topics complete** — 🔴 not started · 🟡 in progress · 🟢 done · 🔨 demo built

| Section | Done | Total |
|---------|------|-------|
| 01 · Model inference core | 7 | 17 |
| 02 · Prompting & control | 1 | 9 |
| 03 · Serving infrastructure | 0 | 15 |
| 04 · Model optimization | 0 | 11 |
| 05 · Retrieval & memory | 0 | 12 |
| 06 · Agents & orchestration | 0 | 15 |
| 07 · Safety & governance | 0 | 15 |
| 08 · Evaluation & quality | 0 | 13 |
| 09 · Observability & ops | 0 | 14 |
| 10 · Integration & cloud | 0 | 15 |

---

## Topic Map

Topics within each section go foundational → advanced.

---

### 01 · Model inference core
*What runs the model — start here before anything else.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [LLM, SLM & Foundation Models](topics/01-model-inference-core/llm-slm-overview.md) | 🟢 |
| 2 | [Tokenization](topics/01-model-inference-core/tokenization.md) | 🟢 |
| 3 | [Embeddings](topics/01-model-inference-core/embeddings.md) | 🟢 |
| 4 | [Transformer architecture](topics/01-model-inference-core/transformer.md) | 🟢 |
| 5 | [Attention mechanism](topics/01-model-inference-core/attention-mechanism.md) | 🟢 |
| 6 | [Context window](topics/01-model-inference-core/context-window.md) | 🟢 |
| 7 | [Autoregressive decoding](topics/01-model-inference-core/autoregressive-decoding.md) | 🟢 |
| 8 | [KV cache](topics/01-model-inference-core/kv-cache.md) | 🔴 |
| 9 | [TTFT & TBT — inference latency metrics](topics/01-model-inference-core/ttft-tbt-metrics.md) | 🔴 |
| 10 | [Continuous batching](topics/01-model-inference-core/continuous-batching.md) | 🔴 |
| 11 | [Paged attention](topics/01-model-inference-core/paged-attention.md) | 🔴 |
| 12 | [FlashAttention](topics/01-model-inference-core/flash-attention.md) | 🔴 |
| 13 | [Chunked prefill](topics/01-model-inference-core/chunked-prefill.md) | 🔴 |
| 14 | [Speculative decoding](topics/01-model-inference-core/speculative-decoding.md) | 🔴 |
| 15 | [Mixture of Experts (MoE)](topics/01-model-inference-core/mixture-of-experts.md) | 🔴 |
| 16 | [Multimodal LLMs & VLMs](topics/01-model-inference-core/multimodal-llm.md) | 🔴 |
| 17 | [Reasoning models](topics/01-model-inference-core/reasoning-models.md) | 🔴 |

---

### 02 · Prompting & control
*How you talk to the model — high ROI, tackle this early.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [System prompt](topics/02-prompting-control/system-prompt.md) | 🔴 |
| 2 | [Prompt engineering](topics/02-prompting-control/prompt-engineering.md) | 🟢 |
| 3 | [Few-shot & zero-shot](topics/02-prompting-control/few-shot-zero-shot.md) | 🔴 |
| 4 | [In-context learning (ICL)](topics/02-prompting-control/in-context-learning.md) | 🔴 |
| 5 | [Temperature, Top-p & sampling](topics/02-prompting-control/temperature-sampling.md) | 🔴 |
| 6 | [Structured output & JSON mode](topics/02-prompting-control/structured-output.md) | 🔴 |
| 7 | [Prompt versioning](topics/02-prompting-control/prompt-versioning.md) | 🔴 |
| 8 | [Constitutional AI](topics/02-prompting-control/constitutional-ai.md) | 🔴 |
| 9 | [System card](topics/02-prompting-control/system-card.md) | 🔴 |

---

### 03 · Serving infrastructure
*The engines that deploy and scale models.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [vLLM](topics/03-serving-infrastructure/vllm.md) | 🔴 |
| 2 | [OpenAI-compatible API](topics/03-serving-infrastructure/openai-compatible-api.md) | 🔴 |
| 3 | [TGI — Text Generation Inference](topics/03-serving-infrastructure/tgi.md) | 🔴 |
| 4 | [TensorRT-LLM](topics/03-serving-infrastructure/tensorrt-llm.md) | 🔴 |
| 5 | [SGLang](topics/03-serving-infrastructure/sglang.md) | 🔴 |
| 6 | [llama.cpp & Ollama](topics/03-serving-infrastructure/llama-cpp-ollama.md) | 🔴 |
| 7 | [Triton Inference Server](topics/03-serving-infrastructure/triton-inference-server.md) | 🔴 |
| 8 | [P/D disaggregation](topics/03-serving-infrastructure/prefill-decode-disaggregation.md) | 🔴 |
| 9 | [Tensor parallelism](topics/03-serving-infrastructure/tensor-parallelism.md) | 🔴 |
| 10 | [Pipeline parallelism](topics/03-serving-infrastructure/pipeline-parallelism.md) | 🔴 |
| 11 | [Expert parallelism (MoE)](topics/03-serving-infrastructure/expert-parallelism.md) | 🔴 |
| 12 | [Serving metrics — Throughput, Latency SLO, Goodput](topics/03-serving-infrastructure/serving-metrics.md) | 🔴 |
| 13 | [Batch inference](topics/03-serving-infrastructure/batch-inference.md) | 🔴 |
| 14 | [Edge inference](topics/03-serving-infrastructure/edge-inference.md) | 🔴 |
| 15 | [NVIDIA Dynamo](topics/03-serving-infrastructure/nvidia-dynamo.md) | 🔴 |

---

### 04 · Model optimization & formats
*Making models smaller and faster.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [Quantization](topics/04-model-optimization/quantization.md) | 🔴 |
| 2 | [FP8 / INT8 / INT4 — numeric formats](topics/04-model-optimization/fp8-int8-int4.md) | 🔴 |
| 3 | [GPTQ, AWQ & GGUF](topics/04-model-optimization/gptq-awq-gguf.md) | 🔴 |
| 4 | [Pruning & sparsity](topics/04-model-optimization/pruning-sparsity.md) | 🔴 |
| 5 | [Knowledge distillation](topics/04-model-optimization/distillation.md) | 🔴 |
| 6 | [LoRA & QLoRA](topics/04-model-optimization/lora-qlora.md) | 🔴 |
| 7 | [Adapter layers](topics/04-model-optimization/adapter-layers.md) | 🔴 |
| 8 | [Fine-tuning & SFT](topics/04-model-optimization/fine-tuning-sft.md) | 🔴 |
| 9 | [RLHF](topics/04-model-optimization/rlhf.md) | 🔴 |
| 10 | [DPO & GRPO](topics/04-model-optimization/dpo-grpo.md) | 🔴 |
| 11 | [Model merging](topics/04-model-optimization/model-merging.md) | 🔴 |

---

### 05 · Retrieval & memory
*Grounding models in your data.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [RAG](topics/05-retrieval-memory/rag.md) | 🔴 |
| 2 | [Embedding models](topics/05-retrieval-memory/embedding-models.md) | 🔴 |
| 3 | [Vector databases](topics/05-retrieval-memory/vector-databases.md) | 🔴 |
| 4 | [Chunking strategies](topics/05-retrieval-memory/chunking-strategies.md) | 🔴 |
| 5 | [Semantic search](topics/05-retrieval-memory/semantic-search.md) | 🔴 |
| 6 | [Hybrid search (BM25 + dense)](topics/05-retrieval-memory/hybrid-search.md) | 🔴 |
| 7 | [Re-ranking](topics/05-retrieval-memory/reranking.md) | 🔴 |
| 8 | [Knowledge graph](topics/05-retrieval-memory/knowledge-graph.md) | 🔴 |
| 9 | [GraphRAG](topics/05-retrieval-memory/graphrag.md) | 🔴 |
| 10 | [Agentic RAG](topics/05-retrieval-memory/agentic-rag.md) | 🔴 |
| 11 | [Long-context retrieval](topics/05-retrieval-memory/long-context-retrieval.md) | 🔴 |
| 12 | [Working & episodic memory](topics/05-retrieval-memory/working-episodic-memory.md) | 🔴 |

---

### 06 · Agents & orchestration
*Multi-step autonomous systems.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [AI agent fundamentals](topics/06-agents-orchestration/ai-agent-fundamentals.md) | 🔴 |
| 2 | [Tool / function calling](topics/06-agents-orchestration/tool-calling.md) | 🔴 |
| 3 | [ReAct pattern](topics/06-agents-orchestration/react-pattern.md) | 🔴 |
| 4 | [Chain of Thought (CoT)](topics/06-agents-orchestration/chain-of-thought.md) | 🔴 |
| 5 | [Plan & execute](topics/06-agents-orchestration/plan-and-execute.md) | 🔴 |
| 6 | [Human-in-the-loop](topics/06-agents-orchestration/human-in-the-loop.md) | 🔴 |
| 7 | [MCP — Model Context Protocol](topics/06-agents-orchestration/mcp.md) | 🔴 |
| 8 | [Agent SDK](topics/06-agents-orchestration/agent-sdk.md) | 🔴 |
| 9 | [LangGraph](topics/06-agents-orchestration/langgraph.md) | 🔴 |
| 10 | [LangChain & LlamaIndex](topics/06-agents-orchestration/langchain-llamaindex.md) | 🔴 |
| 11 | [Multi-agent systems](topics/06-agents-orchestration/multi-agent-systems.md) | 🔴 |
| 12 | [Handoff — agent to agent](topics/06-agents-orchestration/handoff-agent-to-agent.md) | 🔴 |
| 13 | [Tool registry](topics/06-agents-orchestration/tool-registry.md) | 🔴 |
| 14 | [Idempotent tool calls](topics/06-agents-orchestration/idempotent-tool-calls.md) | 🔴 |
| 15 | [A2A protocol](topics/06-agents-orchestration/a2a-protocol.md) | 🔴 |

---

### 07 · Safety, alignment & governance
*Keeping it trustworthy at scale.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [Input guardrails](topics/07-safety-governance/input-guardrails.md) | 🔴 |
| 2 | [PII redaction](topics/07-safety-governance/pii-redaction.md) | 🔴 |
| 3 | [Prompt injection](topics/07-safety-governance/prompt-injection.md) | 🔴 |
| 4 | [Output guardrails](topics/07-safety-governance/output-guardrails.md) | 🔴 |
| 5 | [Content filtering](topics/07-safety-governance/content-filtering.md) | 🔴 |
| 6 | [Red-teaming](topics/07-safety-governance/red-teaming.md) | 🔴 |
| 7 | [Adversarial inputs](topics/07-safety-governance/adversarial-inputs.md) | 🔴 |
| 8 | [Safety alignment](topics/07-safety-governance/safety-alignment.md) | 🔴 |
| 9 | [Bias detection](topics/07-safety-governance/bias-detection.md) | 🔴 |
| 10 | [Fairness metrics](topics/07-safety-governance/fairness-metrics.md) | 🔴 |
| 11 | [Human approval gate](topics/07-safety-governance/human-approval-gate.md) | 🔴 |
| 12 | [Policy-as-code](topics/07-safety-governance/policy-as-code.md) | 🔴 |
| 13 | [AI RMF (NIST)](topics/07-safety-governance/ai-rmf-nist.md) | 🔴 |
| 14 | [EU AI Act](topics/07-safety-governance/eu-ai-act.md) | 🔴 |
| 15 | [Responsible AI](topics/07-safety-governance/responsible-ai.md) | 🔴 |

---

### 08 · Evaluation & quality
*Measuring what the model actually does.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [RAGAS](topics/08-evaluation-quality/ragas.md) | 🔴 |
| 2 | [Faithfulness metrics](topics/08-evaluation-quality/faithfulness-metrics.md) | 🔴 |
| 3 | [Hallucination rate](topics/08-evaluation-quality/hallucination-rate.md) | 🔴 |
| 4 | [LLM-as-judge](topics/08-evaluation-quality/llm-as-judge.md) | 🔴 |
| 5 | [Golden dataset](topics/08-evaluation-quality/golden-dataset.md) | 🔴 |
| 6 | [Offline vs online eval](topics/08-evaluation-quality/offline-vs-online-eval.md) | 🔴 |
| 7 | [DeepEval](topics/08-evaluation-quality/deepeval.md) | 🔴 |
| 8 | [Benchmark evals — MMLU, HellaSwag, BEIR](topics/08-evaluation-quality/benchmark-evals.md) | 🔴 |
| 9 | [Regression testing](topics/08-evaluation-quality/regression-testing.md) | 🔴 |
| 10 | [A/B prompt testing](topics/08-evaluation-quality/ab-prompt-testing.md) | 🔴 |
| 11 | [Trajectory evaluation (agents)](topics/08-evaluation-quality/trajectory-evaluation.md) | 🔴 |
| 12 | [CI/CD eval gates](topics/08-evaluation-quality/cicd-eval-gates.md) | 🔴 |
| 13 | [PROMOTE / HOLD / ROLLBACK](topics/08-evaluation-quality/promote-hold-rollback.md) | 🔴 |

---

### 09 · Observability & ops
*Running it in production reliably.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [LLMOps overview](topics/09-observability-ops/llmops-overview.md) | 🔴 |
| 2 | [OpenTelemetry for LLMs](topics/09-observability-ops/opentelemetry.md) | 🔴 |
| 3 | [Tracing & spans](topics/09-observability-ops/tracing.md) | 🔴 |
| 4 | [Latency percentiles — p95/p99](topics/09-observability-ops/latency-percentiles.md) | 🔴 |
| 5 | [Cost per token](topics/09-observability-ops/cost-per-token.md) | 🔴 |
| 6 | [Prompt & semantic drift](topics/09-observability-ops/drift-detection.md) | 🔴 |
| 7 | [Toxicity scoring](topics/09-observability-ops/toxicity-scoring.md) | 🔴 |
| 8 | [RBAC & IAM](topics/09-observability-ops/rbac-iam.md) | 🔴 |
| 9 | [Audit logs](topics/09-observability-ops/audit-logs.md) | 🔴 |
| 10 | [Langfuse & LangSmith](topics/09-observability-ops/langfuse-langsmith.md) | 🔴 |
| 11 | [Arize & Datadog LLM](topics/09-observability-ops/arize-datadog.md) | 🔴 |
| 12 | [Data residency](topics/09-observability-ops/data-residency.md) | 🔴 |
| 13 | [Model versioning](topics/09-observability-ops/model-versioning.md) | 🔴 |
| 14 | [Spans & traces — primitives](topics/09-observability-ops/spans-traces.md) | 🔴 |

---

### 10 · Integration & cloud
*Connecting to your existing stack.*

| # | Topic | Status |
|---|-------|--------|
| 1 | [Streaming (SSE)](topics/10-integration-cloud/streaming-sse.md) | 🔴 |
| 2 | [AI gateway](topics/10-integration-cloud/ai-gateway.md) | 🔴 |
| 3 | [Auth & rate limiting](topics/10-integration-cloud/auth-rate-limiting.md) | 🔴 |
| 4 | [Load balancing](topics/10-integration-cloud/load-balancing.md) | 🔴 |
| 5 | [Model router](topics/10-integration-cloud/model-router.md) | 🔴 |
| 6 | [KV cache-aware routing](topics/10-integration-cloud/kv-cache-aware-routing.md) | 🔴 |
| 7 | [Prefix-aware routing](topics/10-integration-cloud/prefix-aware-routing.md) | 🔴 |
| 8 | [Fallback chain](topics/10-integration-cloud/fallback-chain.md) | 🔴 |
| 9 | [Open-weight vs managed endpoints](topics/10-integration-cloud/open-weight-vs-managed.md) | 🔴 |
| 10 | [Cloud platforms — Vertex AI, Azure ML, SageMaker](topics/10-integration-cloud/cloud-platforms.md) | 🔴 |
| 11 | [Managed inference — Groq, Baseten, Modal](topics/10-integration-cloud/managed-inference.md) | 🔴 |
| 12 | [Hugging Face Inference Endpoints](topics/10-integration-cloud/huggingface-endpoints.md) | 🔴 |
| 13 | [Data sovereignty](topics/10-integration-cloud/data-sovereignty.md) | 🔴 |
| 14 | [VPC & private endpoint](topics/10-integration-cloud/vpc-private-endpoint.md) | 🔴 |
| 15 | [On-prem & hybrid deployment](topics/10-integration-cloud/on-prem-hybrid.md) | 🔴 |

---

## Demos

| Demo | What it covers | Status |
|------|----------------|--------|
| [vllm-minimal](demos/vllm-minimal/) | Spin up vLLM, serve a model, hit the OpenAI-compatible API | 🔴 |
| [rag-with-eval](demos/rag-with-eval/) | RAG pipeline end-to-end with RAGAS eval | 🔴 |
| [guardrail-pipeline](demos/guardrail-pipeline/) | PII redaction + injection detection before LLM call | 🔴 |
