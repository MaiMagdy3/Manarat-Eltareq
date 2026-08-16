# Netlify Deployment Guide

## Project root
Use the repository root as the GitHub repository root.

## Netlify build settings
- Build command: `cd manarat-web && npm install && npm run build`
- Publish directory: `manarat-web/.next`
- Framework: Next.js

## Important environment variables
Add the following variables in Netlify Site settings → Environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Deploy from GitHub
1. Push the repository to GitHub.
2. Open Netlify and create a new site from GitHub.
3. Select the repository.
4. Set the base directory to `manarat-web` if Netlify asks for it.
5. Deploy.
