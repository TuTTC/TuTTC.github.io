import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { PublicationsSection } from './components/sections/PublicationsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-white font-kanit selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      <main className="overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
