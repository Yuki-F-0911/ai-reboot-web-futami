import { HomeHero } from '@/components/home/HomeHero';
import { HomeMission } from '@/components/home/HomeMission';
import { HomeServices } from '@/components/home/HomeServices';
import { HomeCTA } from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero />
      <HomeMission />
      <HomeServices />
      <HomeCTA />
    </div>
  );
}