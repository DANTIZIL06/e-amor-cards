import { Button } from "@/components/ui/button";
import cardsImage from "@/assets/cards-collection.jpg";
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
    <section id="produto" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem do produto */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={cardsImage} 
                alt="Coleção de 80 cards de bênção DOMUS 2025" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Badge de destaque */}
              <div className="absolute -top-4 -right-4 bg-bordo text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce-soft">
                80 Cards únicos!
              </div>
            </div>
          </div>
          
          {/* Conteúdo informativo */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Título */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-musgo mb-4">
                O que você vai receber
              </h2>
              <p className="text-lg text-muted-foreground">
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
            <div className="space-y-4">
              <Button 
                onClick={scrollToTarget}
                className="btn-primary w-full lg:w-auto px-8"
              >
                <Heart className="w-5 h-5 mr-2" />
                Quero Transformar Nossa Rotina
              </Button>
              <p className="text-sm text-muted-foreground">
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