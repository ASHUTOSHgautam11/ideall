import StoryHero from '@/components/StoryHero';
import CompanyTimeline from '@/components/CompanyTimeline';
import CoreValues from '@/components/CoreValues';
import Mission from '@/components/Mission';
import HeroVideoSection from '@/components/HeroVideoSection';
import StoryHeroSection from '@/components/StoryHeroSection';
import WhatSetsUsApart from '@/components/WhatSetsUsApart';
import OurProcess from '@/components/OurProcess';
 

export default function OurStory() {
  return (
    <main>

      {/* <HeroVideoSection /> */}
      <StoryHeroSection />
      <OurProcess/>
      <WhatSetsUsApart/>
      <StoryHero />
      <CoreValues />
      <CompanyTimeline />
      <Mission />
    </main>
  );
}