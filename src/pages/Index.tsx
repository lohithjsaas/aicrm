import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyPartnershipSection } from "@/components/WhyPartnershipSection";
import { ImplementationSection } from "@/components/ImplementationSection";
import { MetricsSection } from "@/components/MetricsSection";
import { AboutSection } from "@/components/AboutSection";
import { DownloadSection } from "@/components/DownloadSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyPartnershipSection />
        <ImplementationSection />
        <MetricsSection />
        <AboutSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
