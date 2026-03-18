import '../style.css'
import { signIn, signOut } from './auth.js'
import { supabase } from '../lib/supabase.js'
import { loadAndRenderList } from './product-list.js'
import { renderProductForm, initProductForm } from './product-form.js'
import { loadAndRenderCategories } from './category-list.js'
import { getCategories } from './categories-api.js'

// ── DOM refs ──────────────────────────────────────────────────────────────────
const loginSection      = document.getElementById('login-section')
const adminSection      = document.getElementById('admin-section')
const listSection       = document.getElementById('list-section')
const formSection       = document.getElementById('form-section')
const loginForm         = document.getElementById('login-form')
const loginError        = document.getElementById('login-error')
const btnSignOut        = document.getElementById('btn-sign-out')
const btnAddProduct     = document.getElementById('btn-add-product')
const produtosPanel     = document.getElementById('produtos-panel')
const categoriasPanel   = document.getElementById('categorias-panel')
const categoriesSection = document.getElementById('categories-section')
const tabProdutos       = document.getElementById('tab-produtos')
const tabCategorias     = document.getElementById('tab-categorias')

// ── Navegação ─────────────────────────────────────────────────────────────────
function showLogin() { loginSection.classList.remove('hidden'); adminSection.classList.add('hidden') }
function showAdmin() { loginSection.classList.add('hidden'); adminSection.classList.remove('hidden') }
function showList()  { listSection.classList.remove('hidden'); formSection.classList.add('hidden') }
function showForm()  { listSection.classList.add('hidden'); formSection.classList.remove('hidden') }

function setActiveTab(tab) {
  const isProducts = tab === 'produtos'
  produtosPanel.classList.toggle('hidden', !isProducts)
  categoriasPanel.classList.toggle('hidden', isProducts)
  tabProdutos.className = `tab-btn px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
    isProducts ? 'border-cds-gold text-cds-gold' : 'border-transparent text-cds-nude/50 hover:text-cds-nude/80'
  }`
  tabCategorias.className = `tab-btn px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
    !isProducts ? 'border-cds-gold text-cds-gold' : 'border-transparent text-cds-nude/50 hover:text-cds-nude/80'
  }`
  if (!isProducts) loadAndRenderCategories(categoriesSection)
}

tabProdutos?.addEventListener('click', () => setActiveTab('produtos'))
tabCategorias?.addEventListener('click', () => setActiveTab('categorias'))

// ── Auth reativa ──────────────────────────────────────────────────────────────
let adminReady = false

supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
    showAdmin()
    if (!adminReady) {
      adminReady = true
      refreshList()
    }
  } else {
    adminReady = false
    showLogin()
  }
})

// ── Login ─────────────────────────────────────────────────────────────────────
loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault()
  loginError.classList.add('hidden')
  const btn = loginForm.querySelector('button[type="submit"]')
  btn.disabled = true
  btn.textContent = 'Entrando...'

  try {
    await signIn(loginForm.email.value.trim(), loginForm.password.value)
  } catch {
    loginError.textContent = 'Email ou senha incorretos.'
    loginError.classList.remove('hidden')
    btn.disabled = false
    btn.textContent = 'Entrar'
  }
})

btnSignOut?.addEventListener('click', async () => {
  await signOut()
})

// ── Lista ─────────────────────────────────────────────────────────────────────
async function refreshList() {
  showList()
  await loadAndRenderList(listSection, openEditForm)
}

// ── Formulário ────────────────────────────────────────────────────────────────
btnAddProduct?.addEventListener('click', () => openAddForm())

async function openAddForm() {
  const categories = await getCategories().catch(() => [])
  formSection.innerHTML = renderProductForm(null, categories)
  showForm()
  initProductForm(null, refreshList, showList, categories)
}

async function openEditForm(product) {
  const categories = await getCategories().catch(() => [])
  formSection.innerHTML = renderProductForm(product, categories)
  showForm()
  initProductForm(product, refreshList, showList, categories)
}
