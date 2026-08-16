# Architecture

## Tech stack (final — do not substitute without updating this file)

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, `next-intl` (i18n/RTL), `next-themes` (dark/light)
- **Backend:** Next.js Route Handlers acting as thin controllers over an internal Service layer
- **Database:** PostgreSQL via Supabase, `pgvector` extension enabled
- **Auth:** Supabase Auth — Email, Google, GitHub now; ORCID reserved as a generic OIDC provider slot
- **Storage:** Supabase Storage — buckets: `avatars`, `resources`, `certificates`, `podcasts`, `research-papers`
- **AI:** Anthropic Claude API for generation, `pgvector` for retrieval (RAG — no fine-tuning)
- **Deployment:** Vercel (app), Supabase Cloud (data), GitHub + GitHub Actions (CI/CD)
- **Server state:** TanStack Query (React Query)
- **Client UI state:** Zustand (small, non-server state only — e.g. sidebar/theme/draft state)

## Layered architecture

```
Presentation   (app/, components/)        — Next.js routes, UI, hooks
Application    (services/, use-cases/)    — business rules, orchestration
Domain         (entities/, rules/)         — pure TypeScript, no framework imports
Infrastructure (repositories/, supabase/)  — Supabase client, external API calls
```

Dependency direction is one-way: Presentation → Application → Domain, with Infrastructure implementing interfaces defined in Application. Domain code has zero framework imports — this is what makes it testable and swappable.

## Repository Pattern (contract every feature follows)

```ts
// application/repositories/I<Entity>Repository.ts
export interface I<Entity>Repository {
  findById(id: string): Promise<Entity | null>;
  search(params: SearchParams): Promise<PaginatedResult<Entity>>;
  create(input: New<Entity>): Promise<Entity>;
  update(id: string, input: Partial<Entity>): Promise<Entity>;
  softDelete(id: string): Promise<void>;
}

// infrastructure/repositories/Supabase<Entity>Repository.ts
export class Supabase<Entity>Repository implements I<Entity>Repository { /* ... */ }

// application/services/<Entity>Service.ts
export class <Entity>Service {
  constructor(private repo: I<Entity>Repository) {}
  // business rules live here — e.g. "only the author or an admin may publish"
}
```

Dependency wiring happens in `shared/lib/container.ts`. No heavy DI framework — a single composition file is enough at this scale.

## Folder structure

```
manarat/
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (dashboard)/{student,researcher,supervisor,admin,founder}/
│   ├── ai-assistant/ roadmaps/ articles/ courses/ podcast/ community/
│   ├── womens-health/ competitions/ grants/ opportunities/
│   ├── centers/ labs/ supervisors/ library/ profile/[id]/
│   ├── achievements/ notifications/ settings/
│   └── api/v1/...
│
├── features/<feature-name>/
│   ├── domain/
│   ├── application/{services,repositories}/     # repositories = interfaces only
│   ├── infrastructure/repositories/              # supabase implementations
│   ├── components/
│   └── hooks/
│
├── shared/
│   ├── components/ui/        # shadcn/ui wrappers
│   ├── lib/{supabase,ai,container.ts}
│   ├── hooks/ types/ utils/
│
├── styles/ locales/{ar.json,en.json} tests/ docs/spec-kit/
```

Rule: shared code goes in `shared/` only if two or more features need it. Otherwise it stays inside the feature that owns it.

## UI/UX foundations
Minimal, scientific, modern, fully responsive. Dark/light via CSS variables. RTL default, LTR supported via logical properties. WCAG AA accessibility target. Article/reading typography intentionally distinct from app-chrome typography.
