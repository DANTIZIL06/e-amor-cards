import { Heart, Shield, Lightbulb, Home, Star } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Declarações bíblicas prontas",
    description: "Tenha declarações bíblicas prontas que facilitam a prática diária e evitam dúvidas do que dizer."
  },
  {
    icon: Star,
    title: "Bênçãos no momento certo",
    description: "Use os cards para declarar bênçãos específicas, no momento certo, sobre os desafios ou necessidades dos seus filhos."
  },
  {
    icon: Lightbulb,
    title: "Palavras que produzem frutos",
    description: "Transforme palavras soltas e sem intenção em sementes que produzem frutos eternos."
  },
  {
    icon: Shield,
    title: "Inspire virtudes cristãs",
    description: "Inspire coragem, sabedoria, responsabilidade e pensamentos positivos na vida dos seus filhos."
  },
  {
    icon: Home,
    title: "Ambiente de amor e proteção",
    description: "Promova um ambiente de amor, proteção e segurança espiritual no lar."
  }
];

const NewBenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-leto font-bold text-verde-musgo mb-4">
            Conheça os Benefícios!
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-6 lg:p-8 rounded-xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      className="w-8 h-8 text-verde-musgo" 
                      strokeWidth={2}
                    />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-leto font-bold text-verde-musgo leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed text-base lg:text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16 pt-8 border-t border-secondary/30">
          <div className="text-center">
            <p className="text-lg lg:text-xl font-leto text-verde-musgo italic max-w-3xl mx-auto leading-relaxed">
              "Transforme cada momento em uma oportunidade de abençoar e edificar a vida dos seus filhos com palavras que ecoam na eternidade."
            </p>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBenefitsSection;