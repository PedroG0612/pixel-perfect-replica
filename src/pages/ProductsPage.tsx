import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Filter, X, ChevronDown } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || '');
  const [selectedGender, setSelectedGender] = useState(searchParams.get('genero') || '');
  const [selectedSize, setSelectedSize] = useState('');
  const filtroParam = searchParams.get('filtro') || '';

  const allCategories = [...new Set(products.map(p => p.category))];
  const allSizes = [...new Set(products.flatMap(p => p.sizes))];

  const filtered = useMemo(() => {
    let result = [...products];

    if (filtroParam === 'novidades') result = result.filter(p => p.isNew);
    if (filtroParam === 'promocoes') result = result.filter(p => p.isPromo);
    if (selectedGender) result = result.filter(p => p.gender === selectedGender);
    if (selectedCategory) {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase() || p.gender === selectedCategory);
    }
    if (selectedSize) result = result.filter(p => p.sizes.includes(selectedSize));

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'new') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return result;
  }, [filtroParam, selectedGender, selectedCategory, selectedSize, sortBy]);

  const pageTitle = filtroParam === 'novidades' ? 'NOVIDADES' : filtroParam === 'promocoes' ? 'PROMOÇÕES' : selectedGender ? selectedGender.toUpperCase() : 'TODOS OS PRODUTOS';

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedGender('');
    setSelectedSize('');
    setSortBy('relevance');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Page header */}
      <div className="brand-gradient py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl text-primary-foreground">{pageTitle}</h1>
          <p className="text-primary-foreground/70 mt-2">{filtered.length} produtos encontrados</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
          >
            <Filter className="w-4 h-4" /> Filtros
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-8 text-sm font-medium cursor-pointer"
            >
              <option value="relevance">Relevância</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="new">Novidades</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="bg-secondary rounded-xl p-6 mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl text-brand">FILTROS</h3>
              <button onClick={clearFilters} className="text-sm text-muted-foreground hover:text-brand flex items-center gap-1">
                <X className="w-3 h-3" /> Limpar
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Gênero</label>
                <div className="flex flex-wrap gap-2">
                  {['masculino', 'feminino', 'unissex'].map(g => (
                    <button
                      key={g}
                      onClick={() => setSelectedGender(selectedGender === g ? '' : g)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedGender === g ? 'bg-brand text-primary-foreground' : 'bg-background text-foreground hover:bg-muted'}`}
                    >
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Categoria</label>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(selectedCategory === c ? '' : c)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === c ? 'bg-brand text-primary-foreground' : 'bg-background text-foreground hover:bg-muted'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Tamanho</label>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(s => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(selectedSize === s ? '' : s)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedSize === s ? 'bg-brand text-primary-foreground' : 'bg-background text-foreground hover:bg-muted'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-display text-muted-foreground">NENHUM PRODUTO ENCONTRADO</p>
            <button onClick={clearFilters} className="mt-4 text-brand font-semibold hover:underline">Limpar filtros</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;
