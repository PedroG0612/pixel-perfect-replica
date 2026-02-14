import { Link } from 'react-router-dom';
import { Truck, MapPin, User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const PreHeader = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="bg-brand text-primary-foreground text-xs md:text-sm">
      <div className="container mx-auto flex items-center justify-between py-1.5 px-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Frete grátis acima de R$ 199</span>
            <span className="sm:hidden">Frete grátis +R$199</span>
          </span>
          <Link to="/lojas" className="flex items-center gap-1 hover:underline">
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Acompanhar pedido</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/contato" className="flex items-center gap-1 hover:underline">
            <User className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Login / Criar conta</span>
            <span className="sm:hidden">Login</span>
          </Link>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1 hover:underline relative"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-foreground text-background rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
