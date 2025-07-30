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
    <section className="gradient-hero min-h-screen flex items-center justify-center py-5 sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Layout Mobile-First: Stack Vertical */}
        <div className="flex flex-col items-center text-center space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:text-left">
          
          {/* Conteúdo Textual */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Título Principal - Mobile Optimized */}
            <h1 className="text-[26px] leading-tight sm:text-[30px] md:text-4xl lg:text-5xl font-bold text-musgo px-4 lg:px-0">
              Transforme a rotina dos seus filhos com a 
              <span className="text-bordo block">Palavra de Deus</span>
            </h1>
            
            {/* Subtítulo - Mobile Optimized */}
            <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
              São 80 cards com temas essenciais como responsabilidade, pensamentos positivos, superação de medo, sabedoria e muito mais. Todos fundamentados na Palavra de Deus. Uma forma simples e intencional de plantar, todos os dias, palavras que fortalecem a fé, o vínculo emocional e o caráter dos seus filhos.
            </p>
            
            {/* Lista de benefícios - Mobile Stack */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <div className="flex items-center gap-2 text-musgo justify-center lg:justify-start">
                <Heart className="w-5 h-5 text-bordo fill-current" />
                <span className="font-medium text-base">80 Cards únicos</span>
              </div>
              <div className="flex items-center gap-2 text-musgo justify-center lg:justify-start">
                <Gift className="w-5 h-5 text-bordo fill-current" />
                <span className="font-medium text-base">Base bíblica</span>
              </div>
              <div className="flex items-center gap-2 text-musgo justify-center lg:justify-start">
                <Star className="w-5 h-5 text-bordo fill-current" />
                <span className="font-medium text-base">Prático e amoroso</span>
              </div>
            </div>
            
            {/* Call to Action - Mobile Optimized */}
            <div className="space-y-4 px-4 lg:px-0">
              <Button 
                onClick={scrollToTarget} 
                className="btn-primary text-base w-4/5 lg:w-auto min-h-[44px] px-6 py-3 lg:px-12 lg:py-6 lg:text-xl mx-auto lg:mx-0 block lg:inline-flex"
              >
                Quero o Meu Declarando Bênçãos
              </Button>
              <p className="text-sm text-muted-foreground">
                ✨ Garantia de 7 dias • Compra 100% segura
              </p>
            </div>
          </div>
          
          {/* Imagem Hero - Mobile First */}
          <div className="relative animate-fade-in order-1 lg:order-2 w-full max-w-[300px] lg:max-w-none mx-auto" style={{
            animationDelay: '0.3s'
          }}>
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Elementos decorativos otimizados para mobile */}
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-8 h-8 lg:w-24 lg:h-24 bg-verde-claro rounded-full opacity-60 animate-bounce-soft"></div>
            <div className="absolute -bottom-2 -left-2 lg:-bottom-6 lg:-left-6 w-12 h-12 lg:w-32 lg:h-32 bg-verde-escuro rounded-full opacity-40 animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;