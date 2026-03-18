import { renderProductGrid, renderSkeletons } from '../catalog/catalog-render.js'

export function produtos(items = null) {
  const gridContent = items ? renderProductGrid(items) : renderSkeletons(6)

  return `
  <section id="produtos" class="relative py-28 bg-cds-dark overflow-hidden">

    <!-- Decoração -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cds-gold/20 to-transparent pointer-events-none"></div>
    <div class="absolute -top-80 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cds-gold/3 blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 reveal">
        <div>
          <span class="product-tag mb-4 inline-block">Nossos Produtos</span>
          <h2 class="font-serif text-4xl md:text-5xl font-bold text-cds-white">
            Cada detalhe <em class="gold-text">pensado</em><br />com amor
          </h2>
        </div>
        <p class="text-cds-nude/60 max-w-xs leading-relaxed text-sm">
          Personalizados em couro e sintético, com acabamento impecável e embalagem que valoriza cada presente.
        </p>
      </div>

      <!-- Grid editorial masonry-like -->
      <div id="produtos-grid" class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        ${gridContent}
      </div>

      <!-- CTA abaixo do grid -->
      <div class="text-center mt-14 reveal">
        <p class="text-cds-nude/50 text-sm mb-5">Não encontrou o que procura? Temos muito mais!</p>
        <a href="/catalog.html"
           class="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm">
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          Ver catálogo completo
        </a>
      </div>

    </div>
  </section>
  `
}
