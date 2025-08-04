import { Check, Sparkles } from "lucide-react";

const features = [
  "80 cartas com declarações bíblicas prontas",
  "Mini-guia de uso prático",
  "Molde da caixinha personalizada",
  "Acesso à plataforma de conteúdo",
  "Material com design exclusivo",
  "Formato 100% digital em PDF",
  "Acesso irrestrito e vitalício ao material"
];

const ProductFeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <div className="max-w-5xl mx-auto">
        {/* Child image */}
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/3622e002-2050-4293-887f-25ddd8b38824.png"
            alt="Criança feliz segurando carta"
            className="mx-auto w-[389px] md:w-[432px] lg:w-[518px] h-auto object-contain"
          />
        </div>

        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-leto font-bold text-verde-musgo mb-4">
            Veja tudo que você irá receber:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-[var(--shadow-card)] border border-secondary/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/40 to-secondary/10 border border-secondary/20 hover:from-white/60 hover:to-secondary/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-verde-musgo font-leto font-semibold text-base lg:text-lg leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16 pt-8 border-t border-secondary/30">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-verde-musgo font-leto font-semibold">
              Tudo isso por um preço que vai te surpreender
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeaturesSection;