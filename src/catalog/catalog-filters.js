export function filterByCategory(products, category) {
  if (!category || category === 'Todos') return products
  return products.filter(p => p.categoria === category)
}

export function filterByPublico(products, publico) {
  if (!publico || publico === 'Todos') return products
  return products.filter(p => p.publico && p.publico.includes(publico))
}

export function filterBySearch(products, query) {
  if (!query) return products
  const q = query.toLowerCase()
  return products.filter(p =>
    p.nome.toLowerCase().includes(q) ||
    (p.descricao && p.descricao.toLowerCase().includes(q))
  )
}

export function applyFilters(products, { category, publico, search } = {}) {
  let result = products
  result = filterByCategory(result, category)
  result = filterByPublico(result, publico)
  result = filterBySearch(result, search)
  return result
}

export function getCategories(products) {
  const seen = new Set()
  const cats = []
  for (const p of products) {
    if (p.categoria && !seen.has(p.categoria)) {
      seen.add(p.categoria)
      cats.push(p.categoria)
    }
  }
  return cats
}
