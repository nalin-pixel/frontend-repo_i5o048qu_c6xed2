import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button className="sm:hidden p-2 rounded-lg hover:bg-zinc-100" aria-label="Menu"><Menu size={18} /></button>
          <a href="#" className="text-lg font-semibold tracking-tight text-zinc-900">atelier.glass</a>
        </div>
        <nav className="hidden gap-6 text-sm text-zinc-700 sm:flex">
          <a href="#collection" className="hover:text-zinc-900">Collection</a>
          <a href="#about" className="hover:text-zinc-900">About</a>
          <a href="#support" className="hover:text-zinc-900">Support</a>
        </nav>
        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-2 text-sm font-medium text-zinc-800">
          <ShoppingBag size={18} />
          <span>Cart</span>
          <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-zinc-900 px-1 text-xs font-semibold text-white">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
