import { Button } from "@/components/ui/button";
const cardsImage = "/lovable-uploads/0077581c-f584-44e7-b091-1a281d9aa385.png";
import { Check, Download, Gift, Heart } from "lucide-react";

const features = [
  "Lorem ipsum dolor sit amet consectetur",
  "Adipiscing elit sed do eiusmod tempor",
  "Incididunt ut labore et dolore magna",
  "Ut enim ad minim veniam quis nostrud",
  "Exercitation ullamco laboris nisi ut",
  "Aliquip ex ea commodo consequat duis"
];

const ProductSection = () => {
  const scrollToTarget = () => {
    const element = document.getElementById("comprar");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produto" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Imagem do produto */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative px-4 sm:px-0">
              <img 
                src={cardsImage} 
                alt="Declarando Bênçãos - Cards de Autoconfiança e Autodisciplina baseados na Palavra de Deus" 
                className="w-full max-w-[300px] sm:max-w-none h-auto rounded-2xl shadow-2xl mx-auto"
              />
              
              {/* Badge de destaque - ajustado para mobile */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-bordo text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm animate-bounce-soft">
                80 Cards únicos!
              </div>
            </div>
          </div>
          
          {/* Conteúdo informativo */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            {/* Título */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
                O que você vai receber
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2 sm:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            {/* Lista de características */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-verde-escuro rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-musgo" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Destaque especial */}
            <div className="bg-gradient-verde p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-bordo" />
                </div>
                <div>
                  <h3 className="font-bold text-musgo mb-2">Bônus Especial</h3>
                  <p className="text-muted-foreground text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="space-y-4 text-center lg:text-left px-4 sm:px-0">
              <Button 
                onClick={scrollToTarget}
                className="btn-primary w-full lg:w-auto px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base min-h-[48px]"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Quero Transformar Nossa Rotina
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground">
                💝 Entrega imediata por email • Material digital de alta qualidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;