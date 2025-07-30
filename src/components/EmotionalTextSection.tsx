const EmotionalTextSection = () => {
  return (
    <section className="py-6 sm:py-10 md:py-12 px-4 sm:px-6 bg-verde-claro/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
          {/* Texto emocional à esquerda */}
          <div className="text-left animate-fade-in">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-[1.7] max-w-[600px] mb-4 lg:mb-0">
              Na correria do dia a dia, acabamos dizendo coisas que nunca quisemos dizer aos nossos filhos. Mas mesmo sem intenção, essas palavras deixam marcas, e moldam quem eles serão amanhã. Toda palavra planta uma semente. E com o tempo, ela dá frutos: de medo… ou de fé. De insegurança… ou de identidade.
            </p>
          </div>
          
          {/* Imagem do produto à direita */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl">
              <img 
                src="/lovable-uploads/96dede58-8325-4d88-be17-c14a68af2c0d.png" 
                alt="Produto DOMUS 2025 - Declarando Bênçãos"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalTextSection;