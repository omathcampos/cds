import '../style.css'
import { fetchCatalog } from './catalog-api.js'
import { applyFilters, getCategories } from './catalog-filters.js'
import { renderCatalogGrid, renderFilters, renderModal, renderSkeletons } from './catalog-render.js'

let allProducts = []
let activeFilters = { category: 'Todos', publico: 'Todos', search: '' }

function getGrid() { return document.getElementById('catalog-grid') }
function getFiltersEl() { return document.getElementById('catalog-filters') }

function filteredProducts() {
  return applyFilters(allProducts, activeFilters)
}

function rerender() {
  const filtered = filteredProducts()
  getGrid().innerHTML = renderCatalogGrid(filtered)
  // Atualiza contador dentro do filter bar re-renderizado
  const count = document.getElementById('catalog-count')
  if (count) count.textContent = `${filtered.length} produto${filtered.length !== 1 ? 's' : ''}`
  bindCardClicks()
}

function renderFilterBar() {
  const cats = getCategories(allProducts)
  const filtered = filteredProducts()
  getFiltersEl().innerHTML = renderFilters(cats, activeFilters.category, activeFilters.publico, filtered.length)
  bindFilterClicks()
  // Search fica dentro do filter bar agora — rebind
  const searchInput = document.getElementById('catalog-search')
  if (searchInput) {
    searchInput.value = activeFilters.search
    searchInput.addEventListener('input', () => {
      activeFilters.search = searchInput.value.trim()
      rerender()
      // Atualiza contador sem re-renderizar os chips
      const count = document.getElementById('catalog-count')
      if (count) {
        const f = filteredProducts()
        count.textContent = `${f.length} produto${f.length !== 1 ? 's' : ''}`
      }
    })
  }
}

function bindFilterClicks() {
  const categorySelect = document.getElementById('filter-category-select')
  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      activeFilters.category = categorySelect.value
      rerender()
      const count = document.getElementById('catalog-count')
      if (count) {
        const f = filteredProducts()
        count.textContent = `${f.length} produto${f.length !== 1 ? 's' : ''}`
      }
    })
  }
  document.querySelectorAll('[data-filter-publico]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilters.publico = btn.dataset.filterPublico
      renderFilterBar()
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
