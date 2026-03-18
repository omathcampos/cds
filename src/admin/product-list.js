import { getProducts, saveProduct, hardDeleteProduct } from './products-api.js'

function formatPrice(v) {
  if (v == null) return '—'
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function badge(text, color) {
  return `<span class="px-2 py-0.5 rounded-full text-xs font-medium ${color}">${text}</span>`
}

export function renderProductList(products) {
  if (!products || products.length === 0) {
    return `<div class="text-center py-20 text-cds-nude/40">Nenhum produto cadastrado ainda.</div>`
  }

  return `
    <div class="overflow-x-auto rounded-xl border border-cds-gold/10">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-cds-gold/10 bg-cds-dark/60">
            <th class="text-left px-4 py-3 text-cds-nude/40 font-medium">Foto</th>
            <th class="text-left px-4 py-3 text-cds-nude/40 font-medium">Nome</th>
            <th class="text-left px-4 py-3 text-cds-nude/40 font-medium hidden md:table-cell">Categoria</th>
            <th class="text-left px-4 py-3 text-cds-nude/40 font-medium hidden md:table-cell">Preço</th>
            <th class="text-center px-4 py-3 text-cds-nude/40 font-medium">Status</th>
            <th class="text-right px-4 py-3 text-cds-nude/40 font-medium">Ações</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr class="border-b border-cds-gold/5 hover:bg-cds-gold/5 transition-colors" data-id="${p.id}">
              <td class="px-4 py-3">
                ${p.image_url
                  ? `<img src="${p.image_url}" alt="${p.nome}" class="w-10 h-10 object-cover rounded-lg" />`
                  : `<div class="w-10 h-10 rounded-lg bg-cds-dark/60 flex items-center justify-center text-cds-gold/20 text-xs font-serif">CDS</div>`
                }
              </td>
              <td class="px-4 py-3">
                <span class="text-cds-white font-medium">${p.nome}</span>
                ${p.destaque ? `<span class="ml-2 text-[10px] text-cds-gold">★ Destaque</span>` : ''}
              </td>
              <td class="px-4 py-3 text-cds-nude/60 hidden md:table-cell">${p.categoria}</td>
              <td class="px-4 py-3 text-cds-gold hidden md:table-cell">${formatPrice(p.preco_por)}</td>
              <td class="px-4 py-3 text-center">
                ${p.ativo
                  ? badge('Ativo', 'bg-green-900/30 text-green-400')
                  : badge('Inativo', 'bg-red-900/30 text-red-400')
                }
              </td>
              <td class="px-4 py-3">
                <div class="flex gap-1.5 justify-end flex-wrap">
                  <button class="px-3 py-1.5 rounded-lg text-xs border border-cds-gold/20 text-cds-nude/60 hover:border-cds-gold/50 hover:text-cds-gold transition-all"
                          data-action="edit" data-id="${p.id}">Editar</button>
                  <button class="px-3 py-1.5 rounded-lg text-xs border transition-all
                                 ${p.ativo
                                   ? 'border-amber-800/30 text-amber-400/60 hover:border-amber-700 hover:text-amber-400'
                                   : 'border-green-800/30 text-green-400/60 hover:border-green-700 hover:text-green-400'}"
                          data-action="toggle" data-id="${p.id}" data-ativo="${p.ativo}">
                    ${p.ativo ? 'Desativar' : 'Ativar'}
                  </button>
                  <button class="px-3 py-1.5 rounded-lg text-xs border border-red-800/30 text-red-400/60 hover:border-red-700 hover:text-red-400 transition-all"
                          data-action="delete" data-id="${p.id}" data-nome="${p.nome}">Excluir</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `
}

export async function loadAndRenderList(container, onEdit) {
  container.innerHTML = `<div class="text-center py-10 text-cds-nude/40">Carregando produtos...</div>`
  try {
    const products = await getProducts()
    container.innerHTML = renderProductList(products)
    bindListActions(container, products, onEdit)
    return products
  } catch (err) {
    container.innerHTML = `<div class="text-center py-10 text-red-400">Erro ao carregar: ${err.message}</div>`
    return []
  }
}

function bindListActions(container, products, onEdit) {
  container.querySelectorAll('[data-action="edit"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = products.find(p => String(p.id) === btn.dataset.id)
      if (product) onEdit(product)
    })
  })

  container.querySelectorAll('[data-action="toggle"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const isAtivo = btn.dataset.ativo === 'true'
      btn.disabled = true
      btn.textContent = '...'
      try {
        const product = products.find(p => String(p.id) === btn.dataset.id)
        await saveProduct({ ...product, ativo: !isAtivo })
        await loadAndRenderList(container, onEdit)
      } catch (err) {
        alert(`Erro: ${err.message}`)
        btn.disabled = false
      }
    })
  })

  container.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const nome = btn.dataset.nome
      if (!confirm(`Excluir permanentemente "${nome}"?\n\nEssa ação não pode ser desfeita.`)) return
      btn.disabled = true
      btn.textContent = '...'
      try {
        await hardDeleteProduct(btn.dataset.id)
        await loadAndRenderList(container, onEdit)
      } catch (err) {
        alert(`Erro ao excluir: ${err.message}`)
        btn.disabled = false
        btn.textContent = 'Excluir'
      }
    })
  })
}
