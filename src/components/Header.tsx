import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { label: 'Masculino', href: '/produtos?genero=masculino' },
  { label: 'Feminino', href: '/produtos?genero=feminino' },
  { label: 'Novidades', href: '/produtos?filtro=novidades' },
  { label: 'Promoções', href: '/produtos?filtro=promocoes' },
  { label: 'Coleções', href: '/produtos' },
  { label: 'Lojas', href: '/lojas' },
  { label: 'Contato', href: '/contato' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <header className="bg-brand sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="font-display text-primary-foreground text-2xl md:text-4xl tracking-wider leading-none">
              TONINHO<span className="text-primary-foreground/80 text-lg md:text-2xl ml-1">AQUI MODAS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-brand-dark px-3 py-2 rounded text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-brand-dark animate-slide-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary/20 px-4 py-3 rounded text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
