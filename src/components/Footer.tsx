import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert('Obrigado por se inscrever na nossa newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl mb-4 text-primary-foreground">TONINHO AQUI MODAS</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Estilo que marca presença desde 1995. Moda acessível com qualidade para toda a família.
            </p>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl mb-4 text-primary-foreground">NAVEGAÇÃO</h4>
            <ul className="space-y-2 text-sm">
              {['Masculino', 'Feminino', 'Novidades', 'Promoções', 'Sobre nós'].map(link => (
                <li key={link}>
                  <Link to="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-xl mb-4 text-primary-foreground">AJUDA</h4>
            <ul className="space-y-2 text-sm">
              {['Trocas e Devoluções', 'Política de Privacidade', 'Termos de Uso', 'FAQ', 'Fale Conosco'].map(link => (
                <li key={link}>
                  <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xl mb-4 text-primary-foreground">NEWSLETTER</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">Receba ofertas exclusivas e novidades!</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded text-foreground text-sm bg-background placeholder:text-muted-foreground"
                required
              />
              <button type="submit" className="bg-foreground text-background px-4 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/60 text-xs">
          © 2025 Toninho Aqui Modas. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
        </div>
      </div>
    </footer>
  );
};

export default Footer;
