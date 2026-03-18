import './style.css'
import { navbar }       from './sections/navbar.js'
import { hero }         from './sections/hero.js'
import { paraQuem }     from './sections/para-quem.js'
import { produtos }     from './sections/produtos.js'
import { comoFunciona } from './sections/como-funciona.js'
import { sobre }        from './sections/sobre.js'
import { clientes }     from './sections/clientes.js'
import { ctaFinal }     from './sections/cta-final.js'
import { footer }       from './sections/footer.js'
import { floatButton }  from './sections/float-button.js'
import { fetchFeatured } from './catalog/catalog-api.js'
import { renderProductGrid } from './catalog/catalog-render.js'

// ── Montar HTML ───────────────────────────────────────────────────────────────
document.getElementById('app').innerHTML =
  navbar() +
  hero() +
  paraQuem() +
  produtos() +
  comoFunciona() +
  sobre() +
  clientes() +
  ctaFinal() +
  footer() +
  floatButton()


// ── Navbar: scroll effect ─────────────────────────────────────────────────────
const navEl = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navEl.classList.add('navbar-scroll')
  } else {
    navEl.classList.remove('navbar-scroll')
  }
}, { passive: true })

// ── Menu mobile ───────────────────────────────────────────────────────────────
const menuBtn    = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const bar1       = document.getElementById('bar1')
const bar2       = document.getElementById('bar2')
const bar3       = document.getElementById('bar3')

let menuOpen = false

menuBtn?.addEventListener('click', () => {
  menuOpen = !menuOpen
  mobileMenu.classList.toggle('hidden', !menuOpen)
  bar1.style.transform = menuOpen ? 'translateY(8px) rotate(45deg)' : ''
  bar2.style.opacity   = menuOpen ? '0' : '1'
  bar3.style.transform = menuOpen ? 'translateY(-8px) rotate(-45deg)' : ''
})

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false
    mobileMenu.classList.add('hidden')
    bar1.style.transform = ''
    bar2.style.opacity   = '1'
    bar3.style.transform = ''
  })
})

// ── Intersection Observer: reveal animations ─────────────────────────────────
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Pega delay da classe delay-XXX se houver
      const delayClass = Array.from(entry.target.classList).find(c => c.startsWith('delay-'))
      if (delayClass) {
        const ms = parseInt(delayClass.replace('delay-', ''))
        setTimeout(() => entry.target.classList.add('visible'), ms)
      } else {
        entry.target.classList.add('visible')
      }
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

revealEls.forEach(el => observer.observe(el))

// ── Hidratar grid de produtos com dados do Supabase ───────────────────────────
fetchFeatured().then(products => {
  const grid = document.getElementById('produtos-grid')
  if (!grid) return
  grid.innerHTML = renderProductGrid(products)
  grid.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
})

// ── Smooth scroll para links âncora ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href').slice(1)
    const target = document.getElementById(id)
    if (target) {
      e.preventDefault()
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  })
})
