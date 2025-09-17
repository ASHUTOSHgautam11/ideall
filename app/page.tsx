import Hero from '@/components/Hero';
import TradeSpecializations from '@/components/TradeSpecializations';
import WhyPartner from '@/components/WhyPartner';
import ContactBanner from '@/components/ContactBanner';
import Slider from '@/components/Slider';
import Slider1 from '@/components/Slider1';
import { Sedgwick_Ave_Display } from 'next/font/google';
import { LucideSliders } from 'lucide-react';
import TrustedByGlobal from '@/components/TrustedByGlobal';
import AboutHome from '@/components/AboutHome';
import Feature7 from '@/components/Feature7';
export default function Home() {
  return (
    <>
      <main>
        <Slider />
        {/* <Feature7/> */}
        <TrustedByGlobal />
        <AboutHome />
        {/* <Hero /> */}
        <TradeSpecializations />
        {/* <Slider1/> */}
        <WhyPartner />
        <ContactBanner />
      </main>
    </>
  );
}