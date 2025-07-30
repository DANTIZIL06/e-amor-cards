import { Star } from "lucide-react";

const testimonialImages = [
  "/lovable-uploads/a4244b28-baaf-4059-966a-f6797884f4ba.png",
  "/lovable-uploads/f2445aa2-71ec-46c2-9123-e10c5e4f56db.png", 
  "/lovable-uploads/1e15a620-028a-4f0f-959c-945df53d129c.png",
  "/lovable-uploads/b2162432-56fc-41e7-bc17-97c6fdc0f17f.png"
];
const TestimonialsSection = () => {
  return <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-verde-claro/30">
      <div className="container mx-auto max-w-7xl">
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            Elas já estão declarando bênçãos todos os dias!
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
            O que as mães estão dizendo
          </h2>
          
          {/* Estrelas de avaliação */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mb-6">
            {[...Array(5)].map((_, index) => (
              <Star 
                key={index}
                size={20}
                className="fill-[#F4C542] text-[#F4C542] sm:w-6 sm:h-6"
              />
            ))}
          </div>
        </div>
        
        {/* Grid de prints dos depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {testimonialImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-white/90 p-3 sm:p-4 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <img 
                src={image} 
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;