import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length > 100) errs.name = 'Nome é obrigatório (máx. 100 caracteres)';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'E-mail inválido';
    if (!form.subject.trim()) errs.subject = 'Assunto é obrigatório';
    if (!form.message.trim() || form.message.trim().length > 1000) errs.message = 'Mensagem é obrigatória (máx. 1000 caracteres)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="brand-gradient py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl text-primary-foreground">CONTATO</h1>
          <p className="text-primary-foreground/70 mt-2">Estamos aqui para ajudar</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: 'Telefone', info: '(11) 3456-7890', sub: 'Seg a Sex, 8h às 18h' },
              { icon: Mail, title: 'E-mail', info: 'contato@toninhoaquimodas.com.br', sub: 'Respondemos em até 24h' },
              { icon: MapPin, title: 'Endereço', info: 'Rua Augusta, 1508', sub: 'Centro, São Paulo - SP' },
              { icon: MessageSquare, title: 'WhatsApp', info: '(11) 99999-9999', sub: 'Atendimento rápido' },
            ].map(({ icon: Icon, title, info, sub }) => (
              <div key={title} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-brand font-medium text-sm">{info}</p>
                  <p className="text-muted-foreground text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-brand-light rounded-xl p-8 text-center animate-scale-in">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-brand mb-2">MENSAGEM ENVIADA!</h3>
                <p className="text-muted-foreground">Obrigado pelo contato. Retornaremos em breve!</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-brand font-semibold hover:underline text-sm">Enviar outra mensagem</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-5">
                <h3 className="font-display text-2xl text-brand mb-2">ENVIE SUA MENSAGEM</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-1">Nome</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      placeholder="Seu nome"
                    />
                    {errors.name && <p className="text-brand text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-1">E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <p className="text-brand text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground block mb-1">Assunto</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    maxLength={200}
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    placeholder="Assunto da mensagem"
                  />
                  {errors.subject && <p className="text-brand text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground block mb-1">Mensagem</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                    placeholder="Escreva sua mensagem..."
                  />
                  {errors.message && <p className="text-brand text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-dark text-primary-foreground py-3 rounded-lg font-display text-xl tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" /> ENVIAR MENSAGEM
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
