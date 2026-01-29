import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CoursesSection from "@/components/CoursesSection";
import OutcomesSection from "@/components/OutcomesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenConsult={() => setConsultOpen(true)} />
      <main>
        <HeroSection />
        <ProblemSection />
        <CoursesSection />
        <OutcomesSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <WhoIsThisForSection />
        <PricingSection />
        <CTASection consultOpen={consultOpen} onConsultOpenChange={setConsultOpen} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
