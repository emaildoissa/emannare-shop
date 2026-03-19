import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png"; // Importação direta da tua imagem

const Header = () => {
  const navLinks = [
    { name: "Terapias", href: "/terapias" },
    { name: "Loja", href: "/loja" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Área do Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoImg} 
            alt="Emannare Logo" 
            className="h-12 md:h-16 w-auto object-contain" 
          />
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-[#9168CC] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Espaço para botão ou ícone de carrinho se necessário */}
        <div className="w-[100px] md:block hidden"></div>
      </div>
    </header>
  );
};

export default Header;