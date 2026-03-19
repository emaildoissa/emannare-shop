import { type Product } from '../types/product';
import imgTravesseirinho from '../assets/produtosImg/Travesseirinho  de ervas para sono tranquilo.png';
import imgMascara from '../assets/produtosImg/Mascara de ervas para descanso mental e bom sono.png';
import imgAlmofada from '../assets/produtosImg/Almofada térmica  fria ou quente.png';
import imgKit from '../assets/produtosImg/Kit mamãe bebê .png';
import imgCesta from '../assets/produtosImg/Cesta de Páscoa .png';
import imgMascaraKids from '../assets/produtosImg/Máscara  de ervas para criança.png';

export const categories = ["Todos", "Kits", "Travesseiros Terapêuticos", "Máscaras", "Almofadas"] as const;

export const products: Product[] = [



  {
    id: 7, name: "Travesseirinho de ervas para sono tranquilo", category: "Travesseiros Terapêuticos",
    price: 53.00, shortDesc: "Relaxamento e bem-estar para suas noites.",
    fullDesc: "Travesseirinho recheado com ervas calmantes cuidadosamente selecionadas para proporcionar um sono tranquilo, agradável e revitalizante.",
    benefits: ["Sono tranquilo", "Aroma calmante", "Bem-estar natural"],
    icon: "moon", gradient: ["#82A284", "#5C765E"],
    image: imgTravesseirinho
  },
  {
    id: 8, name: "Mascara de ervas para descanso mental e bom sono", category: "Máscaras",
    price: 44.00, shortDesc: "Relaxamento profundo e descanso mental.",
    fullDesc: "Máscara terapêutica formulada com um mix de ervas relaxantes para aliviar o estresse, as tensões do dia a dia e proporcionar um descanso reparador ao corpo e à mente.",
    benefits: ["Melhora o sono", "Alívio de tensão", "Bloqueio de luz"],
    icon: "eye-off", gradient: ["#A8C5A0", "#6B8F71"],
    image: imgMascara
  },
  {
    id: 9, name: "Almofada térmica fria ou quente", category: "Almofadas",
    price: 62.00, shortDesc: "Compressas terapêuticas na temperatura ideal.",
    fullDesc: "Almofada térmica versátil que pode ser usada tanto aquecida quanto resfriada. Ideal para diminuir dores musculares, cólicas e inflamações, promovendo relaxamento natural do corpo.",
    benefits: ["Aquece e resfria", "Alívio muscular", "Relaxamento"],
    icon: "flame", gradient: ["#E8A87C", "#C47A4E"],
    image: imgAlmofada
  },
  {
    id: 10, name: "Kit mamãe bebê", category: "Kits",
    price: 98.00, shortDesc: "Momentos de tranquilidade para a mamãe e o bebê.",
    fullDesc: "Conjunto pensado para o bem-estar: Almofada térmica para cólicas, Travesseirinho de ervas para um bom soninho, Chás para banho do bebê, e ainda Máscara de ervas para o descanso da mamãe e escalda pés.",
    benefits: ["Alívio de cólicas", "Descanso profundo", "Cuidado materno"],
    icon: "gift", gradient: ["#D4A5A5", "#A67272"],
    image: imgKit
  },
  {
    id: 11, name: "Cesta de Páscoa", category: "Kits",
    price: 98.00, shortDesc: "O presente terapêutico perfeito para renovação.",
    fullDesc: "Cesta de Páscoa recheada de bem-estar contendo: Travesseirinho de ervas, Almofada térmica, Máscara para dormir e Escalda pés. Um verdadeiro carinho em forma de presente para quem você quer cuidar.",
    benefits: ["Mix completo de produtos", "Relaxamento total", "Perfeito para presente"],
    icon: "gift", gradient: ["#E8A87C", "#C47A4E"],
    image: imgCesta
  },
  {
    id: 12, name: "Máscara de ervas para criança", category: "Máscaras",
    price: 35.00, shortDesc: "Sono aconchegante e tranquilo para os pequenos.",
    fullDesc: "Máscara especialmente feita para as crianças, utilizando um mix de ervas extremamente suaves que acalmam, relaxam e criam um ambiente super leve para a hora de dormir.",
    benefits: ["Acalma a criança", "Aroma suave", "Diminui a agitação"],
    icon: "eye-off", gradient: ["#B8A9C9", "#7E6B99"],
    image: imgMascaraKids
  }
];