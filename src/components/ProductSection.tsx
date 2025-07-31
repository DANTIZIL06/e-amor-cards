import { Button } from "@/components/ui/button";
const cardsImage = "/lovable-uploads/0077581c-f584-44e7-b091-1a281d9aa385.png";
import { Check, Download, Gift, Heart } from "lucide-react";
const features = ["Lorem ipsum dolor sit amet consectetur", "Adipiscing elit sed do eiusmod tempor", "Incididunt ut labore et dolore magna", "Ut enim ad minim veniam quis nostrud", "Exercitation ullamco laboris nisi ut", "Aliquip ex ea commodo consequat duis"];
const ProductSection = () => {
  const scrollToTarget = () => {
    const element = document.getElementById("comprar");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Declarações de Fé para o Lar
            </h2>
            <p className="text-lg text-muted-foreground">
              Um material cuidadosamente desenvolvido para fortalecer os vínculos familiares através de declarações bíblicas poderosas.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Button onClick={scrollToTarget} className="flex items-center gap-2">
                <Gift className="w-4 h-4" />
                Quero Receber
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Saber Mais
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={cardsImage} 
              alt="Coleção de cartas com declarações bíblicas" 
              className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductSection;