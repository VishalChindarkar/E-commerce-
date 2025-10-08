import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()

const STORAGE_KEY = 'shopx_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
      }
      return [...prev, { ...product, qty }]
    })
  }

  const removeFromCart = (id) => setItems(prev => prev.filter(i => i.id !== id))

  const updateQty = (id, qty) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i))

  const clearCart = () => setItems([])

  const { count, total } = useMemo(() => {
    const count = items.reduce((a, b) => a + b.qty, 0)
    const total = items.reduce((a, b) => a + b.price * b.qty, 0)
    return { count, total }
  }, [items])

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    cartCount: count,
    cartTotal: total
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
