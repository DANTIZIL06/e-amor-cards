import { Heart } from "lucide-react";

const FinalOfferSection = () => {
  return (
    <section id="oferta-final" className="py-12 px-4 bg-gradient-to-b from-background via-secondary/10 to-secondary/20">
      <div className="max-w-2xl mx-auto">
        {/* Container compacto da oferta */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center animate-fade-in">
          
          {/* Imagem do produto */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/57fea017-e616-4f05-a997-b1878bbacc01.png"
              alt="Produtos Declarando Bênçãos"
              className="w-full max-w-lg mx-auto h-auto object-contain"
            />
          </div>

          {/* Preço parcelado */}
          <div className="mb-4">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold font-leto" style={{ color: '#8A262E' }}>
              4x R$7,49
            </p>
          </div>

          {/* Preço à vista */}
          <div className="mb-4">
            <p className="text-lg sm:text-xl font-leto" style={{ color: '#506853' }}>
              ou R$29,90 à vista
            </p>
          </div>

          {/* Texto de urgência */}
          <div className="mb-6">
            <p className="text-sm sm:text-base font-bold font-leto tracking-wide" style={{ color: '#506853' }}>
              OFERTA ESPECIAL POR TEMPO LIMITADO
            </p>
          </div>

          {/* Botão CTA */}
          <div>
            <a
              href="https://pay.cakto.com.br/9eteqvz_485076"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block"
            >
              <button className="btn-primary w-full min-h-[48px] text-base sm:text-lg md:text-xl px-6 py-4 sm:px-8 sm:py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-leto font-bold group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-center">Quero meu Declarando Bênçãos</span>
                  <Heart className="w-5 h-5 group-hover:animate-pulse flex-shrink-0" />
                </span>
                
                {/* Subtle gradient overlay for extra appeal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOfferSection;