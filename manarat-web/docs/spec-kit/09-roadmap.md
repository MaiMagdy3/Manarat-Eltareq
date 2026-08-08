# Roadmap

Each phase must produce a working, demoable product — no phase ends "half-built."

| Phase | Deliverable | Tables/modules touched |
|---|---|---|
| 1. Foundation | Repo, Next.js+TS+Tailwind+shadcn/ui scaffold, CI, folder structure, design tokens, i18n skeleton, empty shell deployed on Vercel | — |
| 2. Auth & RBAC | Email/Google/GitHub login, roles, protected routes, profile creation | users, profiles, roles, user_roles |
| 3. Dashboard shell | Role-based routing + layout, empty widgets | dashboard module |
| 4. Resources & Library | Articles, Books, Courses, Videos, Podcasts, Roadmaps — browse/search/bookmark | resources + type tables, bookmarks |
| 5. Research Ecosystem | Research Papers, Universities, Centers, Labs, Supervisors directory | research_papers, universities, research_centers, laboratories, supervisors |
| 6. AI Research Assistant (RAG v1) | Ingestion pipeline + pgvector + chat UI + citations | resource_embeddings, ai_conversations, ai_messages |
| 7. Community | Posts, comments, likes, messages | community_posts, comments, likes, messages |
| 8. Opportunities | Competitions, Grants, Events, Research Opportunities + registration | competitions, grants, events, research_opportunities |
| 9. Recognition | Achievements, Badges, Certificates | achievements, badges, certificates |
| 10. Projects & Teams | Team formation, project tracking, volunteer hours | projects, teams, team_members, volunteer_activities |
| 11. Women's Health Research Center | Field-scoped view reusing existing modules | no new tables |
| 12. Admin & Founder Ops | Moderation queue, verification workflow, platform KPIs | system_logs, settings |
| 13. Polish & scale prep | Performance audit, caching, load testing, paid-tier migration plan | — |

## Gate rule
No phase starts until the previous phase's Definition of Done (see `08-coding-standards.md`) is met and the founder has approved the demo.
