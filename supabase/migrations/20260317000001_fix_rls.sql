-- Remove a policy antiga
drop policy if exists "auth write" on products;

-- Recria separada por operação com WITH CHECK correto
create policy "auth insert"
  on products for insert
  with check (auth.uid() is not null);

create policy "auth update"
  on products for update
  using (auth.uid() is not null)
  with check (auth.uid() is not null);

create policy "auth delete"
  on products for delete
  using (auth.uid() is not null);
