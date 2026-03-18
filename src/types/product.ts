export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  icon: 'moon' | 'eye-off' | 'armchair' | 'flame' | 'cloud' | 'gift';
  gradient: [string, string];
}