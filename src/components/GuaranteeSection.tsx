import { Shield, Lock, Award, CheckCircle } from "lucide-react";
const guarantees = [{
  icon: Shield,
  title: "Garantia de 7 dias",
  description: "100% do seu dinheiro de volta"
}, {
  icon: Lock,
  title: "Compra 100% segura",
  description: "Site protegido e certificado"
}, {
  icon: Award,
  title: "Qualidade premium",
  description: "Material desenvolvido com cuidado"
}, {
  icon: CheckCircle,
  title: "Entrega imediata",
  description: "Acesso instantâneo por email"
}];
const GuaranteeSection = () => {
  return <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-verde">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
            Compra 100% Segura com Garantia
          </h2>
          
        </div>
        
        {/* Grid de garantias */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guarantees.map((guarantee, index) => <div key={index} className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Ícone */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-verde-claro rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                <guarantee.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-musgo" />
              </div>
              
              {/* Conteúdo */}
              <h3 className="font-bold text-musgo mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                {guarantee.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {guarantee.description}
              </p>
            </div>)}
        </div>
        
        {/* Selo de garantia central */}
        <div className="text-center mt-8 sm:mt-12 animate-fade-in" style={{
        animationDelay: '0.5s'
      }}>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-lg mx-2 sm:mx-0">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-bordo" />
            <span className="font-bold text-musgo text-xs sm:text-sm md:text-base">Garantia de 7 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </section>;
};
export default GuaranteeSection;