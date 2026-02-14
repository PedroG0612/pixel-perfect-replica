import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Star, ChevronLeft, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-brand">PRODUTO NÃO ENCONTRADO</h1>
          <Link to="/produtos" className="text-brand font-semibold hover:underline mt-4 inline-block">Voltar aos produtos</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0].name;
    addItem(product, size, color, quantity);
  };

  const related = products.filter(p => p.id !== product.id && (p.category === product.category || p.gender === product.gender)).slice(0, 4);
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <Link to="/produtos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Voltar aos produtos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-secondary">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${idx === selectedImage ? 'border-brand' : 'border-transparent hover:border-border'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="animate-fade-up" style={{ opacity: 0 }}>
            <div className="flex items-center gap-2 mb-2">
              {product.isNew && <span className="bg-foreground text-background text-xs font-bold px-2 py-0.5 rounded">NOVO</span>}
              {product.isPromo && <span className="bg-brand text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">-{discount}% OFF</span>}
            </div>
            <h1 className="text-3xl md:text-4xl text-foreground font-body font-bold">{product.name}</h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand text-brand' : 'text-border'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} avaliações)</span>
            </div>

            <div className="mt-4">
              {product.originalPrice && (
                <span className="text-muted-foreground line-through text-lg">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
              )}
              <div className="text-brand text-4xl font-bold font-display tracking-wide">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>
              <p className="text-muted-foreground text-sm mt-1">até 3x de R$ {(product.price / 3).toFixed(2).replace('.', ',')} sem juros</p>
            </div>

            {/* Color selection */}
            <div className="mt-6">
              <label className="text-sm font-semibold text-foreground block mb-2">Cor: {selectedColor || product.colors[0].name}</label>
              <div className="flex gap-2">
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${(selectedColor || product.colors[0].name) === c.name ? 'border-brand scale-110' : 'border-border'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <label className="text-sm font-semibold text-foreground block mb-2">Tamanho</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[48px] h-10 px-3 rounded-lg border-2 text-sm font-medium transition-all ${(selectedSize || product.sizes[0]) === s ? 'border-brand bg-brand text-primary-foreground' : 'border-border hover:border-brand text-foreground'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-brand hover:bg-brand-dark text-primary-foreground py-3 px-8 rounded-lg font-display text-xl tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" /> ADICIONAR AO CARRINHO
              </button>
            </div>

            {/* Perks */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: 'Frete grátis +R$199' },
                { icon: RotateCcw, label: 'Troca grátis 30 dias' },
                { icon: Shield, label: 'Compra segura' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 text-brand mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="font-display text-xl text-brand mb-3">DESCRIÇÃO</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl text-brand mb-6">VOCÊ TAMBÉM VAI GOSTAR</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;
