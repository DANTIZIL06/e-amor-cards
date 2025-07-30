import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmotionalProductSection from "@/components/EmotionalProductSection";
import ProductSection from "@/components/ProductSection";
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
      <EmotionalProductSection />
      <BenefitsSection />
      <ProductSection />
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
