import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onView }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-square w-full bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-zinc-900">{product.name}</h3>
          <span className="text-sm font-bold text-violet-700">${product.price.toFixed(2)}</span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{product.notes}</p>

        <div className="mt-3 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className={i < Math.round(product.rating) ? '' : 'text-zinc-300'} fill="currentColor" />
          ))}
          <span className="ml-1 text-xs text-zinc-500">({product.reviews})</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onView(product)}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
          >
            Details
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-lg bg-zinc-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
