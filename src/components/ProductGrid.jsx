import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAddToCart, onView }) {
  return (
    <section id="collection" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Featured Collection</h2>
          <p className="mt-1 text-sm text-zinc-600">Minimalist scents with luminous, glassy notes.</p>
        </div>
        <a href="#" className="text-sm font-semibold text-violet-700 hover:text-violet-800">View all</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onView={onView} />
        ))}
      </div>
    </section>
  );
}
