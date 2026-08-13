import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const PublicationsSection = () => {
  return (
    <section id="publications" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 relative z-20">
      <div className="max-w-5xl mx-auto border-t border-[#D7E2EA]/20 pt-20">
        <FadeIn delay={0.1} y={30}>
          <h2 className="text-[#D7E2EA] font-black uppercase text-[clamp(2rem,6vw,80px)] mb-10 leading-none tracking-tight">
            Publications
          </h2>
          
          <div className="border border-[#D7E2EA]/20 bg-[#121212] rounded-[30px] p-8 sm:p-12 hover:border-[#D7E2EA]/40 transition-colors">
            <h3 className="text-[#D7E2EA] font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-4">
              LLandMark: A Multi-Agent Framework for Landmark-Aware Multimodal Interactive Video Retrieval
            </h3>
            <p className="text-[#D7E2EA]/70 text-sm sm:text-base leading-relaxed mb-4">
              Minh-Chi Phung, Thien-Bao Le, <strong className="text-[#D7E2EA]">Cam-Tu Tran-Thi</strong>, Thu-Dieu Nguyen-Thi, Vu-Hung Dao
            </p>
            <p className="text-[#D7E2EA]/50 italic text-sm mb-8">
              arXiv preprint arXiv:2603.02888, 2026
            </p>
            
            <a 
              href="https://arxiv.org/abs/2603.02888" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[#D7E2EA] text-[#0C0C0C] bg-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 text-xs sm:text-sm hover:bg-transparent hover:text-[#D7E2EA] transition-all"
            >
              arXiv Paper
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
