# Contributing

This repo is a personal knowledge base maintained by [@amikumar91](https://github.com/amikumar91) with AI agent assistance (Claude Code). All changes flow through a branch → PR → CI → merge pipeline.

---

## Branch naming

| Change | Prefix | Example |
|--------|--------|---------|
| New or updated topic | `docs/` | `docs/rag-chunking-strategies` |
| New demo scaffold | `demo/` | `demo/rag-with-eval` |
| Small fix (typo, broken link) | `fix/` | `fix/kv-cache-broken-link` |
| Config / tooling change | `chore/` | `chore/update-markdownlint-config` |

Rules: lowercase, hyphens only, no underscores, max 40 characters total including prefix.

---

## Commit message format

```
docs: research and document <topic-name>
feat: scaffold <demo-name> demo
fix: <short description>
chore: <short description>
```

---

## Definition of done

**A topic PR is ready when:**
- All 7 sections have real content: What it is, How it works (+ Gotchas subsection), Why it matters, Key terms, Code/demo, My notes, Resources
- `### Gotchas & production behavior` has ≥ 3 findings sourced from practitioner research
- Code snippet is ≤ 30 lines and runs without GPU/API key, or is marked `# REQUIRES:`
- Status icon updated in both `README.md` and `topics/<section>/README.md`
- Progress counter in `README.md` incremented if topic moved to 🟢
- Critic subagent returned PASS (or unresolved issues are listed in the PR body)

**A demo PR is ready when:**
- `README.md` has scenario description, topics covered list, and run instructions
- `main.py` uses real library imports (not pseudocode or stubs)
- `requirements.txt` has pinned versions
- Infra-dependent steps are marked `# REQUIRES: <what>`
- `README.md` Demos table updated with Topics column entry

---

## Slash commands

| Command | What it does |
|---------|-------------|
| `/research-topic <name>` | Researches and writes a topic; creates branch and opens PR automatically |
| `/research-demo [name]` | Discovers or scaffolds a demo; creates branch and opens PR automatically |
| `/discover-topics` | Scans for missing topics, outdated content, and tooling gaps |

All commands create a branch and open a PR automatically. Review and merge on GitHub.

---

## Auto-merge

PRs on `fix/` and `chore/` branches labelled `auto-merge` merge automatically after CI passes. Topic (`docs/`) and demo (`demo/`) PRs always require human review before merge.

---

## GitHub Actions

Two advisory checks run on every PR (both `continue-on-error: true` — they report but never block):
- **markdownlint** — structural rules on `topics/**/*.md`
- **lychee** — link checker on `topics/**/*.md` with 1-day cache
