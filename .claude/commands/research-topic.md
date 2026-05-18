# /research-topic — Research and Document a Topic

Fully research the topic in $ARGUMENTS. Always re-researches even if the file already has content — the goal is to find what has changed, what was missing, and whether the explanation is still current. Orchestrates four specialist subagents: researcher, practitioner, image-finder, and topic-writer.

---

## Step 1 — Locate the file

Find which section folder this topic belongs to:

```bash
find topics/ -name "*.md" ! -name "README.md" | xargs grep -l "$ARGUMENTS" 2>/dev/null
# OR search by filename
find topics/ -iname "*$(echo $ARGUMENTS | tr ' ' '-')*" ! -name "README.md"
```

Read the file if it exists — note its current status icon and what sections already have content. If the file doesn't exist, identify the correct section from CLAUDE.md's section map and note the path to create.

## Step 2 — Research (dispatch researcher subagent)

Dispatch the `researcher` subagent with the topic name. It will run 6-8 web searches, read primary sources, and return a structured research brief covering:
- Current state and whether the approach is still dominant
- Core mechanism with specifics
- Key benchmarks and numbers
- Limitations and failure modes
- What changed recently (last 1-2 years)
- 2-3 primary sources

Wait for the research brief before proceeding.

## Step 3 — Mine practitioner experience (dispatch practitioner subagent)

Dispatch the `practitioner` subagent with the topic name. It will search GitHub issues (vllm-project, langchain-ai, run-llama, huggingface, chroma-core, qdrant), Stack Overflow, Reddit (r/LocalLLaMA, r/MachineLearning, r/LangChain), Hacker News, and engineering blogs to return a structured practitioner brief covering:
- Common problems developers hit (with specific error messages and conditions)
- Workarounds and fixes (with tradeoffs)
- Production vs. documentation gaps
- Non-obvious default settings that should always be changed
- Community consensus and anti-patterns

Wait for the practitioner brief before proceeding.

## Step 4 — Find an image (dispatch image-finder subagent)

Dispatch the `image-finder` subagent with the topic name and its section folder. It will:
- Search Wikimedia Commons for CC0/public-domain technical diagrams
- Verify no logos or trademarks
- Download to `assets/images/topics/<section>/` if suitable
- Return either the downloaded path + embed code, or "use Mermaid instead"

Use the image-finder's recommendation to decide whether to embed an image or write a Mermaid diagram in "How it works".

## Step 5 — Write the file (dispatch topic-writer subagent)

Dispatch the `topic-writer` subagent with:
- The research brief from Step 2
- The practitioner findings from Step 3
- The image result from Step 4 (path + alt text, or Mermaid instruction)
- The existing file content (if any)
- The target file path

The topic-writer will produce the complete file following the writing style in its system prompt:
- Analogy → definition → misconception for "What it is"
- Simple model → detailed mechanism → concrete numbers for "How it works"
- "Gotchas & production behavior" subsection drawn from the practitioner findings
- Mermaid diagram only if the concept is a multi-stage flow that needs it
- Image embed if image-finder returned a downloaded file

## Step 6 — Write the file to disk

Take the topic-writer's output and write it to the file path identified in Step 1. If creating a new file, use the path you identified. If updating, overwrite the existing file.

## Step 7 — Update README.md and section README

In the main `README.md`:
- If the topic was 🔴, change to 🟢
- If the topic was 🟡, change to 🟢
- Increment the "Done" count in the section's progress row
- Increment the overall "X / 136 topics complete" counter

In the section's `topics/<section>/README.md`:
- Update the status icon for this topic

## Step 8 — Commit

```bash
git add topics/<section>/<topic>.md README.md topics/<section>/README.md
# Include image if downloaded (PNG) or generated (SVG)
git add assets/images/topics/<section>/<topic>.png 2>/dev/null || true
git add assets/images/topics/<section>/<topic>.svg 2>/dev/null || true
git commit -m "docs: research and document $ARGUMENTS"
```
