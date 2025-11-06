import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onShopNow }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-violet-100 via-white to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-white/10" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-violet-700 shadow-sm ring-1 ring-violet-200 backdrop-blur">
          New • Limited Batch
        </span>
        <h1 className="mt-5 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
          The Fragrance of Creativity
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-700 sm:text-lg">
          A modern collection of minimalist perfumes inspired by light, glass, and motion. Crafted in small batches, designed to be noticed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onShopNow}
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600/40"
          >
            Shop the Collection
          </button>
          <a
            href="#collection"
            className="rounded-full border border-zinc-200 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-800 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
          >
            Explore Scents
          </a>
        </div>
      </div>
    </section>
  );
}
