import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { type Product } from '../types/product';
import ProductIcon from './ProductIcon';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-bg rounded-3xl shadow-2xl animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-brand-text hover:rotate-90 transition-transform"
        >
          <X size={20} />
        </button>

        <div 
          className={`flex items-center justify-center relative overflow-hidden ${product.image ? 'h-80' : 'py-16'}`}
          style={{ background: `linear-gradient(135deg, ${product.gradient[0]}20, ${product.gradient[1]}15)` }}
        >
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <ProductIcon icon={product.icon} gradient={product.gradient} size={200} />
          )}
        </div>

        <div className="p-6 sm:p-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary">
            {product.category}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-serif text-brand-text">{product.name}</h2>
          <p className="mt-4 text-base text-brand-text/60 leading-relaxed">{product.fullDesc}</p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {product.benefits.map((benefit, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-primary/5 text-brand-primary">
                ✓ {benefit}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-brand-text/10">
            <span className="text-3xl font-bold text-brand-primary">
               {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
            </span>
            <button className="flex-1 w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-brand-bg rounded-full text-sm font-bold shadow-lg hover:scale-[1.03] active:scale-95 transition-all">
              <MessageCircle size={20} />
              Comprar via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;