import { type Product } from '../types/product';

export const categories = ["Todos", "Travesseiros Terapêuticos", "Máscaras", "Almofadas", "Outros"] as const;

export const products: Product[] = [
  {
    id: 1, name: "Travesseiro Cervical Herbal", category: "Travesseiros Terapêuticos",
    price: 189.90, shortDesc: "Alívio para dores no pescoço com ervas naturais.",
    fullDesc: "Travesseiro ergonômico recheado com sementes de linhaça e lavanda, moldando-se ao formato do pescoço para alívio de tensões e dores cervicais.",
    benefits: ["Alívio de dor cervical", "Aromaterapia natural", "Lavável"],
    icon: "moon", gradient: ["#A8C5A0", "#6B8F71"]
  },
  {
    id: 2, name: "Máscara de Olhos Relaxante", category: "Máscaras",
    price: 79.90, shortDesc: "Bloqueio total de luz com toque aveludado.",
    fullDesc: "Máscara de seda natural com recheio de sementes de mostarda, pode ser usada aquecida ou resfriada para alívio de enxaquecas e tensão ocular.",
    benefits: ["Alívio de enxaqueca", "Aquece e resfria", "Seda natural"],
    icon: "eye-off", gradient: ["#C4A98D", "#9B7B5E"]
  },
  {
    id: 3, name: "Almofada Lombar Anatômica", category: "Almofadas",
    price: 149.90, shortDesc: "Suporte ergonômico para a lombar.",
    fullDesc: "Design anatômico com espuma viscoelástica revestida em tecido de algodão orgânico. Ideal para uso em cadeiras de escritório ou carro.",
    benefits: ["Suporte lombar", "Espuma viscoelástica", "Algodão orgânico"],
    icon: "armchair", gradient: ["#B8A9C9", "#7E6B99"]
  },
  {
    id: 4, name: "Bolsa Térmica de Sementes", category: "Outros",
    price: 59.90, shortDesc: "Compressas quentes ou frias naturais.",
    fullDesc: "Bolsa artesanal recheada com sementes de linhaça e ervas aromáticas. Aqueça no micro-ondas ou resfrie no freezer para alívio muscular.",
    benefits: ["Uso quente e frio", "Ervas aromáticas", "100% natural"],
    icon: "flame", gradient: ["#E8A87C", "#C47A4E"]
  },
  {
    id: 5, name: "Travesseiro de Trigo Sarraceno", category: "Travesseiros Terapêuticos",
    price: 219.90, shortDesc: "Conforto adaptável com cascas naturais.",
    fullDesc: "Recheado com cascas de trigo sarraceno que se adaptam ao contorno da cabeça, proporcionando suporte firme e ventilação natural durante o sono.",
    benefits: ["Ventilação natural", "Altura ajustável", "Hipoalergênico"],
    icon: "cloud", gradient: ["#9BBEC7", "#5D8A94"]
  },
  {
    id: 6, name: "Kit Spa em Casa", category: "Outros",
    price: 299.90, shortDesc: "Máscara + bolsa térmica + sachê de ervas.",
    fullDesc: "Kit completo para momentos de relaxamento: inclui máscara de olhos de seda, bolsa térmica de sementes e sachê de lavanda para aromatizar o ambiente.",
    benefits: ["Kit completo", "Presente perfeito", "Embalagem especial"],
    icon: "gift", gradient: ["#D4A5A5", "#A67272"]
  }
];