import { StoryHero } from '@/components/sections/StoryHero';
import { StoryChapter1 } from '@/components/sections/StoryChapter1';
import { StoryChapter2 } from '@/components/sections/StoryChapter2';
import { StoryProgram } from '@/components/sections/StoryProgram';

export default function Home() {
  return (
    <div className="bg-white">
      <StoryHero />
      <StoryChapter1 />
      <StoryChapter2 />
      <StoryProgram />
    </div>
  );
}