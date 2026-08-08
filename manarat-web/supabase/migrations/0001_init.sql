-- ===================================================================
-- Manarat Al-Tareeq — initial migration
-- Covers: profiles (auto-created on signup) + contact_messages
-- Matches spec-kit/04-database-schema.md conventions:
--   snake_case, uuid PK, created_at/updated_at, RLS mandatory.
-- ===================================================================

-- PROFILES ----------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  bio text,
  avatar_url text,
  institution text,
  country text,
  specialty text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles are publicly readable"
  on public.profiles for select
  using (true);

create policy "users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create a profile row whenever a new auth user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', new.email));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- CONTACT_MESSAGES ----------------------------------------------------
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Public/anonymous users may submit a contact message (insert-only).
create policy "anyone can submit a contact message"
  on public.contact_messages for insert
  with check (true);

-- Only admins may read submitted messages. Replace with your real
-- admin-role check once roles/user_roles (see 04-database-schema.md)
-- are migrated in a later phase.
create policy "no public read on contact messages"
  on public.contact_messages for select
  using (false);
