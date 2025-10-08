import React, { useMemo, useState } from 'react'
import productsData from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const categories = useMemo(() => ['all', ...Array.from(new Set(productsData.map(p => p.category)))], [])

  const products = productsData.filter(p => {
    const q = query.trim().toLowerCase()
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    const matchesCategory = category === 'all' || p.category === category
    return matchesQuery && matchesCategory
  })

  return (
    <div>
      <h1>Products</h1>
      <div className="grid mt-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div>
          <label className="label" htmlFor="q">Search</label>
          <input id="q" className="input" placeholder="Search products..." value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <div>
          <label className="label" htmlFor="c">Category</label>
          <select id="c" className="select" value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div style={{ alignSelf: 'flex-end' }}>
          <div className="badge">{products.length} result(s)</div>
        </div>
      </div>

      <div className="grid products mt-2">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
