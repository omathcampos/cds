const depoimentos = [
  {
    texto: 'Comprei para presentear minhas colaboradoras no Dia da Mulher. Ficaram absolutamente lindas! Cada detalhe foi perfeito, as meninas adoraram.',
    nome: 'Alicia',
    empresa: '@petland.itarare',
    avatar: '🌸',
  },
  {
    texto: 'Encomendei 80 chaveiros personalizados com o logo da minha clínica. Qualidade impecável, prazo cumprido e embalagem perfeita. Recomendo muito!',
    nome: 'Dra. Carol',
    empresa: '@mauriciodothadvogada',
    avatar: '⚖️',
  },
  {
    texto: 'A Stephannie transformou a ideia que eu tinha em algo ainda mais bonito do que eu imaginei. O cuidado com cada detalhe é incrível.',
    nome: 'Paulinho',
    empresa: 'Cliente avulso',
    avatar: '🎁',
  },
]

export function clientes() {
  return `
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
        ${depoimentos.map((d, i) => `
        <div class="reveal ${i === 1 ? 'delay-200' : i === 2 ? 'delay-400' : ''} group relative rounded-2xl p-7 border border-cds-gold/10 bg-white/2 hover:border-cds-gold/30 hover:bg-cds-gold/3 transition-all duration-400 card-hover">
          <!-- Aspas decorativas -->
          <div class="absolute top-5 right-6 font-serif text-6xl text-cds-gold/10 leading-none select-none">"</div>

          <!-- Estrelas -->
          <div class="flex gap-1 mb-5">
            ${Array(5).fill(0).map(() => `
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" class="text-cds-gold">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>`).join('')}
          </div>

          <p class="text-cds-nude/70 text-sm leading-relaxed mb-6 italic">
            "${d.texto}"
          </p>

          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-cds-gold/10 border border-cds-gold/20 flex items-center justify-center text-lg">
              ${d.avatar}
            </div>
            <div>
              <div class="text-cds-white font-semibold text-sm">${d.nome}</div>
              <div class="text-cds-nude/40 text-xs">${d.empresa}</div>
            </div>
          </div>
        </div>
        `).join('')}
      </div>

      <!-- Trust badges -->
      <div class="mt-16 reveal">
        <div class="fancy-hr mb-12"></div>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16">
          ${[
            { icon: '✦', label: 'Personalização total' },
            { icon: '✦', label: 'Entrega em todo Brasil' },
            { icon: '✦', label: 'Embalagem premium' },
            { icon: '✦', label: 'Atendimento humanizado' },
          ].map(b => `
          <div class="flex items-center gap-2 text-cds-nude/50 text-sm">
            <span class="text-cds-gold text-xs">${b.icon}</span>
            ${b.label}
          </div>`).join('')}
        </div>
      </div>

    </div>
  </section>
  `
}
