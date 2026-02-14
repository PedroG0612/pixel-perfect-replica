import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/50 z-50" onClick={() => setIsCartOpen(false)} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in flex flex-col" style={{ animationDirection: 'normal', transform: 'translateX(0)' }}>
        {/* Header */}
        <div className="bg-brand text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-display text-xl">CARRINHO ({totalItems})</span>
          </div>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
              <p className="text-lg font-medium">Seu carrinho está vazio</p>
              <p className="text-sm mt-1">Adicione produtos para começar!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-3 p-3 bg-secondary rounded-lg animate-fade-in">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-24 object-cover rounded" />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/produto/${item.product.id}`}
                      className="text-sm font-semibold text-foreground hover:text-brand truncate block"
                      onClick={() => setIsCartOpen(false)}
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-0.5">Tam: {item.size} | Cor: {item.color}</p>
                    <p className="text-brand font-bold mt-1">R$ {item.product.price.toFixed(2).replace('.', ',')}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="w-7 h-7 rounded bg-muted flex items-center justify-center hover:bg-border transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="w-7 h-7 rounded bg-muted flex items-center justify-center hover:bg-border transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeItem(item.product.id, item.size, item.color)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-brand">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <button className="w-full bg-brand hover:bg-brand-dark text-primary-foreground py-3 rounded-lg font-display text-xl tracking-wide transition-colors">
              FINALIZAR COMPRA
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
