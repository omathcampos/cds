create table if not exists products (
  id            uuid primary key default gen_random_uuid(),
  nome          text not null,
  descricao     text,
  categoria     text not null,
  preco_de      numeric(10,2),
  preco_por     numeric(10,2) not null,
  preco_min_lote text,
  tag           text,
  destaque      boolean default false,
  ativo         boolean default true,
  tall          boolean default false,
  image_url     text,
  publico       text default 'B2C,B2B',
  ordem         integer default 0,
  created_at    timestamptz default now()
);

alter table products enable row level security;

create policy "public read"
  on products for select
  using (true);

create policy "auth write"
  on products for all
  using (auth.role() = 'authenticated');

insert into products (nome, descricao, categoria, preco_por, preco_de, tag, destaque, tall, publico, ordem) values
  ('Nécessaire Personalizada', 'Com frase, nome ou logo gravados', 'Nécessaires', 79.90, 89.90, 'Mais pedida', true, true, 'B2C,B2B', 1),
  ('Kit Capa A5 + Porta Batom', 'Conjunto exclusivo em couro sintético', 'Kits & Conjuntos', 119.90, null, null, true, false, 'B2C,B2B', 2),
  ('Porta Batom Individual', 'Elegante e personalizado com a sua marca', 'Porta Batom', 39.90, null, 'Corporativo', true, false, 'B2B', 3),
  ('Kits & Conjuntos em Couro', 'Curados com detalhes dourados únicos', 'Kits & Conjuntos', 159.90, 189.90, 'Premium', true, true, 'B2C,B2B', 4),
  ('Chaveiros Personalizados', 'Logo em baixo relevo, ideal para empresas', 'Chaveiros', 29.90, null, null, true, false, 'B2B', 5),
  ('Kits para Eventos & Datas', 'Perfeito para presentear em grupo', 'Especial', 199.90, null, 'Especial', true, false, 'B2C,B2B', 6);
