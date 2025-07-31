import { Heart, Star, Clock } from "lucide-react";

const FinalOfferSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background via-secondary/10 to-secondary/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-leto font-bold text-verde-musgo leading-tight mb-4">
            Todos esses produtos deveriam custar{" "}
            <span className="text-bordo line-through decoration-4">+ de R$255,00</span>
          </h2>
          
          {/* Subtítulo com urgência */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-leto">
            Mas, somente nesta oferta, o valor promocional que você irá investir hoje para começar a declarar bênçãos intencionalmente sobre seus filhos, que os impactarão por toda a vida, é de apenas:
          </p>
        </div>

        {/* Container principal da oferta */}
        <div className="bg-white rounded-3xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-500 p-8 sm:p-10 md:p-12 border border-secondary/30 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          
          {/* Selo de oferta especial */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-bordo to-primary text-white px-3 py-1 sm:px-6 sm:py-2 rounded-full shadow-xl animate-pulse-gentle">
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 hidden xs:block" />
                <span className="font-leto font-bold text-xs sm:text-sm md:text-base text-center">
                  OFERTA ESPECIAL POR TEMPO LIMITADO
                </span>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse hidden xs:block" />
              </div>
            </div>
          </div>

          {/* Imagem dos produtos */}
          <div className="mb-10 mt-8">
            <img 
              src="/lovable-uploads/cd942f4d-4482-45fd-abbe-d16d6aea726d.png"
              alt="Todos os produtos e bônus inclusos"
              className="w-full max-w-4xl mx-auto"
            />
          </div>

          {/* Preços em destaque */}
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-br from-verde-claro to-secondary p-8 rounded-2xl shadow-lg border border-secondary/50">
              <div className="mb-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-leto font-bold text-verde-musgo mb-2">
                  4x de <span className="text-bordo text-4xl sm:text-5xl md:text-6xl">R$7,49</span>
                </p>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                <p className="text-xl sm:text-2xl md:text-3xl font-leto font-bold text-verde-musgo">
                  ou Pagamento único <span className="text-bordo">R$29,90</span>
                </p>
              </div>
              
              {/* Elementos decorativos */}
              <div className="flex justify-center items-center gap-4 text-verde-musgo">
                <Star className="w-6 h-6 animate-pulse" />
                <Heart className="w-8 h-8 text-bordo animate-pulse" fill="currentColor" />
                <Star className="w-6 h-6 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Botão CTA Principal */}
          <div className="text-center">
            <a
              href="https://pay.cakto.com.br/9eteqvz_485076"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-block"
            >
              <button className="btn-primary w-full lg:w-auto min-h-[48px] text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-leto font-bold group relative overflow-hidden animate-pulse-gentle">
                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-center whitespace-nowrap">Quero meu Declarando Bênçãos</span>
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-pulse flex-shrink-0" />
                </span>
                
                {/* Subtle gradient overlay for extra appeal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </a>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="font-leto text-sm sm:text-base">Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="font-leto text-sm sm:text-base">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="font-leto text-sm sm:text-base">Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-verde-claro rounded-full opacity-30 animate-bounce-soft"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-verde-escuro rounded-full opacity-40 animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-5 w-6 h-6 bg-secondary rounded-full animate-bounce-soft"></div>
      </div>
    </section>
  );
};

export default FinalOfferSection;