import { getCategories, saveCategory, deleteCategory } from './categories-api.js'

function renderCategoryList(categories) {
  return `
    <div class="space-y-6">
      <!-- Adicionar nova -->
      <div class="bg-cds-dark/40 border border-cds-gold/10 rounded-xl p-5">
        <h3 class="text-cds-white font-medium text-sm mb-4">Nova categoria</h3>
        <form id="category-add-form" class="flex gap-3">
          <input type="text" name="nome" required placeholder="Ex: Porta Documentos"
                 class="admin-input flex-1" maxlength="50" />
          <input type="number" name="ordem" min="0" value="${categories.length + 1}" placeholder="Ordem"
                 class="admin-input w-24" title="Ordem de exibição (menor aparece primeiro)" />
          <button type="submit" class="btn-gold px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap">
            + Adicionar
          </button>
        </form>
        <div id="category-feedback" class="hidden mt-3 text-sm px-3 py-2 rounded-lg"></div>
      </div>

      <!-- Lista -->
      <div class="overflow-x-auto rounded-xl border border-cds-gold/10">
        ${categories.length === 0
          ? `<div class="text-center py-12 text-cds-nude/40">Nenhuma categoria cadastrada.</div>`
          : `
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-cds-gold/10 bg-cds-dark/60">
                <th class="text-left px-4 py-3 text-cds-nude/40 font-medium">Nome</th>
                <th class="text-center px-4 py-3 text-cds-nude/40 font-medium w-24">Ordem</th>
                <th class="text-right px-4 py-3 text-cds-nude/40 font-medium w-24">Ação</th>
              </tr>
            </thead>
            <tbody>
              ${categories.map(c => `
                <tr class="border-b border-cds-gold/5 hover:bg-cds-gold/5 transition-colors">
                  <td class="px-4 py-3 text-cds-white">${c.nome}</td>
                  <td class="px-4 py-3 text-center text-cds-nude/50">${c.ordem}</td>
                  <td class="px-4 py-3 text-right">
                    <button class="px-3 py-1.5 rounded-lg text-xs border border-red-800/30 text-red-400/60 hover:border-red-700 hover:text-red-400 transition-all"
                            data-delete-cat="${c.id}" data-nome="${c.nome}">Excluir</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          `
        }
      </div>
    </div>
  `
}

export async function loadAndRenderCategories(container) {
  container.innerHTML = `<div class="text-center py-10 text-cds-nude/40">Carregando...</div>`
  try {
    const categories = await getCategories()
    container.innerHTML = renderCategoryList(categories)
    bindCategoryActions(container)
  } catch (err) {
    container.innerHTML = `<div class="text-center py-10 text-red-400">Erro: ${err.message}</div>`
  }
}

function bindCategoryActions(container) {
  const form = container.querySelector('#category-add-form')
  const feedback = container.querySelector('#category-feedback')

  form?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    btn.disabled = true
    btn.textContent = 'Salvando...'
    setFeedback(null)

    try {
      const nome = form.nome.value.trim()
      const ordem = parseInt(form.ordem.value) || 0
      await saveCategory({ nome, ordem })
      await loadAndRenderCategories(container)
    } catch (err) {
      setFeedback(`Erro: ${err.message}`, 'error')
      btn.disabled = false
      btn.textContent = '+ Adicionar'
    }
  })

  container.querySelectorAll('[data-delete-cat]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm(`Excluir a categoria "${btn.dataset.nome}"?`)) return
      btn.disabled = true
      btn.textContent = '...'
      try {
        await deleteCategory(btn.dataset.deleteCat)
        await loadAndRenderCategories(container)
      } catch (err) {
        alert(err.message)
        btn.disabled = false
        btn.textContent = 'Excluir'
      }
    })
  })

  function setFeedback(msg, type) {
    if (!msg) { feedback.classList.add('hidden'); return }
    feedback.classList.remove('hidden')
    feedback.textContent = msg
    feedback.className = `mt-3 text-sm px-3 py-2 rounded-lg ${
      type === 'error' ? 'bg-red-900/30 text-red-400 border border-red-800' : 'bg-green-900/30 text-green-400 border border-green-800'
    }`
  }
}
