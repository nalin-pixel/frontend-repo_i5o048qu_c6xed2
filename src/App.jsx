import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';

const SAMPLE_PRODUCTS = [
  {
    id: 'glass-01',
    name: 'Glass No. 1',
    price: 128,
    rating: 4.8,
    reviews: 214,
    notes: 'Iridescent citrus with crystalline musk.',
    image: 'https://images.unsplash.com/photo-1584961818182-12c443d7d1fc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbGFzcyUyME5vLiUyMDF8ZW58MHwwfHx8MTc2MjQzMjI3OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'A luminous blend of yuzu zest, white tea, and clean musk. Minimal yet expressive — like light passing through frosted glass.',
    topNotes: ['Yuzu', 'White Tea', 'Pear'],
    baseNotes: ['Crystal Musk', 'Ambroxan'],
  },
  {
    id: 'glass-02',
    name: 'Glass No. 2',
    price: 142,
    rating: 4.6,
    reviews: 167,
    notes: 'Soft lilac over cool mineral woods.',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
    description:
      'Translucent florals meet clean woods for a balanced, modern aura that lingers without overpowering.',
    topNotes: ['Lilac', 'Bergamot'],
    baseNotes: ['Atlas Cedar', 'Mineral Woods'],
  },
  {
    id: 'glass-03',
    name: 'Glass No. 3',
    price: 156,
    rating: 4.9,
    reviews: 298,
    notes: 'Sheer vanilla with airy iris and salt.',
    image: 'https://images.unsplash.com/photo-1643114451805-f14ea7bb0dfb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbGFzcyUyME5vLiUyMDN8ZW58MHwwfHx8MTc2MjQzMjI4MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Weightless warmth: a drift of vanilla absolute lifted by iris and a hint of sea salt for that radiant-skin feeling.',
    topNotes: ['Iris', 'Sea Salt'],
    baseNotes: ['Vanilla Absolute', 'Cashmere Woods'],
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);

  const products = useMemo(() => SAMPLE_PRODUCTS, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCheckout = () => {
    // In a full app, this would redirect to payment. Here we simply simulate.
    alert('Checkout successful! Thank you for your order.');
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight text-zinc-900">atelier.glass</a>
          <nav className="hidden gap-6 text-sm text-zinc-700 sm:flex">
            <a href="#collection" className="hover:text-zinc-900">Collection</a>
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#support" className="hover:text-zinc-900">Support</a>
          </nav>
          <div className="text-sm font-medium text-zinc-700">Cart ({cart.reduce((n, i) => n + i.qty, 0)})</div>
        </div>
      </header>

      {/* Hero with Spline */}
      <Hero onShopNow={() => {
        const el = document.getElementById('collection');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProductGrid products={products} onAddToCart={addToCart} onView={setSelected} />
        </div>
        <div className="md:col-span-1">
          <Cart items={cart} onRemove={removeFromCart} onCheckout={handleCheckout} />
        </div>
      </main>

      {/* Footer */}
      <footer id="about" className="border-t border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm text-zinc-600">Small-batch fragrances made in Grasse. Vegan, cruelty-free, and refillable.</p>
            </div>
            <div className="text-sm text-zinc-600">
              <p>Shipping worldwide</p>
              <p className="mt-1">Free returns within 30 days</p>
            </div>
            <div className="text-sm text-zinc-600">
              <p>Support: care@atelier.glass</p>
              <p className="mt-1">Instagram · TikTok · Pinterest</p>
            </div>
          </div>
          <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} atelier.glass — All rights reserved.</p>
        </div>
      </footer>

      <ProductModal product={selected} onClose={() => setSelected(null)} onAddToCart={addToCart} />
    </div>
  );
}
