import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const EducationSection = () => {
  const educationData = [
    { 
      id: '01', 
      name: 'Computer Science (B.Sc.)', 
      desc: 'University of Information Technology (UIT), VNU-HCM. Aug 2023 - Jan 2027. GPA: 3.48/4.0',
      category: 'Education'
    },
    { 
      id: '02', 
      name: 'All-in-one AI Vietnam Course', 
      desc: 'AIO. Completed Modules 1-9 covering comprehensive AI fundamentals.',
      category: 'Certification'
    },
    { 
      id: '03', 
      name: 'Activities & Honors', 
      desc: 'Finalist: AI Challenge HCMC 2025. "Thanh nien tien tien lam theo loi Bac" Merit. Excellent Volunteer Award - Green Summer Campaign 2024. TOEIC 890.',
      category: 'Awards'
    }
  ];

  return (
    <section id="education" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2rem,6vw,80px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
        Education & Honors
      </h2>
      
      <div className="max-w-5xl mx-auto flex flex-col">
        {educationData.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.1} className="flex flex-col md:flex-row md:items-start border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 gap-4 md:gap-10">
            <span className="text-[#0C0C0C] font-black text-[clamp(2.5rem,8vw,100px)] leading-none md:w-[25%]">{item.id}</span>
            <div className="flex flex-col md:w-[75%] md:pt-4">
              <p className="text-[#0C0C0C]/50 uppercase tracking-widest text-sm font-semibold mb-2">{item.category}</p>
              <h3 className="text-[#0C0C0C] font-bold uppercase text-[clamp(1.2rem,2.2vw,2.1rem)] mb-2 md:mb-4">{item.name}</h3>
              <p className="text-[#0C0C0C] opacity-70 font-medium leading-relaxed max-w-2xl text-[clamp(0.95rem,1.6vw,1.25rem)]">
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
