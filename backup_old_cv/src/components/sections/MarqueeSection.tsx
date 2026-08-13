import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const MarqueeSection = () => {
  const { scrollY } = useScroll();
  const row1X = useTransform(scrollY, (v) => (v * 0.3) - 300);
  const row2X = useTransform(scrollY, (v) => -(v * 0.3) + 300);

  const row1Skills = [
    "Python", "PyTorch", "Machine Learning", "C++", "Deep Learning",
    "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas"
  ];
  const row2Skills = [
    "Medical Imaging", "NIfTI", "DICOM", "nnUNet", "MONAI",
    "Prompt Engineering", "Flask", "Linux", "Git", "CUDA"
  ];

  // Repeat for infinite effect
  const r1 = [...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills];
  const r2 = [...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills];

  const SkillBadge = ({ text, outline = false }: { text: string; outline?: boolean }) => (
    <div className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase whitespace-nowrap shrink-0 flex items-center justify-center
      ${outline ? 'border-2 border-[#D7E2EA] text-[#D7E2EA] bg-transparent' : 'bg-[#D7E2EA] text-[#0C0C0C]'}`}>
      {text}
    </div>
  );

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-20 overflow-hidden flex flex-col gap-6 sm:gap-8">
      <motion.div style={{ x: row1X, willChange: 'transform' }} className="flex gap-6 sm:gap-8 w-max">
        {r1.map((skill, i) => (
          <SkillBadge key={`r1-${i}`} text={skill} outline={i % 2 !== 0} />
        ))}
      </motion.div>
      <motion.div style={{ x: row2X, willChange: 'transform' }} className="flex gap-6 sm:gap-8 w-max">
        {r2.map((skill, i) => (
          <SkillBadge key={`r2-${i}`} text={skill} outline={i % 2 === 0} />
        ))}
      </motion.div>
    </section>
  );
};
