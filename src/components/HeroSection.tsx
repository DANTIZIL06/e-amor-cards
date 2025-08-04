import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/8913a2e2-9f3b-4107-9976-36c6a93009e4.png";
import { Heart, Star, Gift } from "lucide-react";
const HeroSection = () => {
  const scrollToTarget = () => {
    const element = document.getElementById("oferta-final");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="gradient-hero min-h-screen flex items-center justify-center px-3 sm:px-6 py-12 sm:py-16 md:pt-16 md:pb-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 md:items-start items-center">
          {/* Conteúdo Textual */}
          <div className="text-center lg:text-left space-y-4 animate-fade-in">
            {/* Badge de novidade */}
            
            
            {/* Título Principal */}
            <h1 className="text-[32px] sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#506853] leading-[1.4] sm:leading-tight text-center lg:text-left max-w-[96vw] sm:max-w-none mx-auto lg:mx-0" style={{
            wordBreak: 'normal',
            whiteSpace: 'normal'
          }}>
              Palavras são sementes. Escolha plantar <span className="text-[#8A262E]">bênçãos</span> no coração dos seus filhos
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base sm:text-base md:text-lg text-muted-foreground max-w-[92vw] sm:max-w-xl mx-auto lg:mx-0">São <span className="font-bold">80 cards com temas essenciais</span> como responsabilidade, pensamentos positivos, superação de medo, sabedoria e muito mais. <span className="font-bold">Todos fundamentados na Palavra de Deus.</span> Uma forma simples e intencional de plantar, todos os dias, palavras que fortalecem a fé, o vínculo emocional e o caráter dos seus filhos.</p>
            
            {/* Lista de benefícios rápidos */}
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-musgo justify-center sm:justify-start">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-bordo fill-current" />
                <span className="font-medium text-sm sm:text-base">80 Cards únicos</span>
              </div>
              <div className="flex items-center gap-2 text-musgo justify-center sm:justify-start">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-bordo fill-current" />
                <span className="font-medium text-sm sm:text-base">Base bíblica</span>
              </div>
              <div className="flex items-center gap-2 text-musgo justify-center sm:justify-start">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-bordo fill-current" />
                <span className="font-medium text-sm sm:text-base">Prático e amoroso</span>
              </div>
            </div>
            
            {/* Imagem Hero - Visível apenas no mobile */}
            <div className="relative animate-fade-in lg:hidden -my-3" style={{
            animationDelay: '0.3s'
          }}>
              <div className="relative z-10">
                <img src={heroImage} alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" className="w-full max-w-[90vw] h-auto rounded-2xl mx-auto" />
              </div>
              
              {/* Elementos decorativos - reduzidos no mobile */}
              <div className="absolute top-1 right-1 w-12 h-12 bg-verde-claro rounded-full opacity-60 animate-bounce-soft"></div>
              <div className="absolute bottom-0 left-1 w-16 h-16 bg-verde-escuro rounded-full opacity-40 animate-pulse-soft transform translate-y-1/2"></div>
            </div>
            
            {/* Call to Action */}
            <div className="space-y-4">
              <button onClick={scrollToTarget} className="btn-primary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 w-full lg:w-auto min-h-[48px] bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-leto font-bold group relative overflow-hidden animate-pulse-gentle">
                <span className="relative z-10">Quero Meu Declarando Bênçãos</span>
                
                {/* Subtle gradient overlay for extra appeal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <p className="text-xs sm:text-sm text-muted-foreground">
                ✨ Garantia de 7 dias • Compra 100% segura
              </p>
            </div>
          </div>
          
          {/* Imagem Hero - Visível apenas no desktop */}
          <div className="relative animate-fade-in mt-8 lg:mt-0 hidden lg:block" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative z-10">
              <img src={heroImage} alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" className="w-full max-w-[400px] sm:max-w-none h-auto rounded-2xl mx-auto" />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-12 h-12 sm:w-24 sm:h-24 bg-verde-claro rounded-full opacity-60 animate-bounce-soft"></div>
            <div className="absolute bottom-0 left-1 sm:bottom-0 sm:left-2 w-16 h-16 sm:w-32 sm:h-32 bg-verde-escuro rounded-full opacity-40 animate-pulse-soft transform translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;