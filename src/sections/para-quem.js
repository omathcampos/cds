export function paraQuem() {
  return `
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
              ${['Personalização com logo da sua empresa','Pedidos a partir de 10 unidades','Embalagem premium inclusa','Entrega em todo o Brasil'].map(item => `
              <li class="flex items-center gap-3 text-sm text-cds-nude/70">
                <svg width="14" height="14" viewBox="0 0 20 20" class="text-cds-gold flex-shrink-0">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                </svg>
                ${item}
              </li>`).join('')}
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
              ${['Personalização com nome ou frase especial','Cores e modelos à sua escolha','Embalagem presente valorizada','Encomenda unitária aceita'].map(item => `
              <li class="flex items-center gap-3 text-sm text-cds-nude/70">
                <svg width="14" height="14" viewBox="0 0 20 20" class="text-cds-gold flex-shrink-0">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                </svg>
                ${item}
              </li>`).join('')}
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
  `
}
