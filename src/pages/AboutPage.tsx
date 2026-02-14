import { Heart, Users, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="brand-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl text-primary-foreground">SOBRE NÓS</h1>
          <p className="text-primary-foreground/70 mt-3 text-lg max-w-2xl mx-auto">
            Desde 1995 vestindo o Brasil com estilo, qualidade e preço justo
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Story */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-brand mb-6">NOSSA HISTÓRIA</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A Toninho Aqui Modas nasceu em 1995 na cidade de São Paulo, com uma pequena loja no centro da cidade. 
            O sonho do fundador, Seu Toninho, era simples: oferecer moda de qualidade com preços acessíveis para 
            todos os brasileiros. O que começou como um pequeno negócio familiar, hoje se transformou em uma das 
            maiores redes de moda do país, com mais de 50 lojas espalhadas por todo o Brasil.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            Nossa missão continua a mesma: democratizar a moda e fazer com que cada cliente se sinta especial 
            ao vestir nossas peças. Acreditamos que estilo não tem preço, e por isso trabalhamos todos os dias 
            para entregar o melhor produto com o melhor preço.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, value: '5M+', label: 'Clientes satisfeitos' },
            { icon: Award, value: '50+', label: 'Lojas no Brasil' },
            { icon: Heart, value: '29', label: 'Anos de história' },
            { icon: TrendingUp, value: '10K+', label: 'Produtos' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-brand-light rounded-xl p-6 text-center">
              <Icon className="w-8 h-8 text-brand mx-auto mb-3" />
              <div className="font-display text-4xl text-brand">{value}</div>
              <p className="text-muted-foreground text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="brand-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl text-primary-foreground mb-8">NOSSOS VALORES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ACESSIBILIDADE', desc: 'Moda de qualidade com preço justo para todos.' },
              { title: 'INOVAÇÃO', desc: 'Sempre acompanhando as tendências e trazendo novidades.' },
              { title: 'COMPROMISSO', desc: 'Respeito ao cliente é o nosso diferencial.' },
            ].map(v => (
              <div key={v.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-display text-2xl text-primary-foreground mb-2">{v.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
