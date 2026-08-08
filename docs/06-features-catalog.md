# Features Catalog

One spec block per section. Format: **Status** (not-started / in-progress / done) · **Tables** · **Key rules** · **Depends on**.

---

### Home
**Status:** not-started · **Tables:** `resources`, `research_papers`, `events` (for featured content) · **Rules:** public, SSR for SEO, no auth required · **Depends on:** none

### Dashboard
**Status:** not-started · **Tables:** varies per role, reads from most modules · **Rules:** one shell component (`DashboardShell`), independent data hooks per role so no role's dashboard can break another's · **Depends on:** Auth & RBAC

### AI Research Assistant
**Status:** not-started · **Tables:** `ai_conversations`, `ai_messages`, `resource_embeddings` · **Rules:** RAG-only, must cite `cited_resource_ids`, refuses to answer beyond verified resources — see `07-ai-assistant-rag-spec.md` · **Depends on:** Resources/Library (as the indexed source)

### Research Roadmaps
**Status:** not-started · **Tables:** `roadmaps` (type table under `resources`), `research_fields` · **Rules:** ordered steps referencing other resources (courses/articles/videos) as checkpoints · **Depends on:** Resources

### Scientific Articles
**Status:** not-started · **Tables:** `articles` (type table), `resources`, `research_fields` · **Rules:** verified-only are publicly listed; unverified visible only to author/admin · **Depends on:** none

### Courses
**Status:** not-started · **Tables:** `courses` (type table), `certificates` · **Rules:** may link to external providers (Coursera/edX) as `source_url`; internal courses have their own progress tracking (future) · **Depends on:** Resources

### Podcast
**Status:** not-started · **Tables:** `podcasts` (type table) · **Rules:** stored as resource, playable via embed or Supabase Storage file · **Depends on:** Resources

### Community
**Status:** not-started · **Tables:** `community_posts`, `comments`, `likes`, `bookmarks`, `messages` · **Rules:** polymorphic likes/bookmarks (`likeable_type`/`likeable_id`) reused across posts, articles, papers · **Depends on:** Auth

### Women's Health Research Center
**Status:** not-started · **Tables:** reuses `research_papers`, `articles`, `resources` scoped by `field_id` · **Rules:** this is a **field-scoped view**, not a new schema — no dedicated tables · **Depends on:** Research Fields taxonomy, Resources

### Competitions
**Status:** not-started · **Tables:** `competitions`, `events`, `event_registrations` · **Rules:** deadline-driven, notification triggers on deadline approach · **Depends on:** Notifications

### Grants
**Status:** not-started · **Tables:** `grants`, `events` · **Rules:** same deadline pattern as Competitions · **Depends on:** Notifications

### Research Opportunities
**Status:** not-started · **Tables:** `research_opportunities` · **Rules:** postable by supervisors/research_leaders, applications tracked via `event_registrations`-style join (reuse pattern, don't duplicate) · **Depends on:** Auth & RBAC

### Research Centers
**Status:** not-started · **Tables:** `research_centers`, `universities` · **Rules:** admin/university-verified only · **Depends on:** none

### Laboratories
**Status:** not-started · **Tables:** `laboratories` (FK `research_center_id`) · **Rules:** always scoped under a center · **Depends on:** Research Centers

### Supervisors Directory
**Status:** not-started · **Tables:** `supervisors`, `universities` · **Rules:** capacity field drives "accepting students" badge · **Depends on:** Auth (supervisor role)

### Research Library
**Status:** not-started · **Tables:** all `resources` type tables · **Rules:** unified search/browse surface across every resource type + field taxonomy filter · **Depends on:** Resources

### Member Profiles
**Status:** not-started · **Tables:** `profiles`, `achievements`, `certificates`, `research_papers` (via `paper_authors`) · **Rules:** public profile shows verified achievements only · **Depends on:** Auth

### Achievements
**Status:** not-started · **Tables:** `achievements`, `badges`, `user_badges` · **Rules:** awarded by system events (e.g. paper published, course completed) — no manual admin-only awarding except special badges · **Depends on:** relevant trigger modules

### Notifications
**Status:** not-started · **Tables:** `notifications` · **Rules:** payload is `jsonb` so new notification types don't require schema changes · **Depends on:** none (consumed by many)

### Settings
**Status:** not-started · **Tables:** `settings` · **Rules:** `user_id NULL` = global setting (admin/founder-only write); `key`/`value jsonb` shape keeps this extensible without migrations · **Depends on:** Auth & RBAC

---

## Cross-cutting modules (not user-facing sections, but required infrastructure)

### Auth & RBAC
**Tables:** `users`, `profiles`, `roles`, `user_roles` · Supabase Auth providers: Email, Google, GitHub now; ORCID reserved.

### Projects & Teams
**Tables:** `projects`, `teams`, `team_members`, `volunteer_activities` · Supports Research Leader / mentoring workflows across multiple sections (Research Opportunities, Community, Supervisors).

### System Logs
**Tables:** `system_logs` · Append-only audit trail for every admin/moderation action; required before Admin dashboard (Phase 12) ships.
