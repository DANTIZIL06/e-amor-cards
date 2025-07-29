import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/ce8d7f28-50a8-4075-a278-1e6b924ce0d7.png";
import { Heart, Star, Gift } from "lucide-react";
const HeroSection = () => {
  const scrollToTarget = () => {
    const element = document.getElementById("comprar");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="gradient-hero min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Textual */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge de novidade */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-bordo fill-current" />
              <span className="text-sm font-semibold text-musgo">NOVO 2025</span>
            </div>
            
            {/* Título Principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-musgo leading-tight">
              Transforme a rotina dos seus filhos com a 
              <span className="text-bordo block">Palavra de Deus</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">São 80 cards com temas essenciais como responsabilidade, pensamentos positivos, superação de medo, sabedoria e muito mais. Todos fundamentados na Palavra de Deus. Uma forma simples e intencional de plantar, todos os dias, palavras que fortalecem a fé, o vínculo emocional e o caráter  dos seus filhos.</p>
            
            {/* Lista de benefícios rápidos */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-musgo">
                <Heart className="w-5 h-5 text-bordo fill-current" />
                <span className="font-medium">80 Cards únicos</span>
              </div>
              <div className="flex items-center gap-2 text-musgo">
                <Gift className="w-5 h-5 text-bordo fill-current" />
                <span className="font-medium">Base bíblica</span>
              </div>
              <div className="flex items-center gap-2 text-musgo">
                <Star className="w-5 h-5 text-bordo fill-current" />
                <span className="font-medium">Prático e amoroso</span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="space-y-4">
              <Button onClick={scrollToTarget} className="btn-primary text-xl px-12 py-6 w-full lg:w-auto">Quero o Meu Declarando Bençãos</Button>
              <p className="text-sm text-muted-foreground">
                ✨ Garantia de 7 dias • Compra 100% segura
              </p>
            </div>
          </div>
          
          {/* Imagem Hero */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative z-10">
              <img src={heroImage} alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-verde-claro rounded-full opacity-60 animate-bounce-soft"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-verde-escuro rounded-full opacity-40 animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;