import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featured = products.slice(0, 4)
  return (
    <div className="home">
      <section className="hero">
        <h1>Discover products you’ll love</h1>
        <p>Browse our curated selection of tech, apparel and home goods. Fast, modern, and secure shopping experience.</p>
        <div className="actions mt-2">
          <Link className="btn" to="/products">Shop now</Link>
          <a className="btn secondary" href="#featured">View featured</a>
        </div>
      </section>

      <section id="featured" className="mt-3">
        <div className="row space-between">
          <h2>Featured</h2>
          <Link className="nav-link" to="/products">View all →</Link>
        </div>
        <div className="grid products mt-2">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
