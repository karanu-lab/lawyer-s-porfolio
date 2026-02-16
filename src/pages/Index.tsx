import { Navbar, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  PracticeAreasSection,
  TestimonialsSection,
  ContactSection,
} from '@/components/sections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PracticeAreasSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
