# /discover-topics — Find Missing, Outdated, or New Topics

Scan the current topic catalog against the latest state of the AI ecosystem. Also researches how leading AI learning repos and agent-enabled GitHub projects are structured — to ensure this repo stays current with tooling conventions, not just content. Produces a concrete discovery report for review before any changes are made.

---

## Step 1 — Read the current catalog

```bash
find topics/ -name "*.md" ! -name "README.md" | sort
```

Build a mental map of: all sections, all topics, which are 🔴/🟡/🟢.

## Step 2 — Research new content topics (use WebSearch)

Run each search, read top 3 results:

**Use the current year from `currentDate` in your context for all searches below.**

1. `AI inference serving new techniques <current_year>`
2. `LLM agent frameworks new <current_year> emerging`
3. `RAG improvements new methods <current_year>`
4. `LLM fine-tuning new techniques <current_year>`
5. `AI safety governance regulation <current_year> new`
6. `LLM evaluation new frameworks <current_year>`
7. `LLM observability new tools <current_year>`
8. `multimodal AI vision language models new <current_year>`
9. `AI systems architecture patterns emerging <current_year>`

For each result: is this a concept, tool, or technique not in the repo? Is it significant enough for its own topic file?

## Step 3 — Research GitHub repo and agent tooling conventions (use WebSearch)

Run these searches to check if the repo's agentic setup is current:

1. `CLAUDE.md AGENTS.md best practices GitHub repo <current_year>`
2. `Claude Code subagents hooks best practices <current_year>`
3. `MCP servers recommended Claude Code <current_year>`
4. `GitHub Actions Claude Code AI agent CI integration <current_year>`
5. `AI learning repository structure best practices GitHub <current_year>`

Extract: Are there new conventions for `.claude/` setup? New hook types? New MCP servers worth adding? New CLAUDE.md patterns that would improve this repo?

## Step 4 — Check completed topics for staleness

For each topic with status 🟢 in README.md, search:
`"<topic name>" <current_year> new development OR update OR superseded`

Flag any where the written content is likely outdated based on recent developments.

## Step 5 — Produce the discovery report

Output in this exact format so changes can be reviewed before execution:

```markdown
## Discovery Report — <date>

### New topics to add

| Section | Filename | Title | Why it matters | Priority |
|---------|----------|-------|----------------|----------|
| topics/06-agents-orchestration/ | voice-agents.md | Voice Agents | ... | high/medium/low |

### Topics needing a research refresh

| File | What changed | Action needed |
|------|-------------|---------------|
| topics/03-serving-infrastructure/nvidia-dynamo.md | GA release in 2026 with new API | Full research pass |

### Repo / tooling updates recommended

| Area | Current state | Recommendation | Source |
|------|--------------|----------------|--------|
| .claude/settings.json | No GitHub MCP | Add github-mcp-server | [link] |
| Hooks | None configured | Add PostToolCall lint hook | [link] |

### Possible new section

Only if 3+ new topics cluster around a theme not covered by any existing section:
- Proposed: XX-<name>
- Topics: ...
- Why a new section: ...

### Topics potentially obsolete

| File | Reason | Recommendation |
|------|--------|----------------|
```

## Step 6 — Wait for approval before making changes

Present the report and wait. Do NOT create files, update README, or modify settings until the user approves specific items from the report.

## Step 7 — Execute approved changes

For approved new topics: create placeholder files and add to section README + main README.
For approved tooling updates: update `.claude/settings.json`, CLAUDE.md, or other config.
For approved research refreshes: dispatch `/research-topic <name>` for each.

## Step 8 — Commit

```bash
git add topics/ README.md .claude/
git commit -m "chore: discover and add topics from ecosystem scan <date>"
```
