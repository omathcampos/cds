import { uploadImage } from './upload.js'
import { saveProduct } from './products-api.js'

// categorias é passado como parâmetro — vem do banco
export function renderProductForm(product = null, categories = []) {
  const p = product || {}
  const isEdit = !!product

  return `
    <div id="product-form-section">
      <div class="flex items-center gap-4 mb-8">
        <button id="btn-back-list" class="text-cds-nude/50 hover:text-cds-gold transition-colors text-sm flex items-center gap-2">
          ← Voltar
        </button>
        <h2 class="font-serif text-2xl text-cds-white">${isEdit ? 'Editar Produto' : 'Novo Produto'}</h2>
      </div>

      <form id="product-form" class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Nome -->
        <div class="md:col-span-2">
          <label class="admin-label">Nome *</label>
          <input type="text" name="nome" required value="${p.nome || ''}"
                 class="admin-input w-full" placeholder="Ex: Nécessaire Personalizada" />
        </div>

        <!-- Descrição -->
        <div class="md:col-span-2">
          <label class="admin-label">Descrição</label>
          <textarea name="descricao" rows="2" class="admin-input w-full" placeholder="Breve descrição do produto">${p.descricao || ''}</textarea>
        </div>

        <!-- Categoria -->
        <div>
          <label class="admin-label">Categoria *</label>
          <select name="categoria" required class="admin-input w-full">
            ${categories.length === 0
              ? `<option value="${p.categoria || ''}">${p.categoria || 'Sem categorias'}</option>`
              : categories.map(c => `<option value="${c.nome}" ${p.categoria === c.nome ? 'selected' : ''}>${c.nome}</option>`).join('')
            }
          </select>
        </div>

        <!-- Tag -->
        <div>
          <label class="admin-label">Tag (ex: Mais pedida, Premium)</label>
          <input type="text" name="tag" value="${p.tag || ''}" class="admin-input w-full" placeholder="Deixe vazio para sem tag" />
        </div>

        <!-- Preço de -->
        <div>
          <label class="admin-label">Preço "de" (riscado)</label>
          <input type="number" name="preco_de" step="0.01" min="0" value="${p.preco_de || ''}"
                 class="admin-input w-full" placeholder="89.90" />
        </div>

        <!-- Preço por -->
        <div>
          <label class="admin-label">Preço "por" *</label>
          <input type="number" name="preco_por" step="0.01" min="0" required value="${p.preco_por || ''}"
                 class="admin-input w-full" placeholder="79.90" />
        </div>

        <!-- Preço lote -->
        <div class="md:col-span-2">
          <label class="admin-label">Preço mínimo lote</label>
          <input type="text" name="preco_min_lote" value="${p.preco_min_lote || ''}"
                 class="admin-input w-full" placeholder="Ex: A partir de R$ 45 (lote 10+)" />
        </div>

        <!-- Público -->
        <div>
          <label class="admin-label">Público</label>
          <select name="publico" class="admin-input w-full">
            <option value="B2C,B2B" ${(p.publico || 'B2C,B2B') === 'B2C,B2B' ? 'selected' : ''}>B2C e B2B</option>
            <option value="B2C" ${p.publico === 'B2C' ? 'selected' : ''}>Só B2C (presente pessoal)</option>
            <option value="B2B" ${p.publico === 'B2B' ? 'selected' : ''}>Só B2B (corporativo)</option>
          </select>
        </div>

        <!-- Ordem -->
        <div>
          <label class="admin-label">Ordem (menor = aparece primeiro)</label>
          <input type="number" name="ordem" min="0" value="${p.ordem ?? 0}" class="admin-input w-full" />
        </div>

        <!-- Checkboxes -->
        <div class="md:col-span-2 flex flex-wrap gap-6">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="destaque" ${p.destaque ? 'checked' : ''} class="admin-checkbox" />
            <span class="text-cds-nude/80 text-sm">Destaque (aparece na landing page)</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="ativo" ${(p.ativo !== false) ? 'checked' : ''} class="admin-checkbox" />
            <span class="text-cds-nude/80 text-sm">Ativo (visível no catálogo)</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="tall" ${p.tall ? 'checked' : ''} class="admin-checkbox" />
            <span class="text-cds-nude/80 text-sm">Card alto (destaque visual)</span>
          </label>
        </div>

        <!-- Imagem -->
        <div class="md:col-span-2">
          <label class="admin-label">Foto do produto</label>
          ${p.image_url ? `
            <div class="mb-3">
              <img src="${p.image_url}" alt="Foto atual" class="w-24 h-24 object-cover rounded-lg border border-cds-gold/20" />
              <p class="text-cds-nude/40 text-xs mt-1">Foto atual — selecione outra para substituir</p>
            </div>
          ` : ''}
          <input type="file" name="image" accept="image/jpeg,image/png,image/webp" id="image-input" class="hidden" />
          <label for="image-input" class="cursor-pointer flex items-center gap-3 border border-dashed border-cds-gold/30 hover:border-cds-gold/60 rounded-xl p-4 text-cds-nude/50 hover:text-cds-gold transition-all text-sm">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
            </svg>
            <span id="image-filename">Selecionar imagem (JPEG/PNG/WebP, máx 5MB)</span>
          </label>
          <div id="image-preview-wrap" class="mt-3 hidden">
            <img id="image-preview" src="" alt="Preview" class="w-24 h-24 object-cover rounded-lg border border-cds-gold/30" />
          </div>
        </div>

        <!-- Feedback -->
        <div class="md:col-span-2">
          <div id="form-feedback" class="hidden text-sm px-4 py-3 rounded-lg"></div>
        </div>

        <!-- Botões -->
        <div class="md:col-span-2 flex gap-4">
          <button type="submit" id="btn-submit" class="btn-gold px-8 py-3 rounded-full font-semibold text-sm">
            ${isEdit ? 'Salvar alterações' : 'Adicionar produto'}
          </button>
          <button type="button" id="btn-cancel-form" class="px-6 py-3 rounded-full text-sm border border-cds-gold/20 text-cds-nude/60 hover:border-cds-gold/50 hover:text-cds-gold transition-all">
            Cancelar
          </button>
        </div>

      </form>
    </div>
  `
}

export function initProductForm(product, onSaved, onCancel, categories = []) {
  const form = document.getElementById('product-form')
  const feedback = document.getElementById('form-feedback')
  const imageInput = document.getElementById('image-input')
  const imagePreview = document.getElementById('image-preview')
  const imagePreviewWrap = document.getElementById('image-preview-wrap')
  const imageFilename = document.getElementById('image-filename')

  document.getElementById('btn-back-list')?.addEventListener('click', onCancel)
  document.getElementById('btn-cancel-form')?.addEventListener('click', onCancel)

  imageInput?.addEventListener('change', () => {
    const file = imageInput.files[0]
    if (file) {
      imageFilename.textContent = file.name
      const url = URL.createObjectURL(file)
      imagePreview.src = url
      imagePreviewWrap.classList.remove('hidden')
    }
  })

  form?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = document.getElementById('btn-submit')
    btn.disabled = true
    btn.textContent = 'Salvando...'
    setFeedback(null)

    try {
      const fd = new FormData(form)
      const data = {
        nome: fd.get('nome'),
        descricao: fd.get('descricao') || null,
        categoria: fd.get('categoria'),
        tag: fd.get('tag') || null,
        preco_de: fd.get('preco_de') ? parseFloat(fd.get('preco_de')) : null,
        preco_por: parseFloat(fd.get('preco_por')),
        preco_min_lote: fd.get('preco_min_lote') || null,
        publico: fd.get('publico'),
        ordem: parseInt(fd.get('ordem')) || 0,
        destaque: fd.get('destaque') === 'on',
        ativo: fd.get('ativo') === 'on',
        tall: fd.get('tall') === 'on',
        image_url: product?.image_url || null,
      }

      if (product?.id) data.id = product.id

      const file = imageInput?.files[0]
      if (file) {
        setFeedback('Enviando imagem...', 'info')
        data.image_url = await uploadImage(file)
      }

      await saveProduct(data)
      setFeedback('Produto salvo com sucesso!', 'success')
      setTimeout(onSaved, 800)
    } catch (err) {
      setFeedback(`Erro: ${err.message}`, 'error')
      btn.disabled = false
      btn.textContent = product ? 'Salvar alterações' : 'Adicionar produto'
    }
  })

  function setFeedback(msg, type) {
    if (!msg) { feedback.classList.add('hidden'); return }
    feedback.classList.remove('hidden')
    feedback.textContent = msg
    feedback.className = `text-sm px-4 py-3 rounded-lg ${
      type === 'success' ? 'bg-green-900/30 text-green-400 border border-green-800' :
      type === 'error'   ? 'bg-red-900/30 text-red-400 border border-red-800' :
                           'bg-cds-gold/10 text-cds-gold border border-cds-gold/20'
    }`
  }
}
