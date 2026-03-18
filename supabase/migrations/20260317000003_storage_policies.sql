-- Policies para o bucket product-images no storage
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = true;

-- Leitura pública
create policy "public read storage"
  on storage.objects for select
  using (bucket_id = 'product-images');

-- Upload/update só autenticado
create policy "authenticated upload storage"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'product-images');

create policy "authenticated update storage"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'product-images');

create policy "authenticated delete storage"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'product-images');
