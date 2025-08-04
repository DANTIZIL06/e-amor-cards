import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/94734f48-8f9a-4077-a747-f1e0bfc9234e.png";
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
          <div className="text-center lg:text-left space-y-3">
            {/* Título Principal */}
            <h1 className="text-[32px] sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#506853] leading-[1.4] sm:leading-tight text-center lg:text-left max-w-[96vw] sm:max-w-none mx-auto lg:mx-0" style={{
            wordBreak: 'normal',
            whiteSpace: 'normal'
          }}>
              Palavras são sementes. Escolha plantar <span className="text-[#8A262E]">bênçãos</span> no coração dos seus filhos
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base sm:text-base md:text-lg text-muted-foreground max-w-[92vw] sm:max-w-xl mx-auto lg:mx-0">São <span className="font-bold">80 cards com temas essenciais</span> como responsabilidade, pensamentos positivos, superação de medo, sabedoria e muito mais. <span className="font-bold">Todos fundamentados na Palavra de Deus.</span> Uma forma simples e intencional de plantar, todos os dias, palavras que fortalecem a fé, o vínculo emocional e o caráter dos seus filhos.</p>
            
            {/* Imagem Hero - Visível apenas no mobile */}
            <div className="lg:hidden pt-2 pb-1">
              <img src={heroImage} alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" className="w-full max-w-[90vw] h-auto rounded-2xl mx-auto" />
            </div>
            
            {/* Call to Action */}
            <div className="space-y-3 pt-1">
              <button onClick={scrollToTarget} className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 w-full lg:w-auto min-h-[48px] bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-leto font-bold animate-pulse-gentle">
                Quero Meu Declarando Bênçãos
              </button>
              <p className="text-xs sm:text-sm text-muted-foreground">
                ✨ Garantia de 7 dias • Compra 100% segura
              </p>
            </div>
          </div>
          
          {/* Imagem Hero - Visível apenas no desktop */}
          <div className="mt-8 lg:mt-0 hidden lg:block">
            <img src={heroImage} alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" className="w-full max-w-[400px] sm:max-w-none h-auto rounded-2xl mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;