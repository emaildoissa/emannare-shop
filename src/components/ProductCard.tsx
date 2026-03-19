import React from 'react';
import { type Product } from '../types/product';
import ProductIcon from './ProductIcon';

interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, index }) => {
  return (
    <div 
      onClick={() => onClick(product)}
      className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-brand-text/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className="flex items-center justify-center relative overflow-hidden h-64"
        style={{ background: `linear-gradient(135deg, ${product.gradient[0]}15, ${product.gradient[1]}10)` }}
      >
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <ProductIcon icon={product.icon} gradient={product.gradient} size={140} />
        )}
      </div>
      <div className="p-5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-text/40">{product.category}</span>
        <h3 className="mt-1 text-xl font-bold font-serif text-brand-text">{product.name}</h3>
        <p className="mt-1.5 text-sm text-brand-text/50 leading-relaxed">{product.shortDesc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-brand-primary">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </span>
          <button className="px-4 py-2 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary hover:scale-105 active:scale-95 transition-all">
            Ver mais →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;