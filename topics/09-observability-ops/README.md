# 09 · Observability & Ops (LLMOps)

> **Running it in production reliably.** Tracing, cost tracking, drift detection, and the tooling ecosystem that keeps LLM systems healthy.

| Step | Topic | One-liner | Status |
|------|-------|-----------|--------|
| 1 | [LLMOps overview](llmops-overview.md) | The operational discipline for LLM systems — how it differs from MLOps | 🔴 |
| 2 | [OpenTelemetry for LLMs](opentelemetry.md) | The open standard for instrumenting LLM calls with traces and metrics | 🔴 |
| 3 | [Tracing & spans](tracing.md) | Distributed tracing across model calls, tool calls, and retrieval steps | 🔴 |
| 4 | [Spans & traces — primitives](spans-traces.md) | The span/trace/context data model in detail | 🔴 |
| 5 | [Latency percentiles — p95/p99](latency-percentiles.md) | Why averages lie and how to interpret tail latency for LLMs | 🔴 |
| 6 | [Cost per token](cost-per-token.md) | Tracking and attributing inference cost at request, feature, and user level | 🔴 |
| 7 | [Prompt & semantic drift](drift-detection.md) | Detecting when model behavior changes over time without explicit deployment | 🔴 |
| 8 | [Toxicity scoring](toxicity-scoring.md) | Monitoring output quality for harmful content in production | 🔴 |
| 9 | [RBAC & IAM](rbac-iam.md) | Role-based access control for LLM APIs and model access | 🔴 |
| 10 | [Audit logs](audit-logs.md) | What to log, how long to retain it, and how to make it queryable | 🔴 |
| 11 | [Langfuse & LangSmith](langfuse-langsmith.md) | The two leading open-source/hosted LLM observability platforms | 🔴 |
| 12 | [Arize & Datadog LLM](arize-datadog.md) | Enterprise-grade LLM monitoring — ML observability meets LLMOps | 🔴 |
| 13 | [Data residency](data-residency.md) | Where prompt and response data lives and the compliance implications | 🔴 |
| 14 | [Model versioning](model-versioning.md) | Tracking which model version handled which request for debugging and rollback | 🔴 |

---

**← Previous section:** [08 · Evaluation & Quality](../08-evaluation-quality/README.md) | **Next section →** [10 · Integration & Cloud](../10-integration-cloud/README.md)
