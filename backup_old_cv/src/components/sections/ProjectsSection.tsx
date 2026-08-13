import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ProjectsSection = () => {
  const projects = [
    {
      id: "01",
      category: "Medical AI",
      name: "ISBI 2026: RIVA Cervical Cytology",
      desc: "Ranked 8/66 in Preliminary Phase. Developed an ensemble Object Detection pipeline for detecting pre-cancerous cells in Pap smears. Optimized mAP@0.50:0.95 and implemented a robust WBF strategy to fuse multi-model predictions.",
      tech: "YOLO, Swin Transformers, WBF",
      link: "https://github.com/TuTTC/RIVA-TRACK-A",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "02",
      category: "NLP / LLMs",
      name: "DoRA vs. PiSSA for Legal SLM",
      desc: "Engineered an end-to-end PEFT pipeline for Legal Small Language Models. Built an automated LLM-as-a-Judge framework to benchmark legal syllogisms. PiSSA-tuned model achieved 2.88/5.0 in logical structure.",
      tech: "Unsloth, LoRA/PiSSA, Qwen3-32B",
      link: "https://github.com/TuTTC/CS431-DoRA-vs-PiSSA-LegalSLM",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "03",
      category: "Multi-Agent System",
      name: "HCMAI Challenge - LLandMark",
      desc: "Finalist of AI Challenge HCMC. Contributed to ACR module by generating video-to-text descriptions and building agentic RAG pipelines. Findings Accepted by AAAI 2026 Workshop on New Frontiers in IR.",
      tech: "Whisper, LlamaIndex, Multi-agent",
      link: "https://github.com/chisphung/AIOOIA__HCMAIChallenge_2025",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "04",
      category: "Medical AI",
      name: "Brain Hemorrhage Segmentation",
      desc: "Undergraduate Thesis. Developing a segmentation framework for 3D multi-class brain hemorrhage. Reproducing and optimizing SOTA architectures (One-Shot Learning, Adversarial Training) using DSC and HD95 metrics.",
      tech: "PyTorch, MONAI, nnUNet",
      link: "#",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "05",
      category: "NLP",
      name: "Aspect-based Sentiment Analysis",
      desc: "Engineered an end-to-end ABSA pipeline for academic feedback. Integrated the FTS-OBP metric for comparison between generative (T5) and discriminative models, achieving a peak F1-score of 58.2%.",
      tech: "BiLSTM, BERT, T5",
      link: "https://github.com/TuTTC/CS221.Q11-NATURAL-LANGUAGE-PROCESSING",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "06",
      category: "Fullstack Web",
      name: "Jewelry Store Management",
      desc: "Developed a comprehensive management application featuring inventory control, sales, purchasing, and revenue reporting. Designed a Role-Based Access Control (RBAC) system. Deployed using Docker.",
      tech: "React.js, Flask, MySQL, Docker",
      link: "https://github.com/TuTTC/SE104-Jewelry-Store-Management-Software",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section id="projects" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 pb-40">
      <h2 className="text-center font-black uppercase tracking-tight leading-none text-[clamp(2rem,6vw,80px)] bg-[linear-gradient(180deg,#646973_0%,#BBCCD7_100%)] bg-clip-text text-transparent mb-16 md:mb-24">
        Projects
      </h2>

      <div className="max-w-[1000px] mx-auto relative flex flex-col gap-[15vh] sm:gap-[20vh] md:gap-[30vh] pb-[20vh]">
        {projects.map((proj, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.02;
          const scale = useTransform(scrollYProgress, [i * 0.15, 1], [1, targetScale]);
          
          return (
            <motion.div
              key={proj.id}
              style={{ scale, top: `calc(6rem + ${i * 20}px)` }}
              className="sticky w-full rounded-[30px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#121212] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 transform-gpu shadow-2xl"
            >
              {/* Info Column */}
              <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#D7E2EA] font-black text-3xl sm:text-4xl leading-none opacity-80">{proj.id}</span>
                    <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-semibold border border-[#D7E2EA]/20 px-3 py-1 rounded-full">{proj.category}</p>
                  </div>
                  <h3 className="text-[#D7E2EA] uppercase text-2xl sm:text-3xl font-bold mb-4">{proj.name}</h3>
                  <p className="text-[#D7E2EA]/80 leading-relaxed text-sm sm:text-base mb-6">{proj.desc}</p>
                </div>
                
                <div className="mt-auto flex flex-col gap-4">
                  <p className="text-[#D7E2EA]/50 text-sm font-mono">{proj.tech}</p>
                  {proj.link !== '#' ? (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="w-fit rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors">
                      View Repository
                    </a>
                  ) : (
                    <span className="w-fit rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/50 font-medium uppercase tracking-widest px-6 py-2.5 text-xs sm:text-sm cursor-not-allowed">
                      Internal Repository
                    </span>
                  )}
                </div>
              </div>

              {/* Image Column */}
              <div className="w-full md:w-1/2 rounded-[20px] sm:rounded-[30px] overflow-hidden h-[250px] sm:h-[300px] md:h-[400px]">
                <img src={proj.image} alt={proj.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
