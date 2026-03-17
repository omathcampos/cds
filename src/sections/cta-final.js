const IMG_BG = 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/632475468_17924403864214571_2137843253206263935_n.webp?_nc_cat=109&ig_cache_key=MzgzMTY0NDU0MzE1OTE4MDE1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=yP2-BFwcYZgQ7kNvwGNHsfY&_nc_oc=AdmvWaJXE7QXa7MbSD0ZNDO4j1Xhgufv0epOiVwj1rxGzUhNm_GhbNhYcM_Ny8qhZu61oxmGtmqGPN0snodZeFoV&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=_Ma0vzXCXbVTCkjt1X0Rdg&_nc_ss=8&oh=00_Afz37EAU0Gc58IPslN9Tp_NTwOW-UghwsW75LZuRkPNiHQ&oe=69BF522A'

export function ctaFinal() {
  return `
  <section id="contato" class="relative py-32 overflow-hidden">

    <!-- Imagem de fundo -->
    <div class="absolute inset-0 z-0">
      <img src="${IMG_BG}" alt="" class="w-full h-full object-cover object-center opacity-20" />
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
  `
}
