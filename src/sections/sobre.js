const IMG_STEPHANNIE = 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.75761-15/491493303_17890939293214571_4710776233333835992_n.webp?_nc_cat=111&ig_cache_key=MzYwOTM2MTY2NjE2Njg2NjA4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=qM84CNowi6oQ7kNvwEc0Cyd&_nc_oc=AdndjBP83r9FjwSJt9XuKHK5fCf-1LOWzXT4F2M-ZUKLc0zs6cpGnDkAE1B9PL9QJ-iifoFo9pET1NZSU-d3Qmo7&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwOVKdcDR7f6FSFCUfkA74RhRLs27Hsj6GMrzMZtxbnPw&oe=69BF449D'

export function sobre() {
  return `
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
              src="${IMG_STEPHANNIE}"
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
  `
}
