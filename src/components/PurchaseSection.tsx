import { Button } from "@/components/ui/button";
import { Check, Heart, Star, Gift, CreditCard, Smartphone } from "lucide-react";

const PurchaseSection = () => {
  const features = [
    "80 Cards únicos com base bíblica",
    "Acesso imediato por email",
    "Material digital de alta qualidade",
    "Orientações de uso incluídas",
    "Garantia de 7 dias",
    "Suporte via WhatsApp"
  ];

  return (
    <section id="comprar" className="py-20 px-4 bg-gradient-verde">
      <div className="container mx-auto max-w-4xl">
        {/* Título da seção */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-bordo text-white px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">OFERTA ESPECIAL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-musgo mb-4">
            Transforme a rotina da sua família hoje
          </h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        
        {/* Card de compra */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="p-8 md:p-12">
            {/* Preço */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground line-through">De R$ 97,00</span>
                <span className="bg-bordo text-white px-2 py-1 rounded text-sm font-bold">50% OFF</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-musgo mb-2">
                R$ 47<span className="text-2xl">,00</span>
              </div>
              <p className="text-muted-foreground">Pagamento único • Acesso vitalício</p>
            </div>
            
            {/* Lista de benefícios */}
            <div className="mb-8">
              <h3 className="font-bold text-musgo mb-4 text-center">O que está incluso:</h3>
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
            </div>
            
            {/* Botão de compra principal */}
            <div className="space-y-4 mb-6">
              <Button className="btn-primary w-full text-xl py-6">
                <Heart className="w-6 h-6 mr-2" />
                Sim, quero transformar nossa rotina!
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                🔒 Compra 100% segura • Entrega imediata • Garantia de 7 dias
              </p>
            </div>
            
            {/* Métodos de pagamento */}
            <div className="border-t border-muted pt-6">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Formas de pagamento aceitas:
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-sm">Cartão</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Smartphone className="w-5 h-5" />
                  <span className="text-sm">PIX</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Gift className="w-5 h-5" />
                  <span className="text-sm">Boleto</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Urgência */}
          <div className="bg-bordo text-white p-4 text-center">
            <p className="font-semibold">
              ⏰ Oferta por tempo limitado • Apenas hoje com 50% de desconto
            </p>
          </div>
        </div>
        
        {/* Garantia final */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="w-8 h-8 bg-verde-claro rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-musgo" />
            </div>
            <span className="text-musgo font-medium">Garantia incondicional de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;