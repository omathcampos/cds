import { supabase } from '../lib/supabase.js'

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('ordem')
  if (error) throw error
  return data
}

export async function saveCategory({ nome, ordem = 0 }) {
  const { data, error } = await supabase
    .from('categories')
    .insert({ nome: nome.trim(), ordem })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteCategory(id) {
  // Checa se há produtos usando esta categoria
  const { data: produtos } = await supabase
    .from('products')
    .select('id')
    .eq('categoria', (await supabase.from('categories').select('nome').eq('id', id).single()).data?.nome)
    .limit(1)

  if (produtos?.length > 0) {
    throw new Error('Essa categoria tem produtos vinculados. Mova ou exclua os produtos primeiro.')
  }

  const { error } = await supabase.from('categories').delete().eq('id', id)
  if (error) throw error
}
