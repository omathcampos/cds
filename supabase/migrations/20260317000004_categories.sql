create table if not exists categories (
  id    uuid primary key default gen_random_uuid(),
  nome  text not null unique,
  ordem integer default 0
);
alter table categories enable row level security;
create policy "public read categories" on categories for select using (true);
create policy "auth write categories" on categories for all to authenticated using (true) with check (true);
insert into categories (nome, ordem) values
  ('Nécessaires',1),('Kits & Conjuntos',2),('Chaveiros',3),
  ('Porta Batom',4),('Agendas',5),('Especial',6)
on conflict (nome) do nothing;
