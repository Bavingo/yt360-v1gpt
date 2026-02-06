import HeroSection from "@/components/landing/HeroSection";
import TrackPhase1Section from "@/components/landing/TrackPhase1Section";
import TrackPhase2Section from "@/components/landing/TrackPhase2Section";
import TrackPhase3Section from "@/components/landing/TrackPhase3Section";
import ChannelAnalysisSection from "@/components/landing/ChannelAnalysisSection";
import InstructorSection from "@/components/landing/InstructorSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrackPhase1Section />
      <TrackPhase2Section />
      <TrackPhase3Section />
      <ChannelAnalysisSection />
      <InstructorSection />
      <TestimonialsSection />
      <PricingSection />

      <Footer />
    </main>
  );
};

export default Index;
