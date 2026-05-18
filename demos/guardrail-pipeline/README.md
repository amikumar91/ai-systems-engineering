# Demo: guardrail-pipeline

> A working input guardrail pipeline — PII redaction + prompt injection detection — wired before an LLM call.

## What this covers
- Regex + Presidio NER-based PII detection
- Reversible vault-based token substitution
- Confidence-threshold injection detection
- Pre/post LLM hook pattern
- Audit logging

## Status
🔴 Not built yet — build this after reading [input-guardrails.md](../../05-guardrails-safety/input-guardrails.md)

## Files
```
guardrail-pipeline/
├── README.md
├── pii_redactor.py         ← regex + Presidio based PII detection
├── injection_detector.py   ← pattern matching + classifier
├── pipeline.py             ← chains all guardrail stages
├── audit_logger.py         ← logs flagged events
└── main.py                 ← demo: run a request through the full pipeline
```

## Prerequisites
- `pip install presidio-analyzer presidio-anonymizer openai`

## Build notes
> _Add observations here as you build it._
