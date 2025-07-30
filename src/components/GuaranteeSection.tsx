import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 7 dias",
    description: "100% do seu dinheiro de volta"
  },
  {
    icon: Lock,
    title: "Compra 100% segura",
    description: "Site protegido e certificado"
  },
  {
    icon: Award,
    title: "Qualidade premium",
    description: "Material desenvolvido com cuidado"
  },
  {
    icon: CheckCircle,
    title: "Entrega imediata",
    description: "Acesso instantâneo por email"
  }
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-verde">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-musgo mb-4">
            Compra 100% Segura com Garantia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        
        {/* Grid de garantias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Ícone */}
              <div className="w-16 h-16 bg-verde-claro rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-8 h-8 text-musgo" />
              </div>
              
              {/* Conteúdo */}
              <h3 className="font-bold text-musgo mb-2">
                {guarantee.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Selo de garantia central */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <Shield className="w-6 h-6 text-bordo" />
            <span className="font-bold text-musgo">Garantia de 7 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;