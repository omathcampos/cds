const WA_NUMBER = '5513991348559'

function formatPrice(value) {
  if (value == null) return null
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function imgOrPlaceholder(product) {
  if (product.image_url) {
    return `<img
      src="${product.image_url}"
      alt="${product.nome}"
      loading="lazy"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />`
  }
  return `<div class="w-full h-full bg-cds-dark/60 flex items-center justify-center">
    <span class="font-serif text-cds-gold/30 text-3xl">CDS</span>
  </div>`
}

// Landing page grid (sem preço)
export function renderProductGrid(products) {
  if (!products || products.length === 0) return renderSkeletons(6)

  return products.map((p, i) => `
    <div class="reveal ${i % 3 === 1 ? 'delay-200' : i % 3 === 2 ? 'delay-400' : ''} img-overlay rounded-xl overflow-hidden group cursor-pointer card-hover
                ${p.tall ? 'row-span-2' : ''}"
         style="${p.tall ? 'min-height: 420px;' : 'min-height: 200px;'}">
      <div class="relative w-full h-full" style="height: ${p.tall ? '420px' : '210px'};">
        ${imgOrPlaceholder(p)}
        <div class="absolute inset-0 bg-gradient-to-t from-cds-dark/90 via-cds-dark/20 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          ${p.tag ? `<span class="product-tag mb-2 inline-block text-[10px]">${p.tag}</span>` : ''}
          <h3 class="font-serif text-base font-semibold text-cds-white leading-tight">${p.nome}</h3>
          <p class="text-cds-nude/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">${p.descricao || ''}</p>
        </div>
        <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-cds-gold/0 group-hover:bg-cds-gold/20 border border-cds-gold/0 group-hover:border-cds-gold/50 flex items-center justify-center transition-all duration-300">
          <svg width="14" height="14" fill="none" stroke="currentColor" class="text-cds-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  `).join('')
}

// Catalog page card (com preço, clicável para modal)
export function renderCatalogCard(product) {
  const precoPor = formatPrice(product.preco_por)
  const precoDe = formatPrice(product.preco_de)

  return `
    <div class="img-overlay rounded-xl overflow-hidden group cursor-pointer card-hover bg-cds-dark/40 border border-cds-gold/10 hover:border-cds-gold/30 transition-colors duration-300 flex flex-col"
         data-product-id="${product.id}"
         data-open-modal>
      <div class="relative overflow-hidden" style="aspect-ratio:4/3;">
        ${imgOrPlaceholder(product)}
        <div class="absolute inset-0 bg-gradient-to-t from-cds-dark/80 via-transparent to-transparent"></div>
        ${product.tag ? `<span class="product-tag absolute top-3 left-3 text-[10px]">${product.tag}</span>` : ''}
      </div>
      <div class="p-4 flex flex-col flex-1">
        <h3 class="font-serif text-base font-semibold text-cds-white leading-tight mb-1">${product.nome}</h3>
        ${product.descricao ? `<p class="text-cds-nude/50 text-xs mb-3 leading-relaxed line-clamp-2">${product.descricao}</p>` : ''}
        <div class="flex items-end justify-between mt-auto">
          <div>
            ${precoDe ? `<span class="text-cds-nude/40 text-xs line-through block">${precoDe}</span>` : ''}
            ${precoPor ? `<span class="text-cds-gold font-semibold text-base">${precoPor}</span>` : ''}
            ${product.preco_min_lote ? `<span class="text-cds-nude/40 text-[10px] block mt-0.5">${product.preco_min_lote}</span>` : ''}
          </div>
          <span class="text-cds-gold/60 text-xs group-hover:text-cds-gold transition-colors">Ver mais →</span>
        </div>
      </div>
    </div>
  `
}

export function renderCatalogGrid(products) {
  if (!products || products.length === 0) {
    return `<div class="col-span-full text-center py-20 text-cds-nude/40">Nenhum produto encontrado.</div>`
  }
  return products.map(p => renderCatalogCard(p)).join('')
}

export function renderSkeletons(n = 6) {
  return Array.from({ length: n }, (_, i) => `
    <div class="rounded-xl overflow-hidden bg-cds-dark/40 border border-cds-gold/5 animate-pulse ${i % 3 === 0 ? 'row-span-2' : ''}"
         style="height: ${i % 3 === 0 ? '420px' : '210px'};">
      <div class="w-full h-full bg-cds-gold/5"></div>
    </div>
  `).join('')
}

export function renderFilters(categories, activeCategory = 'Todos', activePublico = 'Todos', count = 0) {
  const cats = ['Todos', ...categories]
  const publicos = ['Todos', 'B2C', 'B2B']

  return `
    <!-- Linha 1: dropdown + pills | search (wraps em telas estreitas) -->
    <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
      <!-- Grupo esquerdo: dropdown + pills -->
      <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap; flex:0 1 auto;">
        <div style="position:relative; flex-shrink:0;">
          <select id="filter-category-select" class="catalog-select ${activeCategory !== 'Todos' ? 'active' : ''}">
            ${cats.map(c => `<option value="${c}" ${c === activeCategory ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
          <svg style="pointer-events:none; position:absolute; right:0.625rem; top:50%; transform:translateY(-50%); color:rgba(201,164,96,0.5);"
               width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
        <div id="filter-publico" style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          ${publicos.map(p => `
            <button class="catalog-pill ${p === activePublico ? 'active' : ''}"
                    data-filter-publico="${p}">
              ${p === 'B2C' ? 'Presente pessoal' : p === 'B2B' ? 'Corporativo' : 'Todos'}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Search: cresce para preencher espaço restante, mín 160px -->
      <div style="position:relative; flex:1 1 160px; min-width:0; max-width:20rem;">
        <input type="text" id="catalog-search" placeholder="Buscar produto..."
               class="admin-input" style="width:100%; padding-left:2rem; font-size:0.75rem; padding-top:0.375rem; padding-bottom:0.375rem;" />
        <svg style="position:absolute; left:0.625rem; top:50%; transform:translateY(-50%); color:rgba(244,241,237,0.3);"
             width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </div>
    </div>

    <!-- Linha 2: contador sutil -->
    <div style="display:flex; justify-content:flex-end; margin-top:0.375rem;">
      <span id="catalog-count" style="color:rgba(244,241,237,0.25); font-size:0.7rem; white-space:nowrap;">
        ${count > 0 ? `${count} produto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}` : ''}
      </span>
    </div>
  `
}

export function renderPagination(total, page, size) {
  const totalPages = Math.ceil(total / size)
  if (totalPages <= 1) return ''

  const sizes = [12, 24, 48]
  const prev = page > 1
  const next = page < totalPages

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1).map(n => `
    <button data-page="${n}" style="
      width:2rem; height:2rem; border-radius:9999px; font-size:0.75rem; font-weight:500;
      border:1px solid ${n === page ? 'rgba(201,164,96,0.5)' : 'rgba(201,164,96,0.12)'};
      background:${n === page ? 'rgba(201,164,96,0.12)' : 'transparent'};
      color:${n === page ? '#C9A460' : 'rgba(244,241,237,0.4)'};
      cursor:pointer; transition:all 0.2s;">
      ${n}
    </button>
  `).join('')

  return `
    <div style="display:flex; align-items:center; justify-content:center; gap:0.5rem; padding:2rem 0 1rem; flex-wrap:wrap;">
      <button data-page="${page - 1}" ${!prev ? 'disabled' : ''} style="
        padding:0.375rem 0.75rem; border-radius:9999px; font-size:0.75rem;
        border:1px solid rgba(201,164,96,0.12); color:${prev ? 'rgba(244,241,237,0.5)' : 'rgba(244,241,237,0.15)'};
        background:transparent; cursor:${prev ? 'pointer' : 'default'}; transition:all 0.2s;">← Anterior</button>

      ${pageButtons}

      <button data-page="${page + 1}" ${!next ? 'disabled' : ''} style="
        padding:0.375rem 0.75rem; border-radius:9999px; font-size:0.75rem;
        border:1px solid rgba(201,164,96,0.12); color:${next ? 'rgba(244,241,237,0.5)' : 'rgba(244,241,237,0.15)'};
        background:transparent; cursor:${next ? 'pointer' : 'default'}; transition:all 0.2s;">Próxima →</button>

      <div style="display:flex; align-items:center; gap:0.375rem; margin-left:1rem;">
        <span style="font-size:0.7rem; color:rgba(244,241,237,0.3);">Mostrar:</span>
        ${sizes.map(s => `
          <button data-page-size="${s}" style="
            padding:0.25rem 0.625rem; border-radius:9999px; font-size:0.7rem;
            border:1px solid ${s === size ? 'rgba(201,164,96,0.4)' : 'rgba(201,164,96,0.1)'};
            background:${s === size ? 'rgba(201,164,96,0.1)' : 'transparent'};
            color:${s === size ? '#C9A460' : 'rgba(244,241,237,0.35)'};
            cursor:pointer; transition:all 0.2s;">${s}</button>
        `).join('')}
      </div>
    </div>
  `
}

export function renderModal(product) {
  const precoPor = formatPrice(product.preco_por)
  const precoDe = formatPrice(product.preco_de)
  const waMsg = encodeURIComponent(`Olá! Tenho interesse no produto: ${product.nome}. Pode me dar mais informações?`)
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMsg}`
  const images = product.images?.length ? product.images : (product.image_url ? [product.image_url] : [])

  return `
    <div id="product-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4"
         role="dialog" aria-modal="true" aria-label="${product.nome}">
      <div class="absolute inset-0 bg-cds-dark/90 backdrop-blur-sm" id="modal-backdrop"></div>
      <div class="relative bg-cds-dark border border-cds-gold/20 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <!-- Fechar -->
        <button id="modal-close" class="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-cds-dark/80 border border-cds-gold/20 flex items-center justify-center text-cds-nude/60 hover:text-cds-gold hover:border-cds-gold/50 transition-colors"
                aria-label="Fechar">✕</button>

        <!-- Imagem principal -->
        <div class="relative rounded-t-2xl overflow-hidden bg-cds-brown/20" style="max-height:360px;">
          ${images.length
            ? `<img id="modal-main-img" src="${images[0]}" alt="${product.nome}" class="w-full object-contain" style="max-height:360px;" />`
            : `<div class="flex items-center justify-center" style="height:200px;"><span class="font-serif text-cds-gold/30 text-5xl">CDS</span></div>`
          }
          ${product.tag ? `<span class="product-tag absolute top-4 left-4 text-xs">${product.tag}</span>` : ''}
          ${images.length > 1 ? `
            <button id="modal-prev" class="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cds-dark/70 border border-cds-gold/20 flex items-center justify-center text-cds-nude/70 hover:text-cds-gold hover:border-cds-gold/50 transition-all backdrop-blur-sm">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button id="modal-next" class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cds-dark/70 border border-cds-gold/20 flex items-center justify-center text-cds-nude/70 hover:text-cds-gold hover:border-cds-gold/50 transition-all backdrop-blur-sm">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          ` : ''}
        </div>

        <!-- Thumbnails (só se tiver mais de 1 imagem) -->
        ${images.length > 1 ? `
        <div class="flex gap-2 px-4 py-3 overflow-x-auto">
          ${images.map((url, i) => `
            <img src="${url}" data-thumb-idx="${i}"
                 class="w-14 h-14 object-cover rounded-lg flex-shrink-0 cursor-pointer transition-all
                        ${i === 0 ? 'border-2 border-cds-gold' : 'border-2 border-transparent hover:border-cds-gold/50'}" />
          `).join('')}
        </div>
        ` : ''}

        <!-- Conteúdo -->
        <div class="p-6">
          <h2 class="font-serif text-2xl font-bold text-cds-white mb-2">${product.nome}</h2>
          ${product.descricao ? `<p class="text-cds-nude/60 text-sm leading-relaxed mb-5">${product.descricao}</p>` : ''}

          <!-- Preço -->
          <div class="bg-cds-dark/40 border border-cds-gold/10 rounded-xl p-4 mb-5">
            ${precoDe ? `<span class="text-cds-nude/40 text-sm line-through block mb-0.5">De ${precoDe}</span>` : ''}
            ${precoPor ? `<span class="text-cds-gold font-bold text-2xl">Por ${precoPor}</span>` : ''}
            ${product.preco_min_lote ? `<p class="text-cds-nude/50 text-xs mt-2">${product.preco_min_lote}</p>` : ''}
          </div>

          <!-- CTA WhatsApp -->
          <a href="${waLink}" target="_blank" rel="noopener"
             class="btn-gold w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold text-sm">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir orçamento no WhatsApp
          </a>
        </div>
      </div>
    </div>
  `
}
