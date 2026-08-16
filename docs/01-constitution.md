# Constitution — v1.0

Binding rules for any human or AI agent working on Manarat Al-Tareeq. These override convenience, speed, or a tool's default habits.

## 1. Identity
Manarat Al-Tareeq is a **scientific ecosystem**, not a course platform. Every feature decision should ask: "does this serve students, researchers, supervisors, or institutions doing real scientific work?" — not "does this look like a generic LMS?"

## 2. Architectural non-negotiables
- **Clean Architecture, always.** Presentation → Application (Services) → Domain (pure TS) → Infrastructure (Supabase). Domain code must never import Supabase, Next.js, or any framework package.
- **Repository Pattern, always.** No feature calls `supabase.from(...)` directly from a component or a route handler. It calls a Service, which calls a Repository interface.
- **Feature-based folders, always.** New code for "Grants" goes in `features/grants/`, never scattered into `shared/` or another feature's folder.
- **No direct schema shortcuts.** If a feature seems to need a new column on an unrelated table, stop — it likely needs its own table or a join table instead. Propose the change in `04-database-schema.md` first.

## 3. Data & Security non-negotiables
- **RLS is mandatory** on every table, from the first migration. A table without an RLS policy is a bug, not an oversight to fix later.
- **Never trust the client.** Role checks happen in the Service layer AND are mirrored in RLS. If they disagree, RLS wins.
- **Soft delete only** (`deleted_at`) on user-generated and scientific content. Hard deletes are reserved for spam/abuse cleanup via an explicit admin action, logged in `system_logs`.
- **Every AI Assistant answer must cite verified resources.** If no relevant verified resource exists, the assistant says so — it does not generate an unsourced answer. See `07-ai-assistant-rag-spec.md`.

## 4. Cost & scale non-negotiables
- **Free-tier first.** Don't introduce a paid service if a free-tier one does the job. Any new third-party service must be justified against §12 of the architecture blueprint before adoption.
- **No solution that requires a rebuild to scale 10x.** If a shortcut would need re-architecture at 10,000 users, don't take the shortcut now — do it right the first time, even if it's slightly more work today.

## 5. Language & UX non-negotiables
- **Arabic is the default locale, RTL is the default direction.** English/LTR is the secondary, not the primary, target.
- Use logical CSS/Tailwind properties (`ms-`, `me-`, `ps-`, `pe-`) — never `ml-`/`mr-` directly, so RTL never breaks.
- Accessibility (WCAG AA) is a requirement, not a nice-to-have.

## 6. Process non-negotiables
- **No implementation code before the relevant spec file exists and is approved** by the founder.
- Every merged feature must map to a phase in `09-roadmap.md`. If it doesn't fit a phase, it doesn't get built yet.
- Conventional Commits, PR review, and passing CI are required for `develop` and `main` — no direct pushes.

## 7. Amendment rule
This file can change, but only explicitly and with a version bump. An AI agent should never "interpret around" a rule here — if a request conflicts with this constitution, the agent flags the conflict instead of silently choosing one side.
