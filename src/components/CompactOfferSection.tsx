import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const CompactOfferSection = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-verde-claro">
      <div className="container mx-auto max-w-2xl text-center">
        {/* Product Image */}
        <div className="mb-6 sm:mb-8">
          <img 
            src="/lovable-uploads/776bca37-4aa5-498f-8ce2-399bc7e52748.png" 
            alt="Coleção DOMUS - Produtos Cristãos"
            className="mx-auto max-w-full h-auto max-h-[300px] sm:max-h-[400px] object-contain"
          />
        </div>

        {/* Pricing */}
        <div className="mb-2">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2" style={{ color: '#8A262E' }}>
            4x R$7,49
          </div>
          <div className="text-lg sm:text-xl mb-3" style={{ color: '#506853' }}>
            ou R$29,90 à vista
          </div>
        </div>

        {/* Urgency Text */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base font-semibold tracking-wide" style={{ color: '#506853' }}>
            OFERTA ESPECIAL POR TEMPO LIMITADO
          </p>
        </div>

        {/* CTA Button */}
        <Button className="btn-primary w-full max-w-md text-base sm:text-lg md:text-xl py-4 sm:py-5 md:py-6 min-h-[48px]">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          Sim, quero transformar nossa rotina!
        </Button>
      </div>
    </section>
  );
};

export default CompactOfferSection;