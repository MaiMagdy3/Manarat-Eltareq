# Coding Standards & Git Workflow

## Language & style
- TypeScript strict mode everywhere. No `any` without an inline comment justifying it.
- Zod validation at every API boundary (route handler input, form submission).
- One component per file. Co-locate tests next to the code they test (`Component.tsx` + `Component.test.tsx`).
- ESLint + Prettier enforced via pre-commit hook — no manual formatting debates.
- Naming: `camelCase` for variables/functions, `PascalCase` for components/types, `snake_case` for database identifiers only.

## Testing expectations
- Domain layer: unit tests, no mocking needed since there are no framework dependencies.
- Application layer (Services): unit tests with a mocked Repository.
- Infrastructure (Supabase repositories): integration tests against a local/test Supabase instance.
- API routes: contract tests (request in, response shape out).

## Git workflow
- `main` — production, protected, deploys automatically via Vercel.
- `develop` — staging integration branch.
- `feature/<short-name>` — one feature or fix per branch.
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`.
- PRs required into `develop` and `main`. CI (lint, typecheck, test) must pass before merge.
- Releases tagged `vX.Y.Z` off `main`.

## Migrations
- All schema changes go through `supabase/migrations/`, generated via Supabase CLI, reviewed in PR like any other code.
- A migration PR must also update `04-database-schema.md` in the same PR — the spec kit and the schema must never drift apart.

## Definition of done (per feature)
1. Matches its block in `06-features-catalog.md`.
2. RLS policies exist for every new/changed table.
3. Service layer has unit tests.
4. i18n strings added for `ar` and `en`.
5. Works in both RTL and LTR, both dark and light themes.
