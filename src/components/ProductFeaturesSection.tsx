import { 
  Heart, 
  BookOpen, 
  Package, 
  Monitor, 
  Sparkles, 
  Download, 
  Infinity 
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "80 cartas com declarações bíblicas prontas",
    description: "Para abençoar seus filhos com palavras de fé, propósito, identidade e proteção."
  },
  {
    icon: BookOpen,
    title: "Mini-guia de uso prático",
    description: "Dicas simples e inspiradoras para incluir as declarações no seu dia a dia com os filhos."
  },
  {
    icon: Package,
    title: "Molde da caixinha personalizada",
    description: "Monte a sua própria caixinha com carinho, significado e beleza."
  },
  {
    icon: Monitor,
    title: "Acesso à plataforma de conteúdo",
    description: "Visualize, organize e acesse todo o material em um só lugar, com atualizações gratuitas sempre que forem disponibilizadas."
  },
  {
    icon: Sparkles,
    title: "Material com design exclusivo",
    description: "Criação delicada, profissional e única, com estética inspiradora para encantar você e sua família."
  },
  {
    icon: Download,
    title: "Formato 100% digital em PDF",
    description: "Você poderá acessar, baixar e reutilizar sempre que quiser, com total liberdade."
  },
  {
    icon: Infinity,
    title: "Acesso irrestrito e vitalício ao material",
    description: "Pronto para imprimir ou usar no celular, tablet ou computador."
  }
];

const ProductFeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <div className="max-w-5xl mx-auto">
        {/* Child image */}
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/14101df4-5a7a-49ad-9424-b5dfa45f9936.png"
            alt="Criança feliz"
            className="mx-auto w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-leto font-bold text-verde-musgo mb-4">
            Veja tudo que você irá receber:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Decorative line for desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-accent opacity-30"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-8 group ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Icon container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white to-secondary/50 rounded-2xl flex items-center justify-center shadow-[var(--shadow-card)] group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-secondary/20">
                      <IconComponent 
                        className="w-8 h-8 lg:w-10 lg:h-10 text-verde-musgo" 
                        strokeWidth={1.5}
                      />
                    </div>
                    
                    {/* Connector dot for desktop */}
                    <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                      <div className="w-3 h-3 bg-primary rounded-full shadow-sm"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className="bg-white/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 border border-secondary/30 group-hover:bg-white/80">
                      <h3 className="text-xl lg:text-2xl font-leto font-bold text-verde-musgo mb-3 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed text-base lg:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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