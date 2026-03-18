// Imagens do Instagram CDS
const IMG_HERO     = '/fundo.webp'
const IMG_HERO2    = '/folder-capa.jpeg'
const IMG_HERO3    = '/dia-da-mulher.jpg'

export function hero() {
  return `
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-cds-dark">

    <!-- Fundo com gradiente e imagem -->
    <div class="absolute inset-0 z-0">
      <img
        src="${IMG_HERO}"
        alt="Nécessaires personalizadas CDS"
        class="w-full h-full object-cover object-center opacity-30"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-cds-dark via-cds-dark/80 to-cds-dark/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-cds-dark via-transparent to-cds-dark/40"></div>
    </div>

    <!-- Partículas douradas decorativas -->
    <div class="absolute top-1/4 right-1/4 w-1 h-1 rounded-full bg-cds-gold opacity-60 animate-float delay-100"></div>
    <div class="absolute top-1/3 right-1/3 w-0.5 h-0.5 rounded-full bg-cds-gold2 opacity-40 animate-float delay-400"></div>
    <div class="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 rounded-full bg-cds-gold opacity-30 animate-float delay-600"></div>

    <!-- Círculo decorativo -->
    <div class="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
      <div class="w-[480px] h-[480px] rounded-full border border-cds-gold/10 flex items-center justify-center animate-spin-slow">
        <div class="w-[380px] h-[380px] rounded-full border border-cds-gold/8"></div>
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
      <div class="max-w-2xl">

        <!-- Tag -->
        <div class="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-up">
          <span class="w-8 h-px bg-cds-gold"></span>
          <span class="product-tag">Presentes & Brindes Personalizados</span>
        </div>

        <!-- Headline -->
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up delay-200">
          O presente certo<br />
          <em class="gold-text not-italic">faz seu cliente</em><br />
          <span class="text-cds-white/90">lembrar de você</span><br />
          <span class="text-cds-white/90">todos os dias.</span>
        </h1>

        <!-- Subtítulo -->
        <p class="text-cds-nude/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up delay-400">
          Brindes e presentes em couro personalizados — para empresas que querem
          encantar e pessoas que querem surpreender.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-500">
          <a
            href="https://wa.me/5513991348559?text=Olá%20Stephannie!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20brindes%20personalizados."
            target="_blank" rel="noopener"
            class="btn-gold inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold tracking-wide"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir orçamento agora
          </a>
          <a href="#produtos" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-cds-gold border border-cds-gold/40 hover:border-cds-gold hover:bg-cds-gold/5 transition-all duration-300">
            Ver produtos
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- Stats -->
        <div class="mt-16 flex gap-6 md:gap-10 opacity-0 animate-fade-up delay-600">
          <div>
            <div class="font-serif text-2xl md:text-3xl font-bold text-cds-gold">388+</div>
            <div class="text-cds-nude/50 text-[10px] md:text-xs tracking-widest uppercase mt-1">Criações</div>
          </div>
          <div class="w-px bg-cds-gold/20"></div>
          <div>
            <div class="font-serif text-2xl md:text-3xl font-bold text-cds-gold">100%</div>
            <div class="text-cds-nude/50 text-[10px] md:text-xs tracking-widest uppercase mt-1">Personalizado</div>
          </div>
          <div class="w-px bg-cds-gold/20"></div>
          <div>
            <div class="font-serif text-2xl md:text-3xl font-bold text-cds-gold">Santos</div>
            <div class="text-cds-nude/50 text-[10px] md:text-xs tracking-widest uppercase mt-1">Santos, SP</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-60 animate-float">
      <span class="text-xs text-cds-nude/50 tracking-widest uppercase">Explorar</span>
      <div class="w-px h-10 bg-gradient-to-b from-cds-gold/60 to-transparent"></div>
    </div>

    <!-- Grid de imagens flutuantes (desktop) -->
    <div class="absolute right-0 top-0 bottom-0 w-2/5 hidden xl:flex flex-col gap-0 overflow-hidden pointer-events-none">
      <div class="flex-1 relative">
        <img src="${IMG_HERO2}" alt="" class="w-full h-full object-cover opacity-50 scale-105" />
        <div class="absolute inset-0 bg-gradient-to-l from-transparent to-cds-dark/70"></div>
      </div>
      <div class="flex-1 relative">
        <img src="${IMG_HERO3}" alt="" class="w-full h-full object-cover opacity-40 scale-105" />
        <div class="absolute inset-0 bg-gradient-to-l from-transparent to-cds-dark/70"></div>
      </div>
    </div>

  </section>
  `
}
