import '../style.css'
import { fetchCatalog } from './catalog-api.js'
import { applyFilters, getCategories } from './catalog-filters.js'
import { renderCatalogGrid, renderFilters, renderModal, renderPagination, renderSkeletons } from './catalog-render.js'

let allProducts = []
let activeFilters = { category: 'Todos', publico: 'Todos', search: '' }
let currentPage = 1
let pageSize = 12

function getGrid() { return document.getElementById('catalog-grid') }
function getFiltersEl() { return document.getElementById('catalog-filters') }
function getPaginationEl() { return document.getElementById('catalog-pagination') }

function filteredProducts() {
  return applyFilters(allProducts, activeFilters)
}

function rerender() {
  const filtered = filteredProducts()
  const total = filtered.length
  const start = (currentPage - 1) * pageSize
  const paged = filtered.slice(start, start + pageSize)

  getGrid().innerHTML = renderCatalogGrid(paged)
  bindCardClicks()

  const count = document.getElementById('catalog-count')
  if (count) count.textContent = total > 0 ? `${total} produto${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}` : ''

  const pagEl = getPaginationEl()
  if (pagEl) {
    pagEl.innerHTML = renderPagination(total, currentPage, pageSize)
    bindPaginationClicks()
  }
}

function renderFilterBar() {
  const cats = getCategories(allProducts)
  const filtered = filteredProducts()
  getFiltersEl().innerHTML = renderFilters(cats, activeFilters.category, activeFilters.publico, filtered.length)
  bindFilterClicks()
  const searchInput = document.getElementById('catalog-search')
  if (searchInput) {
    searchInput.value = activeFilters.search
    searchInput.addEventListener('input', () => {
      activeFilters.search = searchInput.value.trim()
      currentPage = 1
      rerender()
    })
  }
}

function bindFilterClicks() {
  const categorySelect = document.getElementById('filter-category-select')
  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      activeFilters.category = categorySelect.value
      currentPage = 1
      rerender()
      const count = document.getElementById('catalog-count')
      if (count) {
        const f = filteredProducts()
        count.textContent = f.length > 0 ? `${f.length} produto${f.length !== 1 ? 's' : ''} encontrado${f.length !== 1 ? 's' : ''}` : ''
      }
    })
  }
  document.querySelectorAll('[data-filter-publico]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilters.publico = btn.dataset.filterPublico
      currentPage = 1
      renderFilterBar()
      rerender()
    })
  })
}

function bindPaginationClicks() {
  const pagEl = getPaginationEl()
  if (!pagEl) return

  pagEl.querySelectorAll('[data-page]').forEach(btn => {
    if (btn.disabled) return
    btn.addEventListener('click', () => {
      currentPage = Number(btn.dataset.page)
      rerender()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })

  pagEl.querySelectorAll('[data-page-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      pageSize = Number(btn.dataset.pageSize)
      currentPage = 1
      rerender()
    })
  })
}

function openModal(productId) {
  const product = allProducts.find(p => String(p.id) === String(productId))
  if (!product) return

  document.getElementById('product-modal')?.remove()
  document.body.insertAdjacentHTML('beforeend', renderModal(product))
  document.body.style.overflow = 'hidden'

  document.getElementById('modal-close')?.addEventListener('click', closeModal)
  document.getElementById('modal-backdrop')?.addEventListener('click', closeModal)
  document.addEventListener('keydown', handleEsc)
}

function closeModal() {
  document.getElementById('product-modal')?.remove()
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleEsc)
}

function handleEsc(e) {
  if (e.key === 'Escape') closeModal()
}

function bindCardClicks() {
  document.querySelectorAll('[data-open-modal]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.productId))
  })
}

async function init() {
  getGrid().innerHTML = renderSkeletons(6)
  allProducts = await fetchCatalog()
  renderFilterBar()
  rerender()
}

init()
