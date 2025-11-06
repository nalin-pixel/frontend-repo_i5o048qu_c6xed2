import React from 'react';

export default function Cart({ items, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <aside className="sticky top-4 h-fit w-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-zinc-900">Your Cart</h3>
      {items.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-600">Your cart is empty.</p>
      ) : (
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-zinc-800">{item.name}</p>
                <p className="text-xs text-zinc-500">Qty: {item.qty}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-zinc-900">${(item.price * item.qty).toFixed(2)}</span>
                <button
                  className="text-xs text-zinc-500 hover:text-zinc-800"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-zinc-200 pt-4">
        <span className="text-sm text-zinc-600">Subtotal</span>
        <span className="text-base font-semibold text-zinc-900">${subtotal.toFixed(2)}</span>
      </div>
      <button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="mt-4 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Checkout Securely
      </button>
    </aside>
  );
}
