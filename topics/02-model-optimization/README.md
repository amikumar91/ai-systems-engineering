?# 02 · Model Optimization & Formats

> **Making models smaller and faster.** Study section 01 first — you need to understand what a model is before learning how to shrink or adapt it.

| Step | Topic | One-liner | Status |
|------|-------|-----------|--------|
| 1 | [Quantization](quantization.md) | Reducing weight precision from FP32 to INT8/INT4 to shrink model size and speed up inference | 🔴 |
| 2 | [FP8 / INT8 / INT4](fp8-int8-int4.md) | The numeric formats used in quantization and what each trades off | 🔴 |
| 3 | [GPTQ, AWQ & GGUF](gptq-awq-gguf.md) | Practical quantization algorithms and the file formats they produce | 🔴 |
| 4 | [Pruning & Sparsity](pruning-sparsity.md) | Removing weights that contribute little to model output | 🔴 |
| 5 | [Knowledge Distillation](distillation.md) | Training a small model to mimic the output distribution of a large one | 🔴 |
| 6 | [LoRA & QLoRA](lora-qlora.md) | Low-rank adaptation — fine-tuning with a fraction of the parameters | 🔴 |
| 7 | [Adapter layers](adapter-layers.md) | Small trainable modules inserted into a frozen base model | 🔴 |
| 8 | [Fine-tuning & SFT](fine-tuning-sft.md) | Supervised fine-tuning on task-specific data | 🔴 |
| 9 | [RLHF](rlhf.md) | Reinforcement learning from human feedback — how alignment training works | 🔴 |
| 10 | [DPO & GRPO](dpo-grpo.md) | Direct preference optimization and group relative policy optimization — RLHF without a reward model | 🔴 |
| 11 | [Model merging](model-merging.md) | Combining weights from multiple fine-tuned models into one | 🔴 |

---

**← Previous section:** [01 · Model Inference Core](../01-model-inference-core/README.md) | **Next section →** [03 · Serving Infrastructure](../03-serving-infrastructure/README.md)
