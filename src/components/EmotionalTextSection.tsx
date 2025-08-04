const EmotionalTextSection = () => {
  return (
    <section className="py-12 lg:py-10 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradiente de fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-verde-claro/20 via-background to-verde-escuro/30"></div>
      
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-verde-claro/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-verde-escuro/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
          {/* Texto emocional à esquerda */}
          <div className="text-left animate-fade-in">
            <div className="relative">
              {/* Linha decorativa sutil */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-verde-claro via-verde-escuro to-transparent rounded-full opacity-60"></div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-[1.7] max-w-[600px] mb-4 lg:mb-0 font-leto font-medium">
                Na correria do dia a dia, acabamos dizendo coisas que nunca quisemos dizer aos nossos filhos. Mas mesmo sem intenção, essas{" "}
                <span className="font-bold text-verde-musgo relative">
                  palavras deixam marcas, e moldam quem eles serão amanhã.
                  {/* Underline sutil animado */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-verde-claro to-verde-escuro transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
                </span>{" "}
                Toda palavra planta uma semente. E com o tempo, ela dá frutos: de medo… ou de fé. De insegurança… ou de identidade.
              </p>
            </div>
          </div>
          
          {/* Imagem do produto à direita */}
          <div className="flex justify-center lg:justify-end animate-fade-in mt-4 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Container da imagem - Mobile compacto, Desktop com efeitos */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-lg xl:max-w-xl relative lg:group">
                {/* Efeitos visuais apenas no desktop */}
                <div className="hidden lg:block absolute -inset-4 bg-gradient-to-br from-verde-claro/30 to-verde-escuro/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="hidden lg:block absolute -inset-2 bg-gradient-to-br from-verde-claro/40 via-transparent to-verde-escuro/40 rounded-xl opacity-50"></div>
                
                <img 
                  src="/lovable-uploads/1abba028-8653-4e2f-a88f-3ac782682791.png" 
                  alt="Produto DOMUS 2025 - Declarando Bênçãos"
                  className="w-full h-auto rounded-xl object-contain relative z-10 lg:transform lg:transition-transform lg:duration-500 lg:group-hover:scale-[1.02] lg:filter lg:drop-shadow-lg"
                />
                
                {/* Reflexo sutil apenas no desktop */}
                <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent rounded-xl pointer-events-none"></div>
              </div>
              
              {/* Partículas decorativas apenas no desktop */}
              <div className="hidden lg:block absolute top-4 right-4 w-2 h-2 bg-verde-claro rounded-full animate-pulse-soft opacity-60"></div>
              <div className="hidden lg:block absolute bottom-8 left-4 w-1.5 h-1.5 bg-verde-escuro rounded-full animate-bounce-soft opacity-50" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalTextSection;