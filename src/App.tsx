import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Instagram, Facebook } from 'lucide-react';
import { products, categories } from './data/products';
import { type Product } from './types/product';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Esc para fechar modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedProduct(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5 animate-slide-down">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold font-serif tracking-tight">Ateliê Terapêutico</h1>
            <p className="text-xs sm:text-sm opacity-60">Produtos artesanais para relaxamento e bem-estar</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-brand-bg rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform">
            <MessageCircle size={18} />
            Fale no WhatsApp
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-brand-bg to-[#F0EDE8] animate-fade-up">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-primary/10 text-brand-primary mb-6">
            ✨ Artesanal & Natural
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold font-serif leading-tight">
            Conforto que cuida<br /> de você por inteiro
          </h2>
          <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto opacity-60 leading-relaxed">
            Cada peça é feita à mão com materiais naturais selecionados, pensada para trazer alívio, relaxamento e bem-estar ao seu dia a dia.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <nav className="py-8 bg-brand-bg sticky top-[84px] sm:top-[88px] z-30">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-brand-primary border-transparent text-brand-bg shadow-md' 
                  : 'bg-transparent border-brand-text/15 text-brand-text hover:bg-brand-text/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* PRODUCT GRID */}
      <main className="pb-24">
        <div className="max-w-6xl mx-auto px-5">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} onClick={setSelectedProduct} />
              ))}
            </div>
          ) : (
            <p className="text-center py-20 opacity-40 text-lg animate-fade-in">Nenhum produto encontrado nesta categoria.</p>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-text text-brand-bg py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-serif">Ateliê Terapêutico</h3>
              <p className="mt-2 text-sm opacity-60">Feito com carinho, entregue com cuidado.</p>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-70">
              <Phone size={16} />
              <span>(11) 99999-0000</span>
            </div>
            <div className="flex gap-5">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Icon size={22} /></a>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 text-center text-[10px] opacity-20 border-t border-brand-bg/10 uppercase tracking-[0.2em]">
            © 2026 Ateliê Terapêutico — Todos os direitos reservados
          </div>
        </div>
      </footer>

      {/* MODAL SYSTEM */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default App;