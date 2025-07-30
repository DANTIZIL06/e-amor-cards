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
      <div className="max-w-6xl mx-auto text-center">
        <img 
          src={cardsImage} 
          alt="Cards Collection" 
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button onClick={scrollToTarget} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
          <Gift className="w-5 h-5 mr-2" />
          Quero o Meu Agora
        </Button>
      </div>
    </section>
  );
};
export default ProductSection;