---
title: Learning Paths
sidebar_label: Learning Paths
sidebar_position: 0
---

# Learning Paths

136 topics is a lot. These paths cut across the existing sections and give you a
focused trail based on what you're trying to do — not what section something lives in.

**Your original sections are untouched.** These paths are an overlay.

| Path | Topics | Time | Goal |
|------|--------|------|------|
| [⚡ Quick Start](#quick-start) | 7 | ~2 days | Mental models before anything else |
| [🧱 Essentials](#essentials) | 22 | ~2 weeks | What every AI engineer must know |
| [🔨 For Builders](#for-builders) | 28 | ~3 weeks | Ship AI apps and integrations |
| [⚙️ Systems Depth](#systems-depth) | ~79 | Ongoing | Infra, ops, and safety at scale |

---

## ⚡ Quick Start {#quick-start}

> Mental models before anything else. You don't need to understand transformers to
> build with AI — but you do need to know what a token is, why context windows matter,
> and what an embedding actually does.
>
> **~2 days. 5 of these 7 are already written.**

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 1 | [LLM, SLM & Foundation Models](../01-model-inference-core/llm-slm-overview.md) | 01 | ✅ Done |
| 2 | [Tokenization](../01-model-inference-core/tokenization.md) | 01 | ✅ Done |
| 3 | [Embeddings](../01-model-inference-core/embeddings.md) | 01 | ✅ Done |
| 4 | [Context Window](../01-model-inference-core/context-window.md) | 01 | ✅ Done |
| 5 | [Autoregressive Decoding](../01-model-inference-core/autoregressive-decoding.md) | 01 | ✅ Done |
| 6 | [Prompt Engineering](../02-prompting-control/prompt-engineering.md) | 02 | ✅ Done |
| 7 | [Temperature, Top-p & Sampling](../02-prompting-control/temperature-sampling.md) | 02 | ✅ Done |

---

## 🧱 Essentials {#essentials}

> The unavoidable core. If you're building anything serious with AI — apps,
> integrations, agents — these are the topics you'll hit walls without.
>
> **~2 weeks. Prerequisite: Quick Start.**

### Prompting & Control

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 1 | [System Prompt](../02-prompting-control/system-prompt.md) | 02 | 🔴 Not started |
| 2 | [Structured Output & JSON Mode](../02-prompting-control/structured-output.md) | 02 | 🔴 Not started |
| 3 | [Few-shot & Zero-shot](../02-prompting-control/few-shot-zero-shot.md) | 02 | 🔴 Not started |
| 4 | [Prompt Versioning](../02-prompting-control/prompt-versioning.md) | 02 | 🔴 Not started |

### RAG & Retrieval

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 5 | [RAG](../05-retrieval-memory/rag.md) | 05 | 🔴 Not started |
| 6 | [Embedding Models](../05-retrieval-memory/embedding-models.md) | 05 | 🔴 Not started |
| 7 | [Vector Databases](../05-retrieval-memory/vector-databases.md) | 05 | 🔴 Not started |
| 8 | [Chunking Strategies](../05-retrieval-memory/chunking-strategies.md) | 05 | 🔴 Not started |
| 9 | [Hybrid Search (BM25 + Dense)](../05-retrieval-memory/hybrid-search.md) | 05 | 🔴 Not started |
| 10 | [Re-ranking](../05-retrieval-memory/reranking.md) | 05 | 🔴 Not started |

### Agents

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 11 | [AI Agent Fundamentals](../06-agents-orchestration/ai-agent-fundamentals.md) | 06 | 🔴 Not started |
| 12 | [Tool / Function Calling](../06-agents-orchestration/tool-calling.md) | 06 | 🔴 Not started |
| 13 | [ReAct Pattern](../06-agents-orchestration/react-pattern.md) | 06 | 🔴 Not started |
| 14 | [MCP — Model Context Protocol](../06-agents-orchestration/mcp.md) | 06 | 🔴 Not started |

### Safety Baseline

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 15 | [Prompt Injection](../07-safety-governance/prompt-injection.md) | 07 | 🔴 Not started |
| 16 | [Input Guardrails](../07-safety-governance/input-guardrails.md) | 07 | 🔴 Not started |
| 17 | [Output Guardrails](../07-safety-governance/output-guardrails.md) | 07 | 🔴 Not started |

### Eval Basics

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 18 | [LLM-as-judge](../08-evaluation-quality/llm-as-judge.md) | 08 | 🔴 Not started |
| 19 | [Hallucination Rate](../08-evaluation-quality/hallucination-rate.md) | 08 | 🔴 Not started |

---

## 🔨 For Builders {#for-builders}

> Everything you need to actually build and integrate AI into products — APIs,
> streaming, agents, observability, and how to connect AI to your existing stack.
>
> **~3 weeks. Prerequisite: Essentials.**

### Integration Layer

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 1 | [Streaming (SSE)](../10-integration-cloud/streaming-sse.md) | 10 | 🔴 Not started |
| 2 | [AI Gateway](../10-integration-cloud/ai-gateway.md) | 10 | 🔴 Not started |
| 3 | [Auth & Rate Limiting](../10-integration-cloud/auth-rate-limiting.md) | 10 | 🔴 Not started |
| 4 | [Model Router](../10-integration-cloud/model-router.md) | 10 | 🔴 Not started |
| 5 | [Fallback Chain](../10-integration-cloud/fallback-chain.md) | 10 | 🔴 Not started |
| 6 | [Open-weight vs Managed Endpoints](../10-integration-cloud/open-weight-vs-managed.md) | 10 | 🔴 Not started |
| 7 | [OpenAI-compatible API](../03-serving-infrastructure/openai-compatible-api.md) | 03 | 🔴 Not started |
| 8 | [Managed Inference — Groq, Baseten, Modal](../10-integration-cloud/managed-inference.md) | 10 | 🔴 Not started |

### Agents & Orchestration (Builder Focus)

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 9 | [Chain of Thought (CoT)](../06-agents-orchestration/chain-of-thought.md) | 06 | 🔴 Not started |
| 10 | [Human-in-the-loop](../06-agents-orchestration/human-in-the-loop.md) | 06 | 🔴 Not started |
| 11 | [LangChain & LlamaIndex](../06-agents-orchestration/langchain-llamaindex.md) | 06 | 🔴 Not started |
| 12 | [LangGraph](../06-agents-orchestration/langgraph.md) | 06 | 🔴 Not started |
| 13 | [Tool Registry](../06-agents-orchestration/tool-registry.md) | 06 | 🔴 Not started |
| 14 | [Idempotent Tool Calls](../06-agents-orchestration/idempotent-tool-calls.md) | 06 | 🔴 Not started |
| 15 | [Working & Episodic Memory](../05-retrieval-memory/working-episodic-memory.md) | 05 | 🔴 Not started |
| 16 | [Agentic RAG](../05-retrieval-memory/agentic-rag.md) | 05 | 🔴 Not started |

### Observability for Builders

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 17 | [LLMOps Overview](../09-observability-ops/llmops-overview.md) | 09 | 🔴 Not started |
| 18 | [Tracing & Spans](../09-observability-ops/tracing.md) | 09 | 🔴 Not started |
| 19 | [Langfuse & LangSmith](../09-observability-ops/langfuse-langsmith.md) | 09 | 🔴 Not started |
| 20 | [Cost per Token](../09-observability-ops/cost-per-token.md) | 09 | 🔴 Not started |

### Eval for Builders

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 21 | [RAGAS](../08-evaluation-quality/ragas.md) | 08 | 🔴 Not started |
| 22 | [A/B Prompt Testing](../08-evaluation-quality/ab-prompt-testing.md) | 08 | 🔴 Not started |
| 23 | [Offline vs Online Eval](../08-evaluation-quality/offline-vs-online-eval.md) | 08 | 🔴 Not started |
| 24 | [Golden Dataset](../08-evaluation-quality/golden-dataset.md) | 08 | 🔴 Not started |

### New Patterns

| # | Topic | Section | Status |
|---|-------|---------|--------|
| 25 | [AI SDK Patterns](../10-integration-cloud/ai-sdk-patterns.md) | 10 | 🔴 Not started |
| 26 | [Webhook vs Streaming vs Polling](../10-integration-cloud/webhook-vs-streaming-vs-polling.md) | 10 | 🔴 Not started |
| 27 | [Context Management Patterns](../02-prompting-control/context-management-patterns.md) | 02 |🔴 Not started |
| 28 | [PII Redaction](../07-safety-governance/pii-redaction.md) | 07 |🔴 Not started |

---

## ⚙️ Systems Depth {#systems-depth}

> The remaining ~79 topics from the original map. These don't go away — they're the
> ones that separate engineers who use AI from engineers who design AI systems.
> Work through them in the original section order once you've completed For Builders.

- **01 Model Inference Core** (remaining 10) — KV cache, continuous batching, paged attention, FlashAttention, chunked prefill, speculative decoding, MoE, multimodal LLMs, reasoning models
- **02 Model Optimization** (all 11) — Quantization, FP8/INT8/INT4, GPTQ/AWQ/GGUF, pruning, distillation, LoRA/QLoRA, adapters, fine-tuning/SFT, RLHF, DPO/GRPO, model merging
- **03 Serving Infrastructure** (all 15) — vLLM, TGI, TensorRT-LLM, SGLang, llama.cpp/Ollama, Triton, P/D disaggregation, tensor/pipeline/expert parallelism, serving metrics, batch inference, edge inference, NVIDIA Dynamo
- **04 Retrieval & Memory** (remaining 6) — Semantic search, knowledge graph, GraphRAG, long-context retrieval
- **05 Agents & Orchestration** (remaining 7) — Plan & execute, Agent SDK, multi-agent systems, handoff A2A, A2A protocol
- **06 Prompting & Control** (remaining 3) — In-context learning, constitutional AI, system card
- **07 Evaluation & Quality** (remaining 9) — Faithfulness metrics, DeepEval, benchmark evals, regression testing, trajectory eval, CI/CD gates, PROMOTE/HOLD/ROLLBACK
- **08 Observability & Ops** (remaining 10) — OpenTelemetry, latency percentiles, prompt/semantic drift, toxicity scoring, RBAC/IAM, audit logs, Arize/Datadog, data residency, model versioning, spans & traces
- **09 Integration & Cloud** (remaining 7) — KV cache-aware routing, prefix-aware routing, cloud platforms, Hugging Face endpoints, data sovereignty, VPC/private endpoints, on-prem/hybrid
- **10 Safety & Governance** (remaining 12) — Content filtering, red-teaming, adversarial inputs, safety alignment, bias detection, fairness metrics, human approval gate, policy-as-code, AI RMF, EU AI Act, responsible AI
