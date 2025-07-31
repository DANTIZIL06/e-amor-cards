const criadoreImage = "/lovable-uploads/f85da76d-5129-46bb-bc58-2119b31ac2eb.png";
import { Heart, Users, Star } from "lucide-react";
const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
            Sobre a Criadora
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold text-musgo">
                  Mãe e Educadora
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Uma jornada de amor e dedicação que resultou neste material especial para fortalecer 
                os laços familiares através da fé e das bênçãos declaradas sobre os filhos.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-semibold text-musgo">+1000</p>
                  <p className="text-xs text-muted-foreground">Famílias</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                  <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-semibold text-musgo">5.0</p>
                  <p className="text-xs text-muted-foreground">Avaliação</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <img 
                src={criadoreImage}
                alt="Criadora do material DOMUS"
                className="w-full max-w-md mx-auto rounded-2xl shadow-[var(--shadow-card)] hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;