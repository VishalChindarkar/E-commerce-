import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  return (
    <div className="card">
      <Link to={`/products/${product.id}`}>
        <div className="card-img">{product.emoji || '🛍️'}</div>
      </Link>
      <div className="badge">{product.category}</div>
      <div className="card-title">{product.title}</div>
      <div className="row space-between">
        <div className="card-price">${product.price.toFixed(2)}</div>
        <button className="btn" onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}
