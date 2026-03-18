const passos = [
  {
    num: '01',
    icon: `<svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    titulo: 'Fale com a Stephannie',
    desc: 'Mande uma mensagem no WhatsApp contando o que você precisa — produto, quantidade, personalização e prazo.',
  },
  {
    num: '02',
    icon: `<svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
      <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    titulo: 'Escolha & Personalize',
    desc: 'Defina cor, material, frase ou logo. A Stephannie cuida de cada detalhe para garantir que fique exatamente como você imaginou.',
  },
  {
    num: '03',
    icon: `<svg width="28" height="28" fill="none" viewBox="0 0 24 24" class="text-cds-gold">
      <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    titulo: 'Receba com carinho',
    desc: 'Seu pedido chega embalado com cuidado, pronto para presentear. Entregamos em todo o Brasil.',
  },
]

export function comoFunciona() {
  return `
  <section id="como-funciona" class="relative py-28 overflow-hidden" style="background: linear-gradient(180deg, #162238 0%, #1a2b49 100%);">

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
        ${passos.map((p, i) => `
        <div class="reveal ${i === 1 ? 'delay-200' : i === 2 ? 'delay-400' : ''} group relative">
          <!-- Número grande decorativo -->
          <div class="absolute -top-4 -left-2 font-serif text-7xl font-bold text-cds-gold/5 select-none pointer-events-none">
            ${p.num}
          </div>

          <div class="relative">
            <!-- Ícone -->
            <div class="w-16 h-16 rounded-2xl border border-cds-gold/20 bg-cds-gold/5 flex items-center justify-center mb-6 group-hover:border-cds-gold/50 group-hover:bg-cds-gold/10 transition-all duration-400">
              ${p.icon}
            </div>

            <!-- Número visível -->
            <div class="flex items-center gap-3 mb-4">
              <span class="font-serif text-xs text-cds-gold/60 font-bold tracking-widest">${p.num}</span>
              <div class="flex-1 h-px bg-cds-gold/15"></div>
            </div>

            <h3 class="font-serif text-xl font-bold text-cds-white mb-3">${p.titulo}</h3>
            <p class="text-cds-nude/60 text-sm leading-relaxed">${p.desc}</p>
          </div>
        </div>
        `).join('')}
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
  `
}
