const criadoreImage = "/lovable-uploads/f85da76d-5129-46bb-bc58-2119b31ac2eb.png";
import { Heart, Users, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-verde-claro/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-musgo mb-4">
                Sobre a criadora DOMUS
              </h2>
              <p className="text-lg text-muted-foreground">
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
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-verde rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-musgo" />
                </div>
                <div className="text-2xl font-bold text-musgo">1000+</div>
                <div className="text-sm text-muted-foreground">Famílias</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-verde rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-musgo" />
                </div>
                <div className="text-2xl font-bold text-musgo">5</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-verde rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-musgo" />
                </div>
                <div className="text-2xl font-bold text-musgo">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
            
            {/* Missão */}
            <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-musgo mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          
          {/* Imagem da criadora */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={criadoreImage} 
                alt="Caixa Declarando Bênçãos com card destacado mostrando os 80 temas essenciais" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Elementos decorativos */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-verde-escuro rounded-full opacity-40"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-verde-claro rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;