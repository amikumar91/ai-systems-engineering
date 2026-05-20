# 08 · Evaluation & Quality

> **Measuring what the model actually does.** Frameworks, metrics, and CI/CD patterns for knowing when your system is working — and when it regresses.

| Step | Topic | One-liner | Status |
|------|-------|-----------|--------|
| 1 | [RAGAS](ragas.md) | The most widely used RAG evaluation framework — faithfulness, relevancy, recall | 🔴 |
| 2 | [Faithfulness metrics](faithfulness-metrics.md) | Measuring whether the model's answer is grounded in the retrieved context | 🔴 |
| 3 | [Hallucination rate](hallucination-rate.md) | Quantifying how often the model generates confident-but-wrong output | 🔴 |
| 4 | [LLM-as-judge](llm-as-judge.md) | Using a second LLM to score the output of the first | 🔴 |
| 5 | [Golden dataset](golden-dataset.md) | Curating a fixed test set that represents what good looks like | 🔴 |
| 6 | [Offline vs online eval](offline-vs-online-eval.md) | Pre-deployment evaluation on fixed datasets vs. live traffic monitoring | 🔴 |
| 7 | [DeepEval](deepeval.md) | Open-source eval framework with 14+ built-in metrics | 🔴 |
| 8 | [Benchmark evals](benchmark-evals.md) | Industry-standard datasets: MMLU, HellaSwag, BEIR, and when they matter | 🔴 |
| 9 | [Regression testing](regression-testing.md) | Catching quality degradation when prompts or models change | 🔴 |
| 10 | [A/B prompt testing](ab-prompt-testing.md) | Statistically comparing prompt variants on real or simulated traffic | 🔴 |
| 11 | [Trajectory evaluation](trajectory-evaluation.md) | Evaluating agents on the quality of their full action sequence, not just final output | 🔴 |
| 12 | [CI/CD eval gates](cicd-eval-gates.md) | Blocking deployments when eval scores drop below thresholds | 🔴 |
| 13 | [PROMOTE / HOLD / ROLLBACK](promote-hold-rollback.md) | The deployment decision framework for LLM systems | 🔴 |

---

**← Previous section:** [07 · Safety, Alignment & Governance](../07-safety-governance/README.md) | **Next section →** [09 · Observability & Ops](../09-observability-ops/README.md)
