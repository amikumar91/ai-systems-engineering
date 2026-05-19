# /research-demo — Research and Scaffold a Demo

Researches and creates a new demo in `demos/`. Two modes:
- **Creation mode** (`/research-demo <name>`): plans and scaffolds the named demo
- **Discovery mode** (`/research-demo`, no argument): finds the best demo to build next, presents candidates, you pick one

An explicit approval gate fires before any files are written.

---

## Step 0 — Read repo context

Read these to understand what exists:

1. `README.md` — find the Demos table (search for `## Demos`); extract each row: demo name, description, topics covered, status
2. For each folder in `demos/`: read its `README.md` to understand what it covers
3. For each `topics/*/README.md`: collect all topic rows with 🟢 status — capture the topic display name and construct its file path as `topics/<section>/<filename>.md`

Build two lists:
```
EXISTING_DEMOS: list of {name, description, topics_covered}
COMPLETED_TOPICS: list of {display_name, file_path, section}
```

---

## Step 1 — Discovery mode (skip entirely if $ARGUMENTS is not empty)

If $ARGUMENTS is provided, skip to Step 2.

Dispatch the `demo-researcher` subagent with this prompt:

```
## Mode: Discovery

EXISTING_DEMOS:
[paste the EXISTING_DEMOS list from Step 0]

COMPLETED_TOPICS:
[paste the COMPLETED_TOPICS list from Step 0]

Find 2-3 demo candidates that best complement these completed topics and are not already covered by existing demos.
```

When the subagent returns, present its output to the user:

```
## Demo candidates

[paste demo-researcher output]

Which demo would you like to build? Enter the name, or describe your own idea.
```

Wait for user response. Set DEMO_NAME = the chosen name. Proceed to Step 2.

---

## Step 2 — Research the demo

Set DEMO_NAME:
- Creation mode: DEMO_NAME = $ARGUMENTS (trim whitespace)
- Discovery mode: DEMO_NAME = user's answer from Step 1

**Run both of these in parallel:**

**A. Dispatch `demo-researcher` subagent in creation mode:**

```
## Mode: Creation

DEMO_NAME: [DEMO_NAME]

COMPLETED_TOPICS:
[paste the COMPLETED_TOPICS list from Step 0]

Research how to build a demo named "[DEMO_NAME]".
```

**B. While waiting, scan topic files yourself for related topics:**

From COMPLETED_TOPICS, select the topics most relevant to DEMO_NAME. Aim for 3-6 topics. Collect each as:
- Display name (for the plan)
- Relative path from repo root (e.g., `topics/03-serving-infrastructure/vllm.md`)

Wait for both A and B to complete before continuing.

---

## Step 3 — Approval gate

**Do not write any files until the user confirms.**

Present this plan and wait for an explicit "yes":

```
## Demo plan: [DEMO_NAME]

**Description:** [one sentence — what the demo does]

**Scenario:** [from design brief — specific, not vague]

**Files to create:**
- `demos/[name]/README.md` — overview, run instructions, topics covered
- `demos/[name]/main.py` — [description from brief]
- `demos/[name]/requirements.txt` — pinned dependencies
[list any additional files from the design brief]

**Topics covered:**
- [Topic display name](topics/section/file.md)
[one line per related topic from Step 2B]

**README.md Demos table row to add:**
| [demo-name](demos/[name]/) | [description] | [Topic1](path) · [Topic2](path) | 🔴 |

Confirm? (yes / no — or tell me what to change)
```

If the user says no or requests changes: adjust the plan, re-present. Do not proceed until you receive an affirmative.

---

## Step 4 — Scaffold the demo folder

Create `demos/[DEMO_NAME]/` with the following files.

### `demos/[DEMO_NAME]/README.md`

```markdown
# Demo: [DEMO_NAME]

> [one-sentence description from design brief]

## What this covers

[2-3 sentence paragraph describing the scenario — what it actually runs]

**Topics demonstrated:**
- [Topic name](../../topics/section/file.md)
[one line per related topic]

## How to run

```bash
pip install -r requirements.txt
[any additional setup from design brief — e.g., start server, export env vars]
python main.py
```

## Prerequisites

- Python 3.10+
[list infra requirements from design brief — one bullet per requirement]

## Expected output

```
[paste expected output from design brief]
```

## Build notes

> _Add observations here as you build it._
```

### `demos/[DEMO_NAME]/main.py`

Use the sections from the design brief. Every section must:
- Import real libraries (not pseudocode or `import placeholder`)
- Use realistic inputs (domain-appropriate content, not `"example text"`)
- Mark infra requirements inline: `# REQUIRES: <what> — see README.md`
- Embed the 3 gotchas from the design brief as `# NOTE:` comments at the relevant lines
- Include a `USE_MOCK` env-var flag when a lightweight fallback exists

Structure:

```python
"""
[DEMO_NAME] demo
Topics: [comma-separated topic display names]
Run:    python main.py
Docs:   README.md
"""

import os
[imports from design brief libraries — real packages only]

USE_MOCK = os.getenv("USE_MOCK", "false").lower() == "true"

# === [Section 1 name from brief] ===
# [one-line description of what this section does]
# REQUIRES: [infra requirement, or omit if none]

[section 1 code — real library calls with realistic data]

# === [Section 2 name] ===
[section 2 code]

[continue for all sections in the design brief]
```

### `demos/[DEMO_NAME]/requirements.txt`

List each library from the design brief with its pinned version:

```
[library]==[version]
[library]==[version]
```

---

## Step 5 — Update README.md Demos table

Open `README.md`. Find the Demos section (around line 333).

**If the table header is `| Demo | What it covers | Status |`** (3 columns), replace it and its separator with the 4-column version:

Old:
```
| Demo | What it covers | Status |
|------|----------------|--------|
```

New:
```
| Demo | What it covers | Topics | Status |
|------|----------------|--------|--------|
```

Also update any existing rows that are missing the Topics column — insert a Topics cell before the Status cell. Use the topic links identified in Step 2B for the new demo; for existing stubs, derive topic links from their README.md "What this covers" descriptions.

Add the new demo row:
```
| [demo-name](demos/[name]/) | [description] | [Topic1](topics/...) · [Topic2](topics/...) | 🔴 |
```

---

## Step 6 — Commit

```bash
git add demos/[DEMO_NAME]/ README.md
git commit -m "feat: scaffold [DEMO_NAME] demo"
```
