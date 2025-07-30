const EmotionalProductSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-[#D9EAD8]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto - coluna esquerda */}
          <div className="text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#506853] leading-relaxed">
              Na correria do dia a dia, acabamos dizendo coisas que nunca quisemos dizer aos nossos filhos. Mas mesmo sem intenção, essas palavras deixam marcas, e moldam quem eles serão amanhã. Toda palavra planta uma semente. E com o tempo, ela dá frutos: de medo… ou de fé. De insegurança… ou de identidade.
            </p>
          </div>
          
          {/* Imagem - coluna direita */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md w-full">
              <img 
                src="/lovable-uploads/780088f8-e1ec-4a89-bf59-ea264f0a1d20.png"
                alt="Produto - Declarando Bênçãos"
                className="w-full h-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalProductSection;