import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="w-full h-auto object-contain opacity-40" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-full h-auto object-contain opacity-40" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="w-full h-auto object-contain opacity-40" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full h-auto object-contain opacity-40" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10 text-center max-w-[800px]">
        <FadeIn delay={0} y={40}>
          <h2 className="font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,8vw,100px)] bg-[linear-gradient(180deg,#646973_0%,#BBCCD7_100%)] bg-clip-text text-transparent">
            About me
          </h2>
        </FadeIn>
        
        <AnimatedText 
          text="I am currently a third-year Computer Science student at the University of Information Technology (UIT). With strong ambition, I am pursuing my interests in Machine Learning, Deep Learning, and emerging technologies. I am always eager to learn new things from the people I meet throughout my career journey!" 
          className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)] mb-6 sm:mb-10 md:mb-12" 
        />
        
      </div>
    </section>
  );
};
