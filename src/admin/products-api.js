import { supabase } from '../lib/supabase.js'

const CATALOG_CACHE_KEY = 'cds_catalog_cache'
function invalidateCatalogCache() {
  try {
    sessionStorage.removeItem(CATALOG_CACHE_KEY)
    localStorage.setItem('cds_catalog_modified', Date.now().toString())
  } catch {}
}

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('ordem')
  if (error) throw error
  return data
}

export async function saveProduct(product) {
  // Valida nome duplicado (case-insensitive, ignora o próprio produto ao editar)
  const { data: existing } = await supabase
    .from('products')
    .select('id, nome')
    .ilike('nome', product.nome.trim())
  const duplicate = (existing || []).find(p => !product.id || String(p.id) !== String(product.id))
  if (duplicate) throw new Error(`Já existe um produto com o nome "${duplicate.nome}".`)

  if (product.id) {
    const { id, created_at, ...fields } = product
    const { data, error } = await supabase
      .from('products')
      .update(fields)
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    invalidateCatalogCache()
    return data
  } else {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single()
    if (error) throw error
    invalidateCatalogCache()
    return data
  }
}

export async function deleteProduct(id) {
  const { error } = await supabase
    .from('products')
    .update({ ativo: false })
    .eq('id', id)
  if (error) throw error
  invalidateCatalogCache()
}

export async function hardDeleteProduct(id) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)
  if (error) throw error
  invalidateCatalogCache()
}
