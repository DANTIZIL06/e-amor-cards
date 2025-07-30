import { Gift, BookOpen, Calendar, Heart, Home, Edit3 } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Devocional \"Minha Boca Profetiza Vida\" (7 dias)",
    description: "Reflexões com base na Bíblia para ajudá-la a transformar sua fala em instrumento de bênção."
  },
  {
    icon: Calendar,
    title: "Planner da Mãe Intercessora",
    description: "Organize suas orações pelos filhos com intenção e constância."
  },
  {
    icon: Gift,
    title: "Caixa de Promessas Bíblicas (PDF + molde)",
    description: "Uma coleção complementar com versículos poderosos, para lembrar diariamente do cuidado de Deus."
  },
  {
    icon: Home,
    title: "Pôster \"Declaração do Lar\" (PDF para impressão)",
    description: "Um quadro para consagrar seu lar à presença de Deus, com uma oração profunda."
  },
  {
    icon: Edit3,
    title: "Cards extras em branco",
    description: "Escreva declarações personalizadas, orações específicas ou recados de amor."
  }
];

const BonusSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-leto font-bold text-verde-musgo leading-tight">
              Comprando hoje, você também receberá
            </h2>
            <Gift className="w-8 h-8 text-primary animate-pulse" />
          </div>
          
          <div className="relative">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-leto font-bold text-primary mb-4">
              BÔNUS ESPECIAIS!
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-secondary/20 p-6 lg:p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-secondary/40 hover:border-primary/30 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent 
                        className="w-7 h-7 text-white" 
                        strokeWidth={2.5}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-leto font-bold text-verde-musgo leading-tight mb-3">
                        {bonus.title}
                      </h4>
                      
                      <p className="text-foreground/80 leading-relaxed text-sm lg:text-base">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/40">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary animate-pulse" />
              <p className="text-xl lg:text-2xl font-leto font-bold text-verde-musgo italic">
                "Tudo isso é seu quando você escolhe transformar sua família hoje!"
              </p>
              <Heart className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <p className="text-lg text-foreground/80 font-leto">
              ✨ Valor total dos bônus: <span className="font-bold text-primary">mais de R$ 200,00</span> - mas hoje é <span className="font-bold text-verde-musgo">GRÁTIS</span> para você!
            </p>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-primary/20 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 right-16 w-4 h-4 bg-accent/30 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 left-8 w-3 h-3 bg-secondary/40 rounded-full animate-pulse opacity-40"></div>
      </div>
    </section>
  );
};

export default BonusSection;