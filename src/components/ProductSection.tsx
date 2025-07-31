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
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={cardsImage} 
              alt="Coleção de cartas com declarações bíblicas" 
              className="w-full rounded-2xl shadow-[var(--shadow-card)]"
            />
          </div>

          {/* Product Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-leto font-bold text-primary mb-6">
                Transforme as palavras em sua casa
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Uma coleção especial de cartas com declarações bíblicas poderosas para abençoar seus filhos todos os dias.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToTarget}
                size="lg" 
                className="flex-1 h-14 text-lg font-semibold"
              >
                <Gift className="w-5 h-5 mr-2" />
                Quero minha coleção
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="flex-1 h-14 text-lg font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Ver exemplo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductSection;