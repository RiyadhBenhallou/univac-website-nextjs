import AboutSection from "./_components/about-section";
import FooterSection from "./_components/footer-section";
import HeroSection from "./_components/hero-section";
import HighlightsSection from "./_components/highlights-section";
import SponsorsSection from "./_components/sponsors-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <HighlightsSection />
      <FooterSection />
    </div>
  );
}
