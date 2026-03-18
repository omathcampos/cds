import { supabase } from '../lib/supabase.js'
import { FALLBACK_PRODUCTS } from './fallback-data.js'

const CACHE_KEY = 'cds_catalog_cache'
const CACHE_TTL = 10 * 60 * 1000 // 10 minutes

function getCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) {
      sessionStorage.removeItem(CACHE_KEY)
      return null
    }
    return data
  } catch {
    return null
  }
}

function setCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {
    // sessionStorage indisponível — ignora silenciosamente
  }
}

export async function fetchCatalog() {
  const cached = getCache()
  if (cached) return cached

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('ativo', true)
      .order('ordem')

    if (error) throw error

    setCache(data)
    return data
  } catch (err) {
    console.warn('[CDS] Supabase indisponível, usando fallback:', err.message)
    return FALLBACK_PRODUCTS
  }
}

export async function fetchFeatured() {
  const all = await fetchCatalog()
  return all.filter(p => p.destaque).slice(0, 6)
}
