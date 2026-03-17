export function navbar() {
  return `
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-full border border-cds-gold/40 flex items-center justify-center group-hover:border-cds-gold transition-colors duration-300">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#C9A460" stroke-width="1.5"/>
              <text x="20" y="26" text-anchor="middle" font-family="Playfair Display, serif" font-size="14" fill="#C9A460" font-weight="700">C</text>
            </svg>
          </div>
          <div class="leading-tight">
            <span class="font-serif text-lg font-semibold text-cds-white tracking-wide">CDS</span>
            <span class="block text-[10px] text-cds-gold/70 tracking-[0.2em] uppercase">Criativos da Stephannie</span>
          </div>
        </a>

        <!-- Nav links desktop -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#produtos" class="text-sm text-cds-nude/70 hover:text-cds-gold transition-colors duration-300 tracking-wide">Produtos</a>
          <a href="#corporativo" class="text-sm text-cds-nude/70 hover:text-cds-gold transition-colors duration-300 tracking-wide">Corporativo</a>
          <a href="#como-funciona" class="text-sm text-cds-nude/70 hover:text-cds-gold transition-colors duration-300 tracking-wide">Como funciona</a>
          <a href="#sobre" class="text-sm text-cds-nude/70 hover:text-cds-gold transition-colors duration-300 tracking-wide">A Stephannie</a>
        </div>

        <!-- CTA desktop -->
        <div class="hidden md:flex items-center gap-4">
          <a href="https://instagram.com/criativosdastephannie" target="_blank" rel="noopener"
             class="text-cds-nude/60 hover:text-cds-gold transition-colors duration-300">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#contato" class="btn-gold px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide">
            Pedir orçamento
          </a>
        </div>

        <!-- Hamburger mobile -->
        <button id="menu-btn" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span id="bar1" class="w-6 h-0.5 bg-cds-gold transition-all duration-300 origin-center"></span>
          <span id="bar2" class="w-6 h-0.5 bg-cds-gold transition-all duration-300"></span>
          <span id="bar3" class="w-6 h-0.5 bg-cds-gold transition-all duration-300 origin-center"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-cds-dark/95 backdrop-blur-xl border-t border-cds-gold/10">
      <div class="px-6 py-6 flex flex-col gap-5">
        <a href="#produtos"      class="text-cds-nude/80 hover:text-cds-gold transition-colors text-sm tracking-wide">Produtos</a>
        <a href="#corporativo"   class="text-cds-nude/80 hover:text-cds-gold transition-colors text-sm tracking-wide">Corporativo</a>
        <a href="#como-funciona" class="text-cds-nude/80 hover:text-cds-gold transition-colors text-sm tracking-wide">Como funciona</a>
        <a href="#sobre"         class="text-cds-nude/80 hover:text-cds-gold transition-colors text-sm tracking-wide">A Stephannie</a>
        <hr class="fancy-hr" />
        <a href="#contato" class="btn-gold text-center px-5 py-3 rounded-full text-sm font-semibold">Pedir orçamento</a>
      </div>
    </div>
  </nav>
  `
}
