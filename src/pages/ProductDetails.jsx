import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find(p => String(p.id) === id)
  const { addToCart } = useCart()

  if (!product) return <div>Product not found.</div>

  return (
    <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
      <div className="card" style={{ minHeight: 320, display: 'grid', placeItems: 'center' }}>
        <div style={{ fontSize: 72 }}>{product.emoji || '🛒'}</div>
      </div>
      <div>
        <div className="badge">{product.category}</div>
        <h1 style={{ marginBottom: 8 }}>{product.title}</h1>
        <p style={{ color: 'var(--muted)' }}>{product.description}</p>
        <div className="row space-between mt-2">
          <div>
            <div className="card-price" style={{ fontSize: 24 }}>${product.price.toFixed(2)}</div>
            <div className="badge">In stock</div>
          </div>
          <button className="btn" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
