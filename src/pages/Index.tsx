import HeroSection from "@/components/HeroSection";
import NewBenefitsSection from "@/components/NewBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmotionalTextSection from "@/components/EmotionalTextSection";
import ProductSection from "@/components/ProductSection";
import ProductFeaturesSection from "@/components/ProductFeaturesSection";
import BonusSection from "@/components/BonusSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import PurchaseSection from "@/components/PurchaseSection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TestimonialsSection />
      <EmotionalTextSection />
      <NewBenefitsSection />
      <ProductSection />
      
      {/* Bonus Image Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-6xl mx-auto">
          <img 
            src="/lovable-uploads/1e00974c-5bff-4dc9-a28d-7fbe5b9a17a9.png"
            alt="Todos os bônus especiais inclusos"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-[var(--shadow-card)] hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </section>
      
      <BonusSection />
      <ProductFeaturesSection />
      <AboutSection />
      <FAQSection />
      <GuaranteeSection />
      <PurchaseSection />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
