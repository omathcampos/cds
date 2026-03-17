const listaProdutos = [
  {
    img: 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/649664834_17927415822214571_4492788442871780580_n.webp?_nc_cat=101&ig_cache_key=Mzg0OTA0MTc0MjI5MzQ4Njk2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTcyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=9axmh51zR0IQ7kNvwEzd_R2&_nc_oc=Adlgr2a4_U98KLDc71su1GODY7MGzw6Z_DbCWgUY13pFmqg93RCKcEqK2EYknEvIaqWogkhe1LWfx1EbgqCYeBW1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwJvxBqSYthC8kgfD6_-gatWERnPP85MeGlICacBnb1Pw&oe=69BF58A7',
    nome: 'Nécessaire Personalizada',
    desc: 'Com frase, nome ou logo gravados',
    tag: 'Mais pedida',
    tall: true,
  },
  {
    img: 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/649642980_17927555154214571_75920822374838297_n.webp?_nc_cat=100&ig_cache_key=Mzg0OTY5NTk3MTk5NTY0NDgwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTYyMi5zZHIuQzMifQ%3D%3D&_nc_ohc=ASklOlmFPmYQ7kNvwFLtM6S&_nc_oc=AdkdRtXHEy33W9TojeQMcVCX1-8-3V7szXWq7HDu0Kdmz5oXNBEaJ24iXmu5vLEnq4RX4VQcD-3pQQ11p-p5ygls&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_AfwEodYxnW0UT99NCK5bq9GK3Gsphmsg1ntea0dXF5ghQQ&oe=69BF2BEA',
    nome: 'Kit Capa A5 + Porta Batom',
    desc: 'Conjunto exclusivo em couro sintético',
    tag: null,
    tall: false,
  },
  {
    img: 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/645767791_17926768920214571_1069062933817453450_n.webp?_nc_cat=103&ig_cache_key=Mzg0NTc3ODQxMjI1MDQ1Nzg5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=jd5iFjQG8GUQ7kNvwEw4zkW&_nc_oc=AdmAs5WFiyYR6uKsmuWWyQDnINhznotHcLCbxy8Uhxa5Co4Dw-9gAohbJZjfmzywtGQH4PMWVLjbKVeMRmZIW7Hx&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=kbZ7GIElOpNVnWS794oQmQ&_nc_ss=8&oh=00_Afw5unV5OsuE1tZYlie5ArnEHw0IoJ72z_VVy6efRU1nsQ&oe=69BF3B59',
    nome: 'Porta Batom Individual',
    desc: 'Elegante e personalizado com a sua marca',
    tag: 'Corporativo',
    tall: false,
  },
  {
    img: 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/629783926_17924793108214571_5862895620951597707_n.webp?_nc_cat=101&ig_cache_key=MzgzMzkwNzU1MjE3NDU0NDA1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTgwMS5zZHIuQzMifQ%3D%3D&_nc_ohc=YUyAaR5a540Q7kNvwHCc6tM&_nc_oc=Adk_4TST4RIvEjYPvlv6uaI4ffaPNhVMiql3fqiQOnFfIy1L5YOI_ijNTKnP_JMmrYf7Le6kOxQSlB77bl1pejBc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=_Ma0vzXCXbVTCkjt1X0Rdg&_nc_ss=8&oh=00_AfxMlmwfF_JNjoxaMo83RWwPuDEd24DFFQl58bczbd61Tw&oe=69BF3F28',
    nome: 'Kits & Conjuntos em Couro',
    desc: 'Curados com detalhes dourados únicos',
    tag: 'Premium',
    tall: true,
  },
  {
    img: 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/629783515_17924842725214571_8314553456345514492_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzgzNDUzNjE4MzM4NTExNjg0NDE3OTI0ODQyNzE5MjE0NTcx.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=4hh4VG6DeoMQ7kNvwE88MxU&_nc_oc=AdlyRhNDuoQOW90O3rpU1PK8gBoPUsp4ZcGQyiGNFrAwGWvG6apUOvcS7DQ3teHvVMZPQ4GUIpln4pG4m9JIEMG9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=_Ma0vzXCXbVTCkjt1X0Rdg&_nc_ss=8&oh=00_AfxbP8lnAyX-f4-R9WZevT90gjoLWk1vKTKMksvPTr0X2A&oe=69BF3F9E',
    nome: 'Chaveiros Personalizados',
    desc: 'Logo em baixo relevo, ideal para empresas',
    tag: null,
    tall: false,
  },
  {
    img: 'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.82787-15/640065904_17925219363214571_1968720110538003024_n.webp?_nc_cat=108&ig_cache_key=MzgzNjY1MzA4MDIwNTY1OTc5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=gV866Z2QTpwQ7kNvwF1Vf76&_nc_oc=AdlA2yOWcd-Ytg26o_1efGIavky1BZArnk1z4r7iHKLCOFGPZwsVbXQk41tcgjNdgDpXm15ac4dvnlOw6HC1KOWQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fssz1-1.fna&_nc_gid=_Ma0vzXCXbVTCkjt1X0Rdg&_nc_ss=8&oh=00_AfyCKN3AlTg-Ao-QRamvtWmP5A2X0KMyac2TQmf8SZoBHg&oe=69BF5F27',
    nome: 'Kits para Eventos & Datas',
    desc: 'Perfeito para presentear em grupo',
    tag: 'Especial',
    tall: false,
  },
]

export function produtos() {
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
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        ${listaProdutos.map((p, i) => `
        <div class="reveal ${i % 3 === 1 ? 'delay-200' : i % 3 === 2 ? 'delay-400' : ''} img-overlay rounded-xl overflow-hidden group cursor-pointer card-hover
                    ${p.tall ? 'row-span-2' : ''}"
             style="${p.tall ? 'min-height: 420px;' : 'min-height: 200px;'}">
          <div class="relative w-full h-full" style="height: ${p.tall ? '420px' : '210px'};">
            <img
              src="${p.img}"
              alt="${p.nome}"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <!-- Overlay sempre visível no bottom -->
            <div class="absolute inset-0 bg-gradient-to-t from-cds-dark/90 via-cds-dark/20 to-transparent"></div>
            <!-- Conteúdo -->
            <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              ${p.tag ? `<span class="product-tag mb-2 inline-block text-[10px]">${p.tag}</span>` : ''}
              <h3 class="font-serif text-base font-semibold text-cds-white leading-tight">${p.nome}</h3>
              <p class="text-cds-nude/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">${p.desc}</p>
            </div>
            <!-- Hover icon -->
            <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-cds-gold/0 group-hover:bg-cds-gold/20 border border-cds-gold/0 group-hover:border-cds-gold/50 flex items-center justify-center transition-all duration-300">
              <svg width="14" height="14" fill="none" stroke="currentColor" class="text-cds-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
        `).join('')}
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
  `
}
