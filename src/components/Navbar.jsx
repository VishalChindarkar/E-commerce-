import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cartCount } = useCart()
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brand-badge" />
          <span>ShopX</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/products">Products</NavLink>
          <NavLink className="cart-link" to="/cart" aria-label={`Cart with ${cartCount} items`}>
            <span>Cart</span>
            <strong>({cartCount})</strong>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
