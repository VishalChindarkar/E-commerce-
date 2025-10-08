import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate network request
    await new Promise(r => setTimeout(r, 1000))
    clearCart()
    navigate('/')
    alert('Order placed successfully!')
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="grid mt-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <section className="card">
          <h2>Shipping info</h2>
          <div className="mt-2 grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label className="label" htmlFor="fn">First name</label>
              <input id="fn" className="input" required />
            </div>
            <div>
              <label className="label" htmlFor="ln">Last name</label>
              <input id="ln" className="input" required />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="label" htmlFor="addr">Address</label>
              <input id="addr" className="input" required />
            </div>
            <div>
              <label className="label" htmlFor="city">City</label>
              <input id="city" className="input" required />
            </div>
            <div>
              <label className="label" htmlFor="zip">ZIP</label>
              <input id="zip" className="input" required />
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Order summary</h2>
          <ul className="mt-1" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {items.map(i => (
              <li key={i.id} className="row space-between" style={{ padding: '8px 0' }}>
                <span>{i.title} × {i.qty}</span>
                <span>${(i.price * i.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="row space-between mt-2" style={{ fontWeight: 700 }}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="btn mt-2" disabled={submitting}>
            {submitting ? 'Placing order…' : 'Place order'}
          </button>
        </section>
      </form>
    </div>
  )
}
