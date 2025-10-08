import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeFromCart, updateQty, cartTotal } = useCart()

  if (!items.length) {
    return (
      <div>
        <h1>Your cart is empty</h1>
        <p className="mt-1">Browse products and add items to your cart.</p>
        <div className="mt-2"><Link className="btn" to="/products">Go to products</Link></div>
      </div>
    )
  }

  return (
    <div>
      <h1>Cart</h1>
      <table className="table mt-2" role="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="row" style={{ gap: 12 }}>
                <div className="card-img" style={{ width: 56, height: 42, fontSize: 18 }}>{item.emoji || '🛍️'}</div>
                <div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div className="badge">{item.category}</div>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  className="input"
                  style={{ width: 72 }}
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={e => updateQty(item.id, Number(e.target.value))}
                />
              </td>
              <td>${(item.price * item.qty).toFixed(2)}</td>
              <td>
                <button className="btn secondary" onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row space-between mt-2">
        <div className="badge">Taxes and shipping calculated at checkout.</div>
        <div className="row" style={{ gap: 14, alignItems: 'center' }}>
          <div style={{ fontWeight: 700 }}>Total: ${cartTotal.toFixed(2)}</div>
          <Link className="btn" to="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  )
}
