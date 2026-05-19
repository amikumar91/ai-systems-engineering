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

Find 2-3 demo candidates that best complement these completed topics and are not already covered by existing demos. Return output in the structured format defined in your system prompt (## Demo candidates, ### 1 / ### 2 / ### 3 with all required fields).
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

Set DESIGN_BRIEF = the full output returned by the demo-researcher subagent in Step 2A.
Set RELATED_TOPICS = the list of topic display names and paths collected in Step 2B.

---

## Step 3 — Approval gate

**Do not write any files until the user confirms.**

Present this plan and wait for an explicit "yes":

```
## Demo plan: [DEMO_NAME]

**Description:** [one sentence from DESIGN_BRIEF Scenario]

**Scenario:** [DESIGN_BRIEF Scenario — copy verbatim]

**Files to create:**
- `demos/[name]/README.md` — overview, run instructions, topics covered
- `demos/[name]/main.py` — [description from DESIGN_BRIEF]
- `demos/[name]/requirements.txt` — pinned dependencies
[list any additional files from DESIGN_BRIEF]

**Topics covered:** [from RELATED_TOPICS]
- [Topic display name](topics/section/file.md)
[one line per related topic from Step 2B]

**README.md Demos table row to add:**
| [demo-name](demos/[name]/) | [description] | [Topic1](path) · [Topic2](path) | 🔴 |

Confirm? (yes / no — or tell me what to change)
```

If the user requests minor wording changes (description, file names): adjust inline and re-present.
If the user requests scenario-level changes or a different demo: re-run Step 2 with the revised DEMO_NAME or constraints, then re-present Step 3.
Do not proceed until you receive an affirmative.

---

## Step 4 — Create branch and scaffold the demo folder

First, derive a branch slug from DEMO_NAME: lowercase, hyphens only, max 35 characters.
Example: "rag-with-eval" → `rag-with-eval`, "vLLM minimal serving" → `vllm-minimal-serving`

```bash
git checkout -b demo/<demo-slug>
```

All subsequent commits run on this branch. Do not commit to master.

Create `demos/[DEMO_NAME]/` with the following files.

### `demos/[DEMO_NAME]/README.md`

````markdown
# Demo: [DEMO_NAME]

> [one-sentence description from DESIGN_BRIEF]

## What this covers

[2-3 sentence paragraph describing the scenario — what it actually runs]

**Topics demonstrated:**
- [Topic name](../../topics/section/file.md)
[one line per related topic]

## How to run

```bash
pip install -r requirements.txt
[any additional setup from DESIGN_BRIEF — e.g., start server, export env vars]
python main.py
```

## Prerequisites

- Python 3.10+
[list infra requirements from DESIGN_BRIEF — one bullet per requirement]

## Expected output

```
[paste expected output from DESIGN_BRIEF]
```

## Build notes

> _Add observations here as you build it._
````

### `demos/[DEMO_NAME]/main.py`

Use the sections from DESIGN_BRIEF. Every section must:
- Import real libraries (not pseudocode or `import placeholder`)
- Use realistic inputs (domain-appropriate content, not `"example text"`)
- Mark infra requirements inline: `# REQUIRES: <what> — see README.md`
- Embed the 3 gotchas from DESIGN_BRIEF as `# NOTE:` comments at the relevant lines
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
[imports from DESIGN_BRIEF libraries — real packages only]

USE_MOCK = os.getenv("USE_MOCK", "false").lower() == "true"

# === [Section 1 name from DESIGN_BRIEF] ===
# [one-line description of what this section does]
# REQUIRES: [infra requirement, or omit if none]

[section 1 code — real library calls with realistic data]

# === [Section 2 name] ===
[section 2 code]

[continue for all sections in DESIGN_BRIEF]
```

### `demos/[DEMO_NAME]/requirements.txt`

List each library from DESIGN_BRIEF with its pinned version:

```
[library]==[version]
[library]==[version]
```

If the design brief does not specify a version for a library, use the latest stable version from PyPI and note it with `# pinned YYYY-MM-DD`.

---

## Step 5 — Update README.md Demos table

Open `README.md`. Find the Demos section (search for `## Demos`).

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

Also update any existing rows that are missing the Topics column — insert a Topics cell before the Status cell. Use the topic links identified in Step 2B for the new demo; for existing stubs, check their README.md "What this covers" descriptions and map to topic file paths where a clear match exists — if no clear match is found, leave the Topics cell empty rather than guessing a path.

Add the new demo row:
```
| [demo-name](demos/[name]/) | [description] | [Topic1](topics/...) · [Topic2](topics/...) | 🔴 |
```

---

## Step 6 — Push branch and open PR

```bash
git add demos/[DEMO_NAME]/ README.md
git commit -m "feat: scaffold [DEMO_NAME] demo"
git push origin demo/<demo-slug>
```

Then open the PR. Build the `--body` string from:
- `[DEMO_NAME]` = the demo folder name (e.g., `rag-with-eval`)
- `<topics-list>` = each entry from RELATED_TOPICS on its own line as `- [Name](path)`
- `<sources>` = the primary sources from DESIGN_BRIEF

```bash
gh pr create \
  --title "feat: scaffold [DEMO_NAME] demo" \
  --base master \
  --label "demo" \
  --body "$(cat <<'PRBODY'
## What this PR does
Scaffolds the [DEMO_NAME] demo with README, stub code, and requirements.

## Type
- [x] New demo

## File(s) changed
demos/[DEMO_NAME]/

## Topics covered
<topics-list — one topic per line as - [Name](path)>

## Checklist
- [x] README.md includes scenario description and topics covered
- [x] main.py uses real library imports (not pseudocode)
- [x] requirements.txt has pinned versions
- [x] # REQUIRES: comments mark infra-dependent steps
- [x] README.md Demos table updated with Topics column entry

## Sources used
<sources from DESIGN_BRIEF — one per line, numbered>

## Critic result
N/A — demo scaffold reviewed via approval gate in Step 3
PRBODY
)"
```

After the PR is created, print the PR URL so it is visible in the conversation.
