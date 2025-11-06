import React from 'react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2">
        <div className="aspect-square w-full bg-gradient-to-br from-violet-50 to-fuchsia-50">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-zinc-900">{product.name}</h3>
            <button onClick={onClose} className="text-zinc-500 hover:text-zinc-800">✕</button>
          </div>
          <p className="mt-2 text-sm text-zinc-600">{product.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-zinc-200 p-3">
              <p className="text-zinc-500">Top Notes</p>
              <p className="mt-1 font-medium text-zinc-800">{product.topNotes.join(', ')}</p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-3">
              <p className="text-zinc-500">Base Notes</p>
              <p className="mt-1 font-medium text-zinc-800">{product.baseNotes.join(', ')}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-lg font-bold text-violet-700">${product.price.toFixed(2)}</span>
            <button
              onClick={() => onAddToCart(product)}
              className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
