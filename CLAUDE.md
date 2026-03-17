# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o projeto

Landing page de captação para **CDS - Criativos da Stephannie** — negócio de presentes e brindes personalizados (nécessaires, bolsinhas, agendas, canetas, chaveiros em couro/sintético).

Instagram da marca: https://www.instagram.com/criativosdastephannie/

## Stack

Igual ao projeto SDTV (`C:\Users\mathe\Projetos\sdtv`):
- **Vite** como build tool
- **Tailwind CSS v4** com plugin `@tailwindcss/vite`
- **Vanilla JS modular** — cada seção é uma função em `src/sections/` que retorna HTML string
- Configurações centralizadas em `config.js`

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # servir build localmente
```

## Identidade visual

| Token | Valor |
|-------|-------|
| Fundo principal | `#1C1409` (marrom quase preto) |
| Dourado (brand) | `#C9A460` |
| Nude/bege | `#F5ECD7` |
| Marrom médio | `#6B3F2A` |
| Branco off | `#FAF8F4` |

**Tipografia:** Playfair Display (títulos — serif elegante) + Inter (corpo)

## Seções da página

1. **Navbar** — logo + links + CTA "Pedir orçamento" dourado
2. **Hero** — frase impactante + foto produto + botão WhatsApp
3. **Para quem é** — dois cards: Empresas (brindes corporativos) e Pessoas (presentear)
4. **Produtos** — grid com fotos grandes dos produtos
5. **Como funciona** — 3 passos: Escolhe → Personaliza → Recebe
6. **Quem é a Stephannie** — humaniza a marca
7. **CTA final** — "Seu presente começa aqui" + WhatsApp grande
8. **Footer** — Instagram, links

## Diferenças em relação ao SDTV

- Paleta **quente** (dourado, marrom, nude) — não fria
- Tipografia **serif** nos títulos para transmitir luxo
- Copy **emocional** (presentear, encantar, fidelizar) — não técnica
- Seção B2B e B2C separadas (dois públicos distintos)
- Muito mais peso visual nos produtos (fotos grandes)
