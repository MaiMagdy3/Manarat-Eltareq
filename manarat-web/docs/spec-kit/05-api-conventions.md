# API Conventions

## Shape
REST-ish, resource-oriented, versioned by folder: `app/api/v1/...`. Route Handlers are thin controllers: validate input (Zod) → call a Service → map result to JSON. All business logic lives in `features/*/application/services`, never in the route handler itself.

## Examples

```
GET    /api/v1/articles                 list (filters: field, language, page, pageSize)
GET    /api/v1/articles/:id
POST   /api/v1/articles                 role-gated (verified contributor or admin)
PATCH  /api/v1/articles/:id
DELETE /api/v1/articles/:id             soft delete only

GET    /api/v1/research-papers/:id
POST   /api/v1/research-papers          author or research_member+

GET    /api/v1/dashboard/:role          returns role-scoped widgets

POST   /api/v1/ai/ask                   { conversationId?, question } -> RAG pipeline
GET    /api/v1/ai/conversations/:id

POST   /api/v1/community/posts
POST   /api/v1/community/posts/:id/comments
POST   /api/v1/community/posts/:id/likes
```

## Standard response envelope

```json
{
  "data": { },
  "error": null,
  "meta": { "page": 1, "pageSize": 20, "total": 134 }
}
```

Errors:
```json
{ "data": null, "error": { "code": "FORBIDDEN", "message": "..." }, "meta": null }
```

## Rules
- Every mutating endpoint validates input with a Zod schema colocated in the feature (`features/<name>/application/schemas.ts`).
- Every list endpoint is paginated by default — no unbounded `SELECT *`.
- Role checks happen in the Service, not the route handler, so the same rule applies whether the call comes from the web app, a future mobile app, or a background job.
- Auth: Route Handlers re-verify the Supabase session server-side; middleware is a UX convenience, not a security boundary (see constitution §3).
