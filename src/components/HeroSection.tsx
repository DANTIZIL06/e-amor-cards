import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/ce8d7f28-50a8-4075-a278-1e6b924ce0d7.png";
import { Heart, Star, Gift } from "lucide-react";

const HeroSection = () => {
  const scrollToTarget = () => {
    const element = document.getElementById("comprar");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center px-3 sm:px-6 py-8 sm:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Conteúdo Textual */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Título Principal */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-musgo leading-tight px-2 sm:px-0">
              Transforme a rotina dos seus filhos com a 
              <span className="text-bordo block mt-1">Palavra de Deus</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 px-3 sm:px-0 leading-relaxed">
              São 80 cards com temas essenciais como responsabilidade, pensamentos positivos, superação de medo, sabedoria e muito mais. Todos fundamentados na Palavra de Deus.
            </p>
            
            {/* Lista de benefícios rápidos */}
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:flex-wrap sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <div className="flex items-center gap-2 text-musgo justify-center sm:justify-start">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-bordo fill-current flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">80 Cards únicos</span>
              </div>
              <div className="flex items-center gap-2 text-musgo justify-center sm:justify-start">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-bordo fill-current flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Base bíblica</span>
              </div>
              <div className="flex items-center gap-2 text-musgo justify-center sm:justify-start">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-bordo fill-current flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Prático e amoroso</span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="space-y-3 px-4 sm:px-0">
              <Button 
                onClick={scrollToTarget} 
                className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 w-full sm:w-full lg:w-auto min-h-[50px] sm:min-h-[56px] font-bold"
              >
                Quero o Meu Declarando Bênçãos
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground">
                ✨ Garantia de 7 dias • Compra 100% segura
              </p>
            </div>
          </div>
          
          {/* Imagem Hero */}
          <div className="relative animate-fade-in order-1 lg:order-2 mb-4 lg:mb-0" style={{
            animationDelay: '0.3s'
          }}>
            <div className="relative z-10 px-6 sm:px-0 flex justify-center">
              <img 
                src={heroImage} 
                alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" 
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-none h-auto rounded-2xl shadow-2xl" 
              />
            </div>
            
            {/* Elementos decorativos - otimizados para mobile */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-verde-claro rounded-full opacity-60 animate-bounce-soft"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-verde-escuro rounded-full opacity-40 animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;