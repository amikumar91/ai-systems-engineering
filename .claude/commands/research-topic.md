# /research-topic — Research and Document a Topic

Fully research the topic in $ARGUMENTS. Always re-researches even if the file already has content — the goal is to find what has changed, what was missing, and whether the explanation is still current. Orchestrates four specialist subagents (researcher, practitioner, image-finder, topic-writer) plus a critic for quality validation.

---

## Step 0 — Locate file and generate scope brief

### 0a. Locate the file

Find which section folder this topic belongs to by searching existing files or matching by filename pattern. Read the file if it exists — note its current status icon and what sections already have content. If the file doesn't exist, identify the correct section from CLAUDE.md's section map and note the path to create.

### 0b. Read the section README

Read the section's `topics/<section>/README.md`. Find the row for this topic in the table. Note:
- The topic's position number (N of M)
- The previous topic name and filename (or "none — entry point")
- The next topic name and filename

### 0c. Classify topic type from section number

Derive the topic type from the section folder name:

| Section folder | Topic type | Practitioner focus | Practitioner exclude |
|----------------|------------|--------------------|----------------------|
| `01-model-inference-core` | conceptual/algorithm | Mental model pitfalls, algorithm behavior edge cases, model selection gotchas, benchmark interpretation | Serving runtime bugs — belong in section 03 |
| `02-model-optimization` | algorithm/technique | Training artifacts, quantization pitfalls, fine-tuning failure modes | Deployment/serving config — belong in section 03 |
| `03-serving-infrastructure` | infrastructure/tool | Runtime bugs, OOM errors, configuration issues, version regressions | Nothing excluded |
| `04-retrieval-memory` | algorithm/system | Retrieval quality gotchas, chunking artifacts, indexing issues, embedding quality | Serving engine bugs — belong in section 03 |
| `05-agents-orchestration` | orchestration/system | Agent failures, tool call bugs, loop behavior, state management | Serving runtime bugs — belong in section 03 |
| `06-prompting-control` | technique | Prompt behavior artifacts, sampling edge cases, output format failures | Serving/infra bugs — belong in section 03 |
| `07-evaluation-quality` | methodology | Eval correctness, metric validity, benchmark contamination, golden set drift | Serving runtime bugs — belong in section 03 |
| `08-observability-ops` | tool/ops | Instrumentation gaps, tracing correctness, cost tracking pitfalls | Algorithm/model bugs — belong in sections 01/02 |
| `09-integration-cloud` | integration/tool | Cloud-specific issues, gateway behavior, routing edge cases | Pure algorithm bugs — belong in sections 01/02 |
| `10-safety-governance` | policy/algorithm | Guardrail failures, policy gaps, compliance edge cases | Serving runtime bugs — belong in section 03 |

### 0d. Build the DO-NOT-cover list

From the section README, collect all other topic filenames in the same section (excluding the current topic). These are adjacent concepts that each have their own file — the current topic should cross-reference them, not explain them. List the most closely adjacent ones (previous topic, next topic, and any thematically close topics).

### 0e. Generate the scope brief

Assemble a scope brief in this exact format. You will pass this verbatim to all three parallel agents in Step 1 and to the topic-writer in Step 2.

```
## Scope brief for: <topic name>

**Topic type:** <type from classification above>
**Section:** <section-folder>
**Position:** #<N> of <M> — <"entry point — no prerequisite" | "requires topic #N-1: <name>">
**Architecture layer:** <from CLAUDE.md section map>

**Previous topic:** <name + filename, or "none — entry point">
**Next topic:** <name + filename>

**DO NOT explain these** (each has its own topic file — cross-reference only):
- <adjacent concept 1> → <filename.md>
- <adjacent concept 2> → <filename.md>
[list the 3-6 most adjacent topics]

**Cross-reference these inline** (when your text touches these concepts, insert a link and move on — do not explain):
- <concept> → [<Topic name>](<filename.md>)
[list same as above in link format]

**Practitioner focus:** <copy from classification table above>
**Practitioner exclude:** <copy from classification table above>

**Diagram needed:** <A specific description of what visual would best serve this topic at this position in the learning sequence. Think: what does a reader need to SEE to understand this concept? For entry-point/overview topics: a landscape or spectrum diagram. For algorithm topics: a step-by-step flow. For tool topics: a configuration or data flow diagram.>
```

---

## Step 1 — Research in parallel (dispatch three subagents simultaneously)

Dispatch all three agents at the same time. Each receives the full scope brief prepended to its prompt.

### Dispatch researcher subagent

Prepend the scope brief, then ask it to:
- Run 6-8 web searches, read primary sources
- Return a structured research brief covering: current state, core mechanism with specifics, key benchmarks and numbers, limitations and failure modes, what changed recently (last 1-2 years), 2-3 primary sources
- Flag any DO-NOT-cover adjacent concepts as "brief mention only" rather than full explanations
- Ensure balanced coverage across all concepts in the topic title

### Dispatch practitioner subagent

Prepend the scope brief, then ask it to:
- Mine GitHub issues, Stack Overflow, Reddit, HN, and engineering blogs
- Apply the practitioner focus/exclude filter from the scope brief before returning findings
- Return problems, workarounds, production vs. docs gaps, community consensus
- If fewer than 3 findings remain after scope filtering, say so explicitly

### Dispatch image-finder subagent

Prepend the scope brief, then ask it to:
- Build a diagram matching the **diagram description** from the scope brief (not just the topic name)
- Use **Excalidraw JSON** for rich, colorful, multi-tier diagrams (landscape overviews, category comparisons, multi-column layouts); save to `assets/images/topics/<section>/<topic>.excalidraw`
- Use **Mermaid code block** for simple flows, pipelines, and state machines
- Return: generated Excalidraw file path + PNG embed code, OR Mermaid code block suggestion
- No CC0 image downloads, no SVG generation

Wait for all three results before proceeding.

---

## Step 2 — Write the file (dispatch topic-writer subagent)

Dispatch the `topic-writer` subagent with ALL of the following in its prompt:
- The scope brief from Step 0
- The research brief from Step 1
- The practitioner findings from Step 1
- The image result from Step 1 (path + alt text + coverage assessment, or Mermaid instruction)
- The existing file content (if any — paste it in full)
- The target file path

The topic-writer will:
1. Apply the relevance filter (discard practitioner findings that match the exclude directive)
2. Plan the concept order (umbrella → dominant type → mechanics → variants → gotchas)
3. Write the complete file with cross-reference links, gotcha grouping, date stamp, and code ≤30 lines
4. Embed the Excalidraw PNG (`![alt](../../assets/images/topics/<section>/<topic>.png)`) and/or Mermaid block as needed — can use both in the same file

---

## Step 3 — Write the file to disk

Take the topic-writer's output and write it to the file path identified in Step 0. If creating a new file, use the path you identified. If updating, overwrite the existing file.

---

## Step 4 — Quality validation (dispatch critic subagent)

Dispatch the `critic` subagent with:
- The absolute path to the file just written
- The scope brief from Step 0 (so the critic knows what was intentionally excluded)

The critic will check the 12-point rubric and return either `PASS` or a `FAIL` block with specific issues.

---

## Step 5 — Silent rewrite loop (if critic returned FAIL)

If the critic returned PASS: proceed to Step 6.

If the critic returned FAIL:
1. Re-dispatch the `topic-writer` subagent with:
   - Everything from Step 2
   - The critic's specific issues list appended at the end: *"The critic identified these issues to fix: [paste issues list]"*
2. Write the rewritten file to disk (overwrite)
3. Re-dispatch the critic on the rewritten file
4. If still FAIL: do one final rewrite attempt (same process)
5. If still FAIL after 2 rewrite attempts: write the file anyway, but print a notice: *"Note: critic flagged [N] unresolved issues: [list]"* — do not block the commit

Do not prompt the user during this loop. The entire rewrite cycle is silent.

---

## Step 6 — Update README.md and section README

In the main `README.md`:
- If the topic was 🔴, change to 🟢
- If the topic was 🟡, change to 🟢
- Increment the "Done" count in the section's progress row
- Increment the overall "X / 136 topics complete" counter

In the section's `topics/<section>/README.md`:
- Update the status icon for this topic

---

## Step 7 — Commit

```bash
git add topics/<section>/<topic>.md README.md topics/<section>/README.md
# Include Excalidraw source file if generated (PNG is produced by user from .excalidraw)
git add assets/images/topics/<section>/<topic>.excalidraw 2>/dev/null || true
git add assets/images/topics/<section>/<topic>.png 2>/dev/null || true
git commit -m "docs: research and document $ARGUMENTS"
```
