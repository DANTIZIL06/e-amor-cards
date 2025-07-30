const criadoreImage = "/lovable-uploads/f85da76d-5129-46bb-bc58-2119b31ac2eb.png";
import { Heart, Users, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-verde-claro/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
                Sobre a criadora DOMUS
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2 sm:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-verde rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-musgo" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-musgo">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Famílias</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-verde rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-musgo" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-musgo">5</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-verde rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-musgo" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-musgo">4.9</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
            
            {/* Missão */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-[var(--shadow-card)] mx-2 sm:mx-0">
              <h3 className="font-bold text-musgo mb-2 sm:mb-3 text-center lg:text-left">Nossa Missão</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          
          {/* Imagem da criadora */}
          <div className="animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative px-4 sm:px-0">
              <img 
                src={criadoreImage} 
                alt="Caixa Declarando Bênçãos com card destacado mostrando os 80 temas essenciais" 
                className="w-full max-w-[300px] sm:max-w-none h-auto rounded-2xl shadow-2xl mx-auto"
              />
              
              {/* Elementos decorativos - reduzidos no mobile */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-24 sm:h-24 bg-verde-escuro rounded-full opacity-40"></div>
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-16 sm:h-16 bg-verde-claro rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;