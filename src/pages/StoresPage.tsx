import { Store, Phone, Clock, MapPin } from 'lucide-react';
import { stores } from '@/data/products';

const StoresPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="brand-gradient py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl text-primary-foreground">NOSSAS LOJAS</h1>
          <p className="text-primary-foreground/70 mt-2">Encontre a loja mais perto de você</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stores.map(store => (
            <div key={store.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-brand">{store.name.toUpperCase()}</h3>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" /> {store.address}</p>
                    <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand flex-shrink-0" /> {store.phone}</p>
                    <p className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" /> {store.hours}</p>
                  </div>
                  {/* Map embed placeholder */}
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      title={store.name}
                      src={`https://www.google.com/maps?q=${store.lat},${store.lng}&z=15&output=embed`}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default StoresPage;
