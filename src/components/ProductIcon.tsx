import React from 'react';
import { Moon, EyeOff, Armchair, Flame, Cloud, Gift } from 'lucide-react';

interface ProductIconProps {
  icon: string;
  gradient: [string, string];
  size?: number;
}

const ProductIcon: React.FC<ProductIconProps> = ({ icon, gradient, size = 120 }) => {
  const IconMap = {
    moon: Moon,
    'eye-off': EyeOff,
    armchair: Armchair,
    flame: Flame,
    cloud: Cloud,
    gift: Gift,
  };

  const SelectedIcon = IconMap[icon as keyof typeof IconMap] || Moon;

  return (
    <div 
      className="relative flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
      style={{ 
        width: size, 
        height: size, 
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` 
      }}
    >
      <div className="absolute top-2 right-2 w-10 h-10 bg-white/10 rounded-full" />
      <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/5 rounded-full" />
      <SelectedIcon className="text-white opacity-90" size={size * 0.4} strokeWidth={1.5} />
    </div>
  );
};

export default ProductIcon;