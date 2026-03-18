-- Remove todas as policies de escrita anteriores
drop policy if exists "auth write" on products;
drop policy if exists "auth insert" on products;
drop policy if exists "auth update" on products;
drop policy if exists "auth delete" on products;

-- Usa `to authenticated` que é mais confiável que checar auth.uid() manualmente
create policy "authenticated can write"
  on products
  as permissive
  for all
  to authenticated
  using (true)
  with check (true);
