import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Percent, Zap } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import heroBanner from '@/assets/hero-banner.jpg';

const HomePage = () => {
  const promoProducts = products.filter(p => p.isPromo);
  const newProducts = products.filter(p => p.isNew);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Toninho Aqui Modas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 brand-gradient opacity-80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-primary-foreground/20">
              Nova Coleção Verão 2025
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-4">
              ESTILO QUE MARCA PRESENÇA
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg font-body">
              Descubra as últimas tendências em moda com preços que cabem no seu bolso. Vista-se com atitude!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/produtos"
                className="bg-primary-foreground text-brand px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-primary-foreground/90 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                VER COLEÇÃO <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/produtos?filtro=promocoes"
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2"
              >
                PROMOÇÕES <Percent className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="bg-foreground text-background py-3">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
          {[
            { icon: Zap, text: 'Frete Grátis +R$199' },
            { icon: TrendingUp, text: 'Até 60% OFF' },
            { icon: Star, text: 'Parcele em 3x sem juros' },
          ].map(({ icon: Icon, text }, i) => (
            <span key={i} className="flex items-center gap-2 font-medium">
              <Icon className="w-4 h-4 text-brand" /> {text}
            </span>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-brand">CATEGORIAS</h2>
            <p className="text-muted-foreground mt-2">Encontre o que procura</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <Link
                key={cat.slug}
                to={`/produtos?categoria=${cat.slug}`}
                className={`group relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up stagger-${idx % 4 + 1}`}
                style={{ opacity: 0 }}
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-primary-foreground text-xl md:text-2xl">{cat.name.toUpperCase()}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promos */}
      <section className="py-12 md:py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl text-brand">PROMOÇÕES</h2>
              <p className="text-muted-foreground mt-1">Ofertas imperdíveis</p>
            </div>
            <Link to="/produtos?filtro=promocoes" className="text-brand font-semibold hover:underline flex items-center gap-1 text-sm">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {promoProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="brand-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl text-primary-foreground mb-4">ATÉ 60% OFF</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
            Aproveite nossas promoções exclusivas e renove seu guarda-roupa!
          </p>
          <Link
            to="/produtos?filtro=promocoes"
            className="inline-flex items-center gap-2 bg-primary-foreground text-brand px-10 py-4 rounded-lg font-bold text-xl hover:bg-primary-foreground/90 transition-all shadow-xl"
          >
            COMPRAR AGORA <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* New arrivals */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl text-brand">NOVIDADES</h2>
              <p className="text-muted-foreground mt-1">Acabou de chegar</p>
            </div>
            <Link to="/produtos?filtro=novidades" className="text-brand font-semibold hover:underline flex items-center gap-1 text-sm">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
