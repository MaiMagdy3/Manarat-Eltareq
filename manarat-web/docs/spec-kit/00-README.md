# Manarat Al-Tareeq — Spec Kit

This folder is a **tool-agnostic specification kit**. Any AI coding tool (Claude Code, Cursor, GitHub Copilot Workspace, Windsurf, etc.) or any human developer should be able to read these files, in order, and fully understand the project — with zero prior context.

## Read order

| File | Purpose |
|---|---|
| `01-constitution.md` | Non-negotiable rules. Read this first, always. If any instruction elsewhere conflicts with this file, this file wins. |
| `02-project-overview.md` | What the product is, who it's for, what the 20 sections are |
| `03-architecture.md` | Tech stack, layered architecture, folder structure |
| `04-database-schema.md` | Full data model, ER diagram, RLS policy pattern |
| `05-api-conventions.md` | REST conventions, request/response shape, versioning |
| `06-features-catalog.md` | One spec block per feature/section — status, tables used, key rules |
| `07-ai-assistant-rag-spec.md` | The RAG pipeline the AI Research Assistant must follow |
| `08-coding-standards.md` | Language rules, naming, testing, git workflow |
| `09-roadmap.md` | Phases — what "done" looks like at each stage |

## How an AI agent should use this kit

1. Load `01-constitution.md` into every session before generating code.
2. Before touching a feature, load its block from `06-features-catalog.md` plus the relevant tables from `04-database-schema.md`.
3. Never invent a table, endpoint, or folder that isn't described here — propose an addition to this kit first, get it approved, then implement.
4. Any code that violates `01-constitution.md` or `03-architecture.md` should be flagged, not silently written.

## Status

Pre-implementation. Phase 1 has not started. This kit is the single source of truth until superseded by a newer version (bump the version number in `01-constitution.md` when it changes).
