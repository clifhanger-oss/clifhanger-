-- Cliffhanger product catalog schema.
-- Public read-only (anon) — the marketing site only reads; writes happen via
-- the service role / dashboard. Structured fields use jsonb so the catalog can
-- grow without migrations.

create table if not exists public.products (
  code          text primary key,          -- catalog article number (e.g. "71832")
  name          text not null,             -- card title (e.g. "Jul 2")
  category      text not null,             -- e.g. "Belay Devices", "Climbing Shoes — High-End"
  type          text,                      -- short type code ("ST"/"PA")
  description   text,
  features      jsonb not null default '[]'::jsonb,   -- string[]
  specs         jsonb not null default '[]'::jsonb,   -- {label,value}[]
  attributes    jsonb not null default '[]'::jsonb,   -- string[]
  colors        jsonb not null default '[]'::jsonb,   -- string[]
  weight        text,                      -- single weight, e.g. "105 g"
  size_weights  jsonb not null default '[]'::jsonb,   -- {label,weight}[] (shoes/ropes)
  certification text,
  made_in       text,
  image         text,                      -- /images/... path or storage URL
  status        text,                      -- card corner badge
  rating        text,                      -- card certification line
  source        text,                      -- source catalog (e.g. "DWB_Sport_2026")
  available     boolean not null default true,
  sort          integer not null default 0,
  updated_at    timestamptz not null default now()
);

create index if not exists products_category_idx on public.products (category);
create index if not exists products_sort_idx on public.products (sort);

alter table public.products enable row level security;

-- Anyone (anon) may read the catalog.
drop policy if exists "public read products" on public.products;
create policy "public read products"
  on public.products for select
  to anon, authenticated
  using (true);
