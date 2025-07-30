import HeroSection from "@/components/HeroSection";
import NewBenefitsSection from "@/components/NewBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmotionalTextSection from "@/components/EmotionalTextSection";
import ProductSection from "@/components/ProductSection";
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
      <BonusSection />
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
