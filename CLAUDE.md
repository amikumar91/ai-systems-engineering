# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal knowledge base covering the full production AI systems engineering stack — 136 topics across 10 sections. Topics are researched from primary sources, written for easy understanding, and kept current as the ecosystem evolves. The repo is designed to work with Claude Code as a research and documentation partner.

---

## Agentic setup

### Slash commands

| Command | What it does |
|---------|-------------|
| `/research-topic <name>` | Fully researches and writes/updates a topic using four specialist subagents plus a critic validation loop |
| `/discover-topics` | Scans the ecosystem for missing topics, outdated content, and tooling improvements |
| `/research-demo [name]` | Discovers or scaffolds a demo — suggests candidates from repo context and community sources when invoked without a name; scaffolds a runnable demo folder with README update when given a name |

### Subagents (`.claude/agents/`)

| Agent | Role |
|-------|------|
| `researcher` | Runs 6-8 web searches, reads primary sources, returns a structured research brief scoped to this topic's position in the learning sequence |
| `practitioner` | Mines GitHub issues, Stack Overflow, Reddit, HN, and engineering blogs — applies scope filter to return only findings relevant to this topic type, not adjacent topics |
| `image-finder` | Receives a specific diagram description from the scope brief; generates an Excalidraw JSON file (for rich, colorful, multi-tier diagrams) or a Mermaid code block (for simple flows) — no CC0 downloads, no SVGs |
| `topic-writer` | Takes scope brief + research + practitioner + image; applies relevance filter; writes with concept ordering, cross-references, gotcha grouping, and date stamp |
| `critic` | Reads the completed file; checks 12-point rubric (section completeness, format rules, gotcha relevance, code length, date stamp, cross-references); returns PASS or specific issues |
| `demo-researcher` | Operates in two modes for the `/research-demo` command: discovery mode searches web and communities to suggest the best demo to build next; creation mode researches libraries, scenario, and production gotchas for a named demo |

The `/research-topic` command orchestrates the first five agents in a structured flow. The `demo-researcher` agent is used exclusively by `/research-demo`. You do not call subagents directly.

### MCP servers (`.claude/settings.json`)

- **GitHub MCP** — requires `GITHUB_PERSONAL_ACCESS_TOKEN` env var. Enables PR management, issue creation, and code search directly from Claude Code.
- Keep total active MCP tools under ~40 to avoid tool selection degradation.

### Personal settings

Put personal preferences and tokens in `.claude/settings.local.json` (gitignored). Team/project settings go in `.claude/settings.json` (committed).

---

## Topic file structure

Every topic file follows this exact template. All 7 sections must have real content before the status changes to 🟢.

```
## What it is                    <- analogy -> definition -> common misconception corrected
## How it works
### <Core mechanism>             <- simple mental model -> detailed mechanism -> concrete numbers
### Gotchas & production behavior <- real failure modes, non-obvious settings, workarounds, anti-patterns
## Why it matters                <- architecture layer -> what breaks without it -> one anchor number
## Key terms                     <- table: Term | What it means in this specific context (5-10 max)
## Code / demo                   <- link to demos/ OR minimal working Python snippet (15-30 lines)
## My notes                      <- 3-5 specific practitioner observations, unresolved tradeoffs
## Resources                     <- exactly 2-3 links: paper > official docs > one authoritative post
```

Status and layer are tracked in the section README and main README only — do not put them in the topic file itself. The topic file starts directly with `# Title` followed by `---` and then `## What it is`.

---

## Writing style guide

Every topic must be understandable to a software engineer who has never encountered the concept. Write like explaining to a smart colleague who just joined.

### What it is
1. One concrete analogy to something familiar: *"Think of X like a..."*
2. The precise one-sentence definition
3. What it is NOT — the most common misconception, corrected in one sentence

### How it works
- Give the simple mental model first (the 10-second version), then add layers
- Use concrete numbers: *"reduces memory by 4x"* not *"reduces memory significantly"*
- Define every acronym and term the first time it appears
- A Mermaid diagram belongs here **only** if the concept is a multi-stage process or flow that text alone cannot convey — not for decoration
- The **"Gotchas & production behavior"** subsection is mandatory — drawn from the `practitioner` subagent's findings. Cover: failure modes with conditions, production vs. docs gaps, non-obvious settings, anti-patterns, and workarounds with tradeoffs. If fewer than 3 insights exist, say so explicitly rather than omitting the section.

### Voice and format
- Address the reader as "you"
- Short paragraphs — 3-4 sentences maximum
- Active voice throughout
- No hedging: "it could be argued", "arguably", "in some cases"
- No filler: "It's worth noting that", "It's important to understand that"
- Start sentences with the subject, not a clause

### Diagrams and images

Two diagram tools only — no SVG generation, no CC0 image downloads:

- **Excalidraw** (`.excalidraw` files in `assets/images/topics/<section>/`): use for landscape overviews, tier comparisons, multi-column colorful layouts, and any diagram that benefits from visual density. The image-finder generates the JSON; the user exports to PNG via the VS Code Excalidraw extension. Markdown embeds reference the `.png`: `![alt](../../assets/images/topics/<section>/<topic>.png)`.
- **Mermaid** (fenced ` ```mermaid ` code blocks): use for pipelines, flows, state machines, and multi-step processes where sequence matters. Renders natively in GitHub and VS Code (Mermaid Preview extension). No file needed — embedded directly in the topic file.
- **Both together**: an Excalidraw overview + a Mermaid flow in the same topic file is valid and encouraged when the topic has both a landscape aspect and a sequential process.
- **No diagrams**: pure algorithmic math, simple parameter lists — use clear prose instead.

---

## Section map

| Folder | Architecture layer | What it covers |
|--------|-------------------|----------------|
| `topics/01-model-inference-core/` | Model serving | Tokenization, attention, KV cache, batching, decoding — the core mechanics |
| `topics/02-prompting-control/` | Orchestration | Prompting techniques, sampling parameters, structured output, versioning |
| `topics/03-serving-infrastructure/` | Model serving | Inference engines (vLLM, TGI, TensorRT-LLM), parallelism, serving metrics |
| `topics/04-model-optimization/` | Model serving | Quantization, fine-tuning, LoRA, RLHF, DPO, distillation, model merging |
| `topics/05-retrieval-memory/` | Data & memory | RAG, vector DBs, chunking, hybrid search, GraphRAG, agent memory |
| `topics/06-agents-orchestration/` | Orchestration | Agents, MCP, LangGraph, multi-agent, tool calling, A2A protocol |
| `topics/07-safety-governance/` | Governance | Guardrails, PII, red-teaming, EU AI Act, NIST RMF, responsible AI |
| `topics/08-evaluation-quality/` | Eval & obs | RAGAS, LLM-as-judge, golden datasets, CI/CD eval gates, regression testing |
| `topics/09-observability-ops/` | Eval & obs | LLMOps, tracing, drift detection, cost tracking, Langfuse, audit logs |
| `topics/10-integration-cloud/` | Clients & gateway | Gateways, routing, streaming, cloud platforms, hybrid deployment |

---

## Status icons

| Icon | Meaning |
|------|---------|
| 🔴 | Not started |
| 🟡 | In progress — some sections written |
| 🟢 | Done — all 7 sections have real content |
| 🔨 | Demo built and linked |

When completing a topic: update the icon in both the main `README.md` and the section's `topics/<section>/README.md`. Increment the progress counter at the top of `README.md`.

---

## Demos

Demos live in `demos/<name>/`. Each demo:
- Uses Python 3.10+
- Produces working code — no stubs
- Has a `requirements.txt`
- Records build observations in `README.md`'s "Build notes" section
- Is linked from the main README Demos table only — **never** from individual topic files

**Snippet vs demo:** Every topic file uses a self-contained inline snippet (15–30 lines) in its `## Code / demo` section. Demos in `demos/` are separate multi-topic integration programs — use `/research-demo` to discover and scaffold them. Demo links appear only in the main README Demos table, which tracks which topics each demo covers. Topic files never link to `demos/`.
