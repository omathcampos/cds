import { uploadImage, uploadImages } from './upload.js'
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

        <!-- Imagens -->
        <div class="md:col-span-2">
          <label class="admin-label">Fotos do produto</label>
          <div id="images-grid" class="flex flex-wrap gap-2 mb-3"></div>
          <label for="image-input" class="cursor-pointer inline-flex items-center gap-2 border border-dashed border-cds-gold/30 hover:border-cds-gold/60 rounded-xl px-4 py-3 text-cds-nude/50 hover:text-cds-gold transition-all text-sm">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
            </svg>
            Adicionar fotos
          </label>
          <input type="file" id="image-input" accept="image/jpeg,image/png,image/webp" multiple class="hidden" />
          <p class="text-[11px] text-cds-nude/30 mt-2">A primeira foto será a imagem principal. Recomendado: 800×800px.</p>
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

  // Estado de imagens: URLs já salvas + arquivos novos pendentes
  let existingUrls = product?.images?.length
    ? [...product.images]
    : (product?.image_url ? [product.image_url] : [])
  let pendingFiles = [] // { file, previewUrl }

  function renderThumbnails() {
    const grid = document.getElementById('images-grid')
    if (!grid) return
    const all = [
      ...existingUrls.map((url, i) => ({ type: 'existing', url, i })),
      ...pendingFiles.map((f, i) => ({ type: 'pending', url: f.previewUrl, i })),
    ]
    grid.innerHTML = all.map((item, idx) => `
      <div class="relative group" style="width:80px;height:80px;flex-shrink:0;">
        <img src="${item.url}" class="w-full h-full object-cover rounded-lg border-2 ${idx === 0 ? 'border-cds-gold' : 'border-cds-gold/20'}" />
        ${idx === 0 ? `<span style="position:absolute;bottom:0;left:0;right:0;text-align:center;font-size:9px;background:rgba(201,164,96,0.85);color:#1a2b49;border-radius:0 0 6px 6px;padding:1px 0;">Principal</span>` : ''}
        <button type="button" data-remove-type="${item.type}" data-remove-idx="${item.i}"
                style="position:absolute;top:3px;right:3px;width:18px;height:18px;border-radius:50%;background:rgba(127,29,29,0.9);color:#fca5a5;font-size:12px;display:none;align-items:center;justify-content:center;border:none;cursor:pointer;line-height:1;">×</button>
      </div>
    `).join('')

    grid.querySelectorAll('[data-remove-type]').forEach(btn => {
      // show on hover via JS
      const wrap = btn.parentElement
      wrap.addEventListener('mouseenter', () => btn.style.display = 'flex')
      wrap.addEventListener('mouseleave', () => btn.style.display = 'none')
      btn.addEventListener('click', () => {
        const type = btn.dataset.removeType
        const i = parseInt(btn.dataset.removeIdx)
        if (type === 'existing') existingUrls.splice(i, 1)
        else pendingFiles.splice(i, 1)
        renderThumbnails()
      })
    })
  }

  renderThumbnails()

  document.getElementById('btn-back-list')?.addEventListener('click', onCancel)
  document.getElementById('btn-cancel-form')?.addEventListener('click', onCancel)

  imageInput?.addEventListener('change', () => {
    Array.from(imageInput.files).forEach(file => {
      pendingFiles.push({ file, previewUrl: URL.createObjectURL(file) })
    })
    imageInput.value = ''
    renderThumbnails()
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
      }

      if (product?.id) data.id = product.id

      if (pendingFiles.length > 0) {
        setFeedback(`Enviando ${pendingFiles.length} foto(s)...`, 'info')
        const newUrls = await uploadImages(pendingFiles.map(f => f.file))
        existingUrls = [...existingUrls, ...newUrls]
      }

      data.images = existingUrls
      data.image_url = existingUrls[0] || null

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
