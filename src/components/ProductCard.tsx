import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.sizes[0], product.colors[0].name);
  };

  return (
    <Link to={`/produto/${product.id}`} className="group block">
      <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-foreground text-background text-[10px] font-bold px-2 py-0.5 rounded">NOVO</span>
            )}
            {product.isPromo && discount > 0 && (
              <span className="bg-brand text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded">-{discount}%</span>
            )}
          </div>
          {/* Quick add */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-brand text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-dark shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="p-3">
          <h3 className="text-sm font-medium text-foreground truncate">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 fill-brand text-brand" />
            <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-brand font-bold text-lg">R$ {product.price.toFixed(2).replace('.', ',')}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-xs line-through">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            até 3x de R$ {(product.price / 3).toFixed(2).replace('.', ',')} sem juros
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
