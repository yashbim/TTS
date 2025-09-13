// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisionMission from '@/components/VisionMission';
import Services from '@/components/Services';
import Qualities from '@/components/Qualities';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <Hero />
      <VisionMission />
      <Services />
      <Qualities />
      <CTA />
      <Footer />
    </div>
  );
}