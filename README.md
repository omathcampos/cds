# CDS — Criativos da Stephannie

Landing page de captação para a **CDS - Criativos da Stephannie**, negócio de presentes e brindes personalizados em couro (nécessaires, bolsinhas, agendas, canetas, chaveiros).

## Stack

- **Vite** — build tool
- **Tailwind CSS v4** com plugin `@tailwindcss/vite`
- **Vanilla JS modular** — cada seção é uma função em `src/sections/` que retorna HTML string
- **Supabase** — banco de dados e storage para o catálogo dinâmico

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm run preview    # servir build localmente
```

## Estrutura

```
├── index.html              # Landing page principal
├── catalog.html            # Catálogo público de produtos
├── admin.html              # Painel administrativo (protegido por login)
├── public/                 # Assets estáticos (imagens, logo, favicon)
└── src/
    ├── style.css           # Estilos globais e tokens de cor (Tailwind @theme)
    ├── main.js             # Entry point da landing page
    ├── sections/           # Seções da landing page (hero, sobre, footer…)
    ├── catalog/            # Lógica do catálogo público
    └── admin/              # Lógica do painel administrativo
```

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Landing page principal |
| `/catalog` | Catálogo com filtros, busca e paginação |
| `/admin` | Painel para gerenciar produtos e categorias |

## Identidade visual

| Token | Valor |
|---|---|
| Fundo principal | `#1a2b49` (navy) |
| Dourado (brand) | `#C9A460` |
| Nude/creme | `#f4f1ed` |
| Caramelo | `#a56b42` |
| Branco off | `#FAF8F4` |

**Tipografia:** Playfair Display (títulos) + Inter (corpo)

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```env
VITE_SUPABASE_URL=sua_url_aqui
VITE_SUPABASE_ANON_KEY=sua_chave_aqui
```

## Supabase

O arquivo `supabase-setup.sql` contém o schema completo para criação das tabelas e políticas RLS.
