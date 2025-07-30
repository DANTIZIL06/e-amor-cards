const EmotionalProductSection = () => {
  return (
    <section className="py-15 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto emocional - coluna esquerda */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg sm:text-xl leading-relaxed text-musgo font-medium">
              Na correria do dia a dia, acabamos dizendo coisas que nunca quisemos dizer aos nossos filhos.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-musgo font-medium">
              Mas mesmo sem intenção, essas palavras deixam marcas, e moldam quem eles serão amanhã.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-lg sm:text-xl leading-relaxed text-musgo font-medium">
                Toda palavra planta uma semente.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-musgo font-medium">
                E com o tempo, ela dá frutos: de medo… ou de fé.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-musgo font-medium">
                De insegurança… ou de identidade.
              </p>
            </div>
          </div>
          
          {/* Imagem do produto - coluna direita */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 animate-fade-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/6e581b60-58ba-4815-8c74-4a8faf90b5eb.png"
                alt="Produto Declarando Bênçãos - Cards para educar filhos"
                className="w-full max-w-md h-auto rounded-2xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalProductSection;