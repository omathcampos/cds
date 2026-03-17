(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function d(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=d(a);fetch(a.href,s)}})();function v(){return`
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
  `}const u="https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/649664834_17927415822214571_4492788442871780580_n.webp?_nc_cat=101&ig_cache_key=Mzg0OTA0MTc0MjI5MzQ4Njk2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTcyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=9axmh51zR0IQ7kNvwEzd_R2&_nc_oc=Adlgr2a4_U98KLDc71su1GODY7MGzw6Z_DbCWgUY13pFmqg93RCKcEqK2EYknEvIaqWogkhe1LWfx1EbgqCYeBW1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwJvxBqSYthC8kgfD6_-gatWERnPP85MeGlICacBnb1Pw&oe=69BF58A7",h="https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/583738443_17915092665214571_8889259502387572044_n.webp?_nc_cat=110&ig_cache_key=Mzc2ODg2MDg5OTEwNTk3NzIxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=gdY8Mw74jZ4Q7kNvwGQkFOi&_nc_oc=AdmzU7qSv5MxS7XcnVNaMgJgKTf6e_JLIc6OCLaTRN3FQXWiNfYq99EoVTehpo5PKU8nRbI7SCOK2dHdj5URwzJO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_Afw1KlaDIesUl-nWU9vbfk4q8eoQI3SrI7g_HOy3QYSwUA&oe=69BF4B0A",f="https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/645875296_17926691655214571_8870298857249913960_n.webp?_nc_cat=101&ig_cache_key=Mzg0NTM1NDEwMDI5Mjk2NzgwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc4OC5zZHIuQzMifQ%3D%3D&_nc_ohc=wTsEUP_HhgEQ7kNvwH3xq4x&_nc_oc=AdlHagCC9bREq5rV5ZsytdZNoKzd6rQO-pIREz58_9aShTTxZyW8Wj4SLPjEHwpE5RKkUUeeFOMPgyGhizGBOgoj&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_Afz6PIc_0v4lsoF838KN6qy_YZ1CDv4JQJE45JJDhifI7w&oe=69BF4B06";function x(){return`
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-cds-dark">

    <!-- Fundo com gradiente e imagem -->
    <div class="absolute inset-0 z-0">
      <img
        src="${u}"
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
        <div class="mt-16 flex gap-10 opacity-0 animate-fade-up delay-600">
          <div>
            <div class="font-serif text-3xl font-bold text-cds-gold">388+</div>
            <div class="text-cds-nude/50 text-xs tracking-widest uppercase mt-1">Criações</div>
          </div>
          <div class="w-px bg-cds-gold/20"></div>
          <div>
            <div class="font-serif text-3xl font-bold text-cds-gold">100%</div>
            <div class="text-cds-nude/50 text-xs tracking-widest uppercase mt-1">Personalizado</div>
          </div>
          <div class="w-px bg-cds-gold/20"></div>
          <div>
            <div class="font-serif text-3xl font-bold text-cds-gold">Santos</div>
            <div class="text-cds-nude/50 text-xs tracking-widest uppercase mt-1">Santos, SP</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-float">
      <span class="text-xs text-cds-nude/50 tracking-widest uppercase">Explorar</span>
      <div class="w-px h-10 bg-gradient-to-b from-cds-gold/60 to-transparent"></div>
    </div>

    <!-- Grid de imagens flutuantes (desktop) -->
    <div class="absolute right-0 top-0 bottom-0 w-2/5 hidden xl:flex flex-col gap-0 overflow-hidden pointer-events-none">
      <div class="flex-1 relative">
        <img src="${h}" alt="" class="w-full h-full object-cover opacity-50 scale-105" />
        <div class="absolute inset-0 bg-gradient-to-l from-transparent to-cds-dark/70"></div>
      </div>
      <div class="flex-1 relative">
        <img src="${f}" alt="" class="w-full h-full object-cover opacity-40 scale-105" />
        <div class="absolute inset-0 bg-gradient-to-l from-transparent to-cds-dark/70"></div>
      </div>
    </div>

  </section>
  `}function b(){return`
  <section id="corporativo" class="relative py-28 bg-cds-brown overflow-hidden">

    <!-- Decoração de fundo -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cds-gold/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cds-gold/20 to-transparent"></div>
      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cds-gold/3 blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cds-gold/3 blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="product-tag mb-4 inline-block">Para quem é</span>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-cds-white mt-4 mb-4">
          Cada presente conta <em class="gold-text">uma história</em>
        </h2>
        <p class="text-cds-nude/60 max-w-xl mx-auto text-lg">
          Seja para encantar seus clientes ou surpreender alguém especial — temos a solução perfeita.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">

        <!-- Card Corporativo -->
        <div class="reveal reveal-left group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
             style="background: linear-gradient(135deg, #1C2B45 0%, #0F1A2E 100%);">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style="background: linear-gradient(135deg, rgba(201,164,96,0.08) 0%, transparent 100%);">
          </div>
          <div class="relative p-8 lg:p-10">
            <!-- Ícone -->
            <div class="w-14 h-14 rounded-xl border border-cds-gold/30 flex items-center justify-center mb-6 group-hover:border-cds-gold/60 transition-colors duration-300">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="product-tag mb-3 inline-block">Empresas & Corporativo</div>
            <h3 class="font-serif text-2xl lg:text-3xl font-bold text-cds-white mb-4">
              Fidelize seus clientes com brindes que impressionam
            </h3>
            <p class="text-cds-nude/60 leading-relaxed mb-6">
              Brindes personalizados com a sua marca — nécessaires, bolsinhas, agendas, chaveiros e muito mais.
              Entregas em quantidade para eventos, datas especiais e campanhas de fidelização.
            </p>
            <ul class="space-y-2 mb-8">
              ${["Personalização com logo da sua empresa","Pedidos a partir de 10 unidades","Embalagem premium inclusa","Entrega em todo o Brasil"].map(e=>`
              <li class="flex items-center gap-3 text-sm text-cds-nude/70">
                <svg width="14" height="14" viewBox="0 0 20 20" class="text-cds-gold flex-shrink-0">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                </svg>
                ${e}
              </li>`).join("")}
            </ul>
            <a href="https://wa.me/5513991348559?text=Olá!%20Tenho%20interesse%20em%20brindes%20corporativos%20personalizados." target="_blank" rel="noopener"
               class="inline-flex items-center gap-2 text-cds-gold font-semibold text-sm group-hover:gap-4 transition-all duration-300">
              Solicitar proposta
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <!-- Badge -->
          <div class="absolute top-6 right-6 bg-cds-gold/10 border border-cds-gold/30 rounded-full px-3 py-1 text-xs text-cds-gold font-medium">
            B2B
          </div>
        </div>

        <!-- Card Presentes Pessoais -->
        <div class="reveal reveal-right group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
             style="background: linear-gradient(135deg, #2C1A0A 0%, #1A0C05 100%);">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style="background: linear-gradient(135deg, rgba(201,164,96,0.06) 0%, transparent 100%);">
          </div>
          <div class="relative p-8 lg:p-10">
            <!-- Ícone -->
            <div class="w-14 h-14 rounded-xl border border-cds-gold/30 flex items-center justify-center mb-6 group-hover:border-cds-gold/60 transition-colors duration-300">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
                <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="product-tag mb-3 inline-block">Presentes Especiais</div>
            <h3 class="font-serif text-2xl lg:text-3xl font-bold text-cds-white mb-4">
              Presenteie com algo único, feito com cuidado
            </h3>
            <p class="text-cds-nude/60 leading-relaxed mb-6">
              Para mães, amigas, namoradas, aniversários ou qualquer momento especial.
              Cada peça é criada com atenção aos detalhes para tornar o momento inesquecível.
            </p>
            <ul class="space-y-2 mb-8">
              ${["Personalização com nome ou frase especial","Cores e modelos à sua escolha","Embalagem presente valorizada","Encomenda unitária aceita"].map(e=>`
              <li class="flex items-center gap-3 text-sm text-cds-nude/70">
                <svg width="14" height="14" viewBox="0 0 20 20" class="text-cds-gold flex-shrink-0">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                </svg>
                ${e}
              </li>`).join("")}
            </ul>
            <a href="https://wa.me/5513991348559?text=Olá!%20Quero%20encomendar%20um%20presente%20personalizado." target="_blank" rel="noopener"
               class="inline-flex items-center gap-2 text-cds-gold font-semibold text-sm group-hover:gap-4 transition-all duration-300">
              Encomendar agora
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <!-- Badge -->
          <div class="absolute top-6 right-6 bg-cds-gold/10 border border-cds-gold/30 rounded-full px-3 py-1 text-xs text-cds-gold font-medium">
            Avulso
          </div>
        </div>

      </div>
    </div>
  </section>
  `}const _=[{img:"https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/649664834_17927415822214571_4492788442871780580_n.webp?_nc_cat=101&ig_cache_key=Mzg0OTA0MTc0MjI5MzQ4Njk2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTcyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=9axmh51zR0IQ7kNvwEzd_R2&_nc_oc=Adlgr2a4_U98KLDc71su1GODY7MGzw6Z_DbCWgUY13pFmqg93RCKcEqK2EYknEvIaqWogkhe1LWfx1EbgqCYeBW1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwJvxBqSYthC8kgfD6_-gatWERnPP85MeGlICacBnb1Pw&oe=69BF58A7",nome:"Nécessaire Personalizada",desc:"Com frase, nome ou logo gravados",tag:"Mais pedida",tall:!0},{img:"https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/649642980_17927555154214571_75920822374838297_n.webp?_nc_cat=100&ig_cache_key=Mzg0OTY5NTk3MTk5NTY0NDgwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTYyMi5zZHIuQzMifQ%3D%3D&_nc_ohc=ASklOlmFPmYQ7kNvwFLtM6S&_nc_oc=AdkdRtXHEy33W9TojeQMcVCX1-8-3V7szXWq7HDu0Kdmz5oXNBEaJ24iXmu5vLEnq4RX4VQcD-3pQQ11p-p5ygls&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwEodYxnW0UT99NCK5bq9GK3Gsphmsg1ntea0dXF5ghQQ&oe=69BF2BEA",nome:"Kit Capa A5 + Porta Batom",desc:"Conjunto exclusivo em couro sintético",tag:null,tall:!1},{img:"https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/645767791_17926768920214571_1069062933817453450_n.webp?_nc_cat=103&ig_cache_key=Mzg0NTc3ODQxMjI1MDQ1Nzg5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=jd5iFjQG8GUQ7kNvwEw4zkW&_nc_oc=AdmAs5WFiyYR6uKsmuWWyQDnINhznotHcLCbxy8Uhxa5Co4Dw-9gAohbJZjfmzywtGQH4PMWVLjbKVeMRmZIW7Hx&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_Afw5unV5OsuE1tZYlie5ArnEHw0IoJ72z_VVy6efRU1nsQ&oe=69BF3B59",nome:"Porta Batom Individual",desc:"Elegante e personalizado com a sua marca",tag:"Corporativo",tall:!1},{img:"https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/629783926_17924793108214571_5862895620951597707_n.webp?_nc_cat=101&ig_cache_key=MzgzMzkwNzU1MjE3NDU0NDA1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTgwMS5zZHIuQzMifQ%3D%3D&_nc_ohc=YUyAaR5a540Q7kNvwHCc6tM&_nc_oc=Adk_4TST4RIvEjYPvlv6uaI4ffaPNhVMiql3fqiQOnFfIy1L5YOI_ijNTKnP_JMmrYf7Le6kOxQSlB77bl1pejBc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfyGBA35sEZn40FtRUJ4EsJS9NqQkQzo97UWsIPgqK-99w&oe=69BF3F28",nome:"Kits & Conjuntos em Couro",desc:"Curados com detalhes dourados únicos",tag:"Premium",tall:!0},{img:"https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/629783515_17924842725214571_8314553456345514492_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzgzNDUzNjE4MzM4NTExNjg0NDE3OTI0ODQyNzE5MjE0NTcx.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=4hh4VG6DeoMQ7kNvwE88MxU&_nc_oc=AdlyRhNDuoQOW90O3rpU1PK8gBoPUsp4ZcGQyiGNFrAwGWvG6apUOvcS7DQ3teHvVMZPQ4GUIpln4pG4m9JIEMG9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwGUR_eDGGYYS_WxQ13eNw1N6MrOOJL8oBD1DtvwAcJEw&oe=69BF3F9E",nome:"Chaveiros Personalizados",desc:"Logo em baixo relevo, ideal para empresas",tag:null,tall:!1},{img:"https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/640065904_17925219363214571_1968720110538003024_n.webp?_nc_cat=108&ig_cache_key=MzgzNjY1MzA4MDIwNTY1OTc5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=gV866Z2QTpwQ7kNvwF1Vf76&_nc_oc=AdlA2yOWcd-Ytg26o_1efGIavky1BZArnk1z4r7iHKLCOFGPZwsVbXQk41tcgjNdgDpXm15ac4dvnlOw6HC1KOWQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfyXj-PLt4j8tny5lzvJtjreXQ2Am8Nz-xP7gceUBvOBsg&oe=69BF5F27",nome:"Kits para Eventos & Datas",desc:"Perfeito para presentear em grupo",tag:"Especial",tall:!1}];function w(){return`
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
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        ${_.map((e,t)=>`
        <div class="reveal ${t%3===1?"delay-200":t%3===2?"delay-400":""} img-overlay rounded-xl overflow-hidden group cursor-pointer card-hover
                    ${e.tall?"row-span-2":""}"
             style="${e.tall?"min-height: 420px;":"min-height: 200px;"}">
          <div class="relative w-full h-full" style="height: ${e.tall?"420px":"210px"};">
            <img
              src="${e.img}"
              alt="${e.nome}"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <!-- Overlay sempre visível no bottom -->
            <div class="absolute inset-0 bg-gradient-to-t from-cds-dark/90 via-cds-dark/20 to-transparent"></div>
            <!-- Conteúdo -->
            <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              ${e.tag?`<span class="product-tag mb-2 inline-block text-[10px]">${e.tag}</span>`:""}
              <h3 class="font-serif text-base font-semibold text-cds-white leading-tight">${e.nome}</h3>
              <p class="text-cds-nude/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">${e.desc}</p>
            </div>
            <!-- Hover icon -->
            <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-cds-gold/0 group-hover:bg-cds-gold/20 border border-cds-gold/0 group-hover:border-cds-gold/50 flex items-center justify-center transition-all duration-300">
              <svg width="14" height="14" fill="none" stroke="currentColor" class="text-cds-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
        `).join("")}
      </div>

      <!-- CTA abaixo do grid -->
      <div class="text-center mt-14 reveal">
        <p class="text-cds-nude/50 text-sm mb-5">Não encontrou o que procura? Temos muito mais!</p>
        <a href="https://wa.me/5513991348559?text=Olá!%20Gostaria%20de%20ver%20mais%20produtos%20e%20fazer%20um%20orçamento." target="_blank" rel="noopener"
           class="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Ver catálogo completo no WhatsApp
        </a>
      </div>

    </div>
  </section>
  `}const y=[{num:"01",icon:`<svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,titulo:"Fale com a Stephannie",desc:"Mande uma mensagem no WhatsApp contando o que você precisa — produto, quantidade, personalização e prazo."},{num:"02",icon:`<svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
      <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,titulo:"Escolha & Personalize",desc:"Defina cor, material, frase ou logo. A Stephannie cuida de cada detalhe para garantir que fique exatamente como você imaginou."},{num:"03",icon:`<svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
      <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,titulo:"Receba com carinho",desc:"Seu pedido chega embalado com cuidado, pronto para presentear. Entregamos em todo o Brasil."}];function z(){return`
  <section id="como-funciona" class="relative py-28 overflow-hidden" style="background: linear-gradient(180deg, #1E1008 0%, #100A03 100%);">

    <!-- Decoração -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cds-gold/20 to-transparent"></div>
      <div class="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-cds-gold/4 blur-3xl"></div>
      <div class="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full bg-cds-navy/40 blur-3xl"></div>
    </div>

    <!-- Linha conectora (desktop) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 hidden md:block pointer-events-none" style="width: 60%; height: 1px; background: linear-gradient(90deg, transparent, rgba(201,164,96,0.3), transparent); margin-top: 20px;"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-20 reveal">
        <span class="product-tag mb-4 inline-block">Como funciona</span>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-cds-white mt-4">
          Simples, rápido e <em class="gold-text">inesquecível</em>
        </h2>
        <p class="text-cds-nude/60 max-w-md mx-auto mt-4 text-base">
          Em apenas 3 passos, você cria um presente que vai marcar para sempre.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        ${y.map((e,t)=>`
        <div class="reveal ${t===1?"delay-200":t===2?"delay-400":""} group relative">
          <!-- Número grande decorativo -->
          <div class="absolute -top-4 -left-2 font-serif text-7xl font-bold text-cds-gold/5 select-none pointer-events-none">
            ${e.num}
          </div>

          <div class="relative">
            <!-- Ícone -->
            <div class="w-16 h-16 rounded-2xl border border-cds-gold/20 bg-cds-gold/5 flex items-center justify-center mb-6 group-hover:border-cds-gold/50 group-hover:bg-cds-gold/10 transition-all duration-400">
              ${e.icon}
            </div>

            <!-- Número visível -->
            <div class="flex items-center gap-3 mb-4">
              <span class="font-serif text-xs text-cds-gold/60 font-bold tracking-widest">${e.num}</span>
              <div class="flex-1 h-px bg-cds-gold/15"></div>
            </div>

            <h3 class="font-serif text-xl font-bold text-cds-white mb-3">${e.titulo}</h3>
            <p class="text-cds-nude/60 text-sm leading-relaxed">${e.desc}</p>
          </div>
        </div>
        `).join("")}
      </div>

      <!-- CTA central -->
      <div class="text-center mt-16 reveal">
        <a href="https://wa.me/5513991348559?text=Olá%20Stephannie!%20Quero%20começar%20meu%20pedido." target="_blank" rel="noopener"
           class="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-sm gold-pulse">
          Começar agora
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
  `}const k="https://instagram.fssz1-1.fna.fbcdn.net/v/t51.75761-15/491493303_17890939293214571_4710776233333835992_n.webp?_nc_cat=111&ig_cache_key=MzYwOTM2MTY2NjE2Njg2NjA4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=qM84CNowi6oQ7kNvwEc0Cyd&_nc_oc=AdndjBP83r9FjwSJt9XuKHK5fCf-1LOWzXT4F2M-ZUKLc0zs6cpGnDkAE1B9PL9QJ-iifoFo9pET1NZSU-d3Qmo7&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwOVKdcDR7f6FSFCUfkA74RhRLs27Hsj6GMrzMZtxbnPw&oe=69BF449D";function M(){return`
  <section id="sobre" class="relative py-28 bg-cds-dark overflow-hidden">

    <!-- Decoração -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cds-gold/20 to-transparent"></div>
      <div class="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-cds-gold/3 blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Imagem -->
        <div class="reveal reveal-left relative">
          <!-- Frame decorativo -->
          <div class="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-cds-gold/15 z-0"></div>
          <div class="relative z-10 rounded-2xl overflow-hidden img-overlay aspect-[4/5]">
            <img
              src="${k}"
              alt="Stephannie — Fundadora CDS"
              class="w-full h-full object-cover object-top"
            />
            <!-- Gradiente bottom -->
            <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cds-dark to-transparent"></div>
          </div>
          <!-- Badge flutuante -->
          <div class="absolute bottom-6 left-6 right-6 z-20">
            <div class="bg-cds-dark/80 backdrop-blur-sm border border-cds-gold/20 rounded-xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-cds-gold/15 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-cds-gold">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="text-cds-white font-semibold text-sm">Feito com amor</div>
                <div class="text-cds-nude/50 text-xs">Santos, SP — desde o primeiro pedido</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Texto -->
        <div class="reveal reveal-right">
          <span class="product-tag mb-6 inline-block">Quem é a Stephannie</span>

          <h2 class="font-serif text-4xl md:text-5xl font-bold text-cds-white mb-6 leading-tight">
            Por trás de cada<br />
            presente, existe<br />
            <em class="gold-text">uma história.</em>
          </h2>

          <div class="space-y-4 text-cds-nude/65 text-base leading-relaxed">
            <p>
              Sou mulher, mãe, esposa, empreendedora e fundadora de 2 empresas.
              Feita de fé, lágrimas, coragem e recomeços.
            </p>
            <p>
              A <strong class="text-cds-nude/80">CDS — Criativos da Stephannie</strong> nasceu do meu amor por
              criar coisas que encantam. Cada nécessaire, cada bolsinha, cada detalhe é pensado
              com o coração, porque eu sei o verdadeiro valor de ser lembrada.
            </p>
            <p>
              Acredito que um presente bonito, com o nome ou a mensagem certa, pode transformar
              um momento comum em algo inesquecível — tanto para pessoas quanto para empresas que
              querem deixar uma marca positiva nos seus clientes.
            </p>
          </div>

          <!-- Citação em destaque -->
          <blockquote class="mt-8 pl-5 border-l-2 border-cds-gold">
            <p class="font-serif text-xl italic text-cds-white/80 leading-relaxed">
              "Cada detalhe tem o cuidado de quem sabe o verdadeiro valor de ser lembrada."
            </p>
            <footer class="mt-3 text-cds-gold text-sm font-semibold">— Stephannie</footer>
          </blockquote>

          <!-- Links sociais -->
          <div class="mt-10 flex items-center gap-4">
            <a href="https://instagram.com/criativosdastephannie" target="_blank" rel="noopener"
               class="inline-flex items-center gap-2 text-sm text-cds-nude/60 hover:text-cds-gold transition-colors duration-300">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @criativosdastephannie
            </a>
            <span class="text-cds-nude/30">•</span>
            <a href="https://wa.me/5513991348559" target="_blank" rel="noopener"
               class="inline-flex items-center gap-2 text-sm text-cds-nude/60 hover:text-cds-gold transition-colors duration-300">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
  `}const C=[{texto:"Comprei para presentear minhas colaboradoras no Dia da Mulher. Ficaram absolutamente lindas! Cada detalhe foi perfeito, as meninas adoraram.",nome:"Alicia",empresa:"@petland.itarare",avatar:"🌸"},{texto:"Encomendei 80 chaveiros personalizados com o logo da minha clínica. Qualidade impecável, prazo cumprido e embalagem perfeita. Recomendo muito!",nome:"Dra. Carol",empresa:"@mauriciodothadvogada",avatar:"⚖️"},{texto:"A Stephannie transformou a ideia que eu tinha em algo ainda mais bonito do que eu imaginei. O cuidado com cada detalhe é incrível.",nome:"Paulinho",empresa:"Cliente avulso",avatar:"🎁"}];function E(){return`
  <section id="clientes" class="relative py-28 overflow-hidden" style="background: linear-gradient(180deg, #100A03 0%, #1A0E05 100%);">

    <!-- Faixa de logos / marcas parceiras (simulada) -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cds-gold/20 to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="product-tag mb-4 inline-block">Depoimentos</span>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-cds-white mt-4">
          Quem já presenteou,<br />
          <em class="gold-text">voltou para mais.</em>
        </h2>
      </div>

      <!-- Cards depoimentos -->
      <div class="grid md:grid-cols-3 gap-6">
        ${C.map((e,t)=>`
        <div class="reveal ${t===1?"delay-200":t===2?"delay-400":""} group relative rounded-2xl p-7 border border-cds-gold/10 bg-white/2 hover:border-cds-gold/30 hover:bg-cds-gold/3 transition-all duration-400 card-hover">
          <!-- Aspas decorativas -->
          <div class="absolute top-5 right-6 font-serif text-6xl text-cds-gold/10 leading-none select-none">"</div>

          <!-- Estrelas -->
          <div class="flex gap-1 mb-5">
            ${Array(5).fill(0).map(()=>`
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" class="text-cds-gold">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>`).join("")}
          </div>

          <p class="text-cds-nude/70 text-sm leading-relaxed mb-6 italic">
            "${e.texto}"
          </p>

          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-cds-gold/10 border border-cds-gold/20 flex items-center justify-center text-lg">
              ${e.avatar}
            </div>
            <div>
              <div class="text-cds-white font-semibold text-sm">${e.nome}</div>
              <div class="text-cds-nude/40 text-xs">${e.empresa}</div>
            </div>
          </div>
        </div>
        `).join("")}
      </div>

      <!-- Trust badges -->
      <div class="mt-16 reveal">
        <div class="fancy-hr mb-12"></div>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16">
          ${[{icon:"✦",label:"Personalização total"},{icon:"✦",label:"Entrega em todo Brasil"},{icon:"✦",label:"Embalagem premium"},{icon:"✦",label:"Atendimento humanizado"}].map(e=>`
          <div class="flex items-center gap-2 text-cds-nude/50 text-sm">
            <span class="text-cds-gold text-xs">${e.icon}</span>
            ${e.label}
          </div>`).join("")}
        </div>
      </div>

    </div>
  </section>
  `}const D="https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/632475468_17924403864214571_2137843253206263935_n.webp?_nc_cat=109&ig_cache_key=MzgzMTY0NDU0MzE1OTE4MDE1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=yP2-BFwcYZgQ7kNvwGNHsfY&_nc_oc=AdmvWaJXE7QXa7MbSD0ZNDO4j1Xhgufv0epOiVwj1rxGzUhNm_GhbNhYcM_Ny8qhZu61oxmGtmqGPN0snodZeFoV&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfyuMUYHwgiikYcR0GpgW5GFOBiYSo_Dt9UqnoLqEFdBUg&oe=69BF522A";function j(){return`
  <section id="contato" class="relative py-32 overflow-hidden">

    <!-- Imagem de fundo -->
    <div class="absolute inset-0 z-0">
      <img src="${D}" alt="" class="w-full h-full object-cover object-center opacity-20" />
      <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(16,10,3,0.97) 0%, rgba(16,10,3,0.85) 50%, rgba(16,10,3,0.97) 100%);"></div>
    </div>

    <!-- Borda superior dourada -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cds-gold/40 to-transparent pointer-events-none"></div>

    <!-- Ornamento circular -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div class="w-[700px] h-[700px] rounded-full border border-cds-gold/5 animate-spin-slow"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cds-gold/5"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">

      <!-- Tag -->
      <div class="reveal">
        <span class="product-tag mb-6 inline-block">Seu presente começa aqui</span>
      </div>

      <!-- Headline -->
      <h2 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cds-white leading-tight mb-6 reveal delay-200">
        Pronto para<br />
        <em class="gold-text">encantar</em><br />
        quem você ama?
      </h2>

      <p class="text-cds-nude/60 text-lg max-w-xl mx-auto mb-12 reveal delay-300">
        Mande uma mensagem agora e em minutos você estará criando um presente que vai ficar na memória para sempre.
      </p>

      <!-- CTA principal -->
      <div class="reveal delay-400">
        <a href="https://wa.me/5513991348559?text=Olá%20Stephannie!%20Quero%20fazer%20um%20pedido%20personalizado%20pela%20CDS." target="_blank" rel="noopener"
           class="btn-gold inline-flex items-center gap-4 px-10 py-5 rounded-full text-lg font-bold gold-pulse">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar no WhatsApp agora
        </a>
      </div>

      <!-- Micro info -->
      <p class="mt-8 text-cds-nude/40 text-xs tracking-wide reveal delay-500">
        Atendimento humanizado · Rua Rio de Janeiro, 102 — Vila Belmiro, Santos/SP · Entrega para todo o Brasil
      </p>

    </div>
  </section>
  `}function B(){return`
  <footer class="relative bg-cds-dark border-t border-cds-gold/10 py-12">

    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid md:grid-cols-3 gap-8 items-center">

        <!-- Logo e tagline -->
        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 rounded-full border border-cds-gold/40 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#C9A460" stroke-width="1.5"/>
                <text x="20" y="26" text-anchor="middle" font-family="Playfair Display, serif" font-size="14" fill="#C9A460" font-weight="700">C</text>
              </svg>
            </div>
            <span class="font-serif text-base font-semibold text-cds-white">CDS</span>
          </div>
          <p class="text-cds-nude/40 text-xs leading-relaxed max-w-xs">
            Criativos da Stephannie — Presentes e brindes personalizados em couro que encantam e fidelizam.
          </p>
        </div>

        <!-- Links centrais -->
        <div class="flex flex-col md:items-center gap-2">
          <a href="#produtos"      class="text-xs text-cds-nude/40 hover:text-cds-gold transition-colors">Produtos</a>
          <a href="#corporativo"   class="text-xs text-cds-nude/40 hover:text-cds-gold transition-colors">Corporativo</a>
          <a href="#como-funciona" class="text-xs text-cds-nude/40 hover:text-cds-gold transition-colors">Como funciona</a>
          <a href="#sobre"         class="text-xs text-cds-nude/40 hover:text-cds-gold transition-colors">A Stephannie</a>
        </div>

        <!-- Contato -->
        <div class="md:text-right flex flex-col gap-2">
          <a href="https://instagram.com/criativosdastephannie" target="_blank" rel="noopener"
             class="inline-flex items-center md:justify-end gap-2 text-xs text-cds-nude/40 hover:text-cds-gold transition-colors">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @criativosdastephannie
          </a>
          <a href="https://wa.me/5513991348559" target="_blank" rel="noopener"
             class="inline-flex items-center md:justify-end gap-2 text-xs text-cds-nude/40 hover:text-cds-gold transition-colors">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            (13) 99134-8559
          </a>
          <a href="mailto:criativosdastephannie@gmail.com"
             class="inline-flex items-center md:justify-end gap-2 text-xs text-cds-nude/40 hover:text-cds-gold transition-colors">
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            criativosdastephannie@gmail.com
          </a>
          <div class="text-xs text-cds-nude/25 md:text-right mt-1">
            Rua Rio de Janeiro, 102 — Vila Belmiro<br/>Santos, SP
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="fancy-hr mt-8 mb-6"></div>
      <div class="flex flex-col md:flex-row items-center justify-between gap-3">
        <p class="text-xs text-cds-nude/25">© ${new Date().getFullYear()} CDS — Criativos da Stephannie. Todos os direitos reservados.</p>
        <p class="text-xs text-cds-nude/20">Feito com <span class="text-cds-gold/50">♥</span> por Matheus Campos</p>
      </div>
    </div>

  </footer>
  `}function N(){return`
  <a
    id="wpp-float"
    href="https://wa.me/5513991348559?text=Olá%20Stephannie!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido."
    target="_blank"
    rel="noopener"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl wpp-pulse hover:scale-110 transition-transform duration-200"
    aria-label="Falar no WhatsApp"
  >
    <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
  `}document.getElementById("app").innerHTML=v()+x()+b()+w()+z()+M()+E()+j()+B()+N();const l=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>50?l.classList.add("navbar-scroll"):l.classList.remove("navbar-scroll")},{passive:!0});const Q=document.getElementById("menu-btn"),r=document.getElementById("mobile-menu"),c=document.getElementById("bar1"),g=document.getElementById("bar2"),m=document.getElementById("bar3");let i=!1;Q?.addEventListener("click",()=>{i=!i,r.classList.toggle("hidden",!i),c.style.transform=i?"translateY(8px) rotate(45deg)":"",g.style.opacity=i?"0":"1",m.style.transform=i?"translateY(-8px) rotate(-45deg)":""});r?.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{i=!1,r.classList.add("hidden"),c.style.transform="",g.style.opacity="1",m.style.transform=""})});const A=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),p=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const d=Array.from(t.target.classList).find(o=>o.startsWith("delay-"));if(d){const o=parseInt(d.replace("delay-",""));setTimeout(()=>t.target.classList.add("visible"),o)}else t.target.classList.add("visible");p.unobserve(t.target)}})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});A.forEach(e=>p.observe(e));document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const d=e.getAttribute("href").slice(1),o=document.getElementById(d);if(o){t.preventDefault();const s=o.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:s,behavior:"smooth"})}})});
