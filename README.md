# React E-Commerce Shop

A modern React e-commerce demo built with Vite, React Router, and Context API.

## Features
- Product catalog with search/filter hooks ready
- Product details pages
- Cart with add/update/remove and persistence via localStorage
- Checkout form (mock submit)
- Responsive layout, accessible components

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run the dev server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

4. Preview the production build
```bash
npm run preview
```

## Structure
```
src/
  components/
  context/
  data/
  pages/
  assets/
```

## Notes
- No backend is required. All data is mock in `src/data/products.js`.
- Cart state is persisted in `localStorage`.
