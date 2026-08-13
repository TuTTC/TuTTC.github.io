import React, { useRef, useEffect } from 'react';
import { Globe, ArrowRight, Mail, User } from 'lucide-react';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;

    const fadeVideo = (startOpacity: number, endOpacity: number, duration: number, onComplete?: () => void) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        video.style.opacity = (startOpacity + (endOpacity - startOpacity) * progress).toString();

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else if (onComplete) {
          onComplete();
        }
      };
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      const currentOpacity = parseFloat(video.style.opacity || '0');
      fadeVideo(currentOpacity, 1, 500);
      video.play().catch(console.error);
    };

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        const currentOpacity = parseFloat(video.style.opacity || '1');
        fadeVideo(currentOpacity, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        fadingOutRef.current = false;
        video.play().catch(console.error);
        fadeVideo(0, 1, 500);
      }, 100);
    };

    video.style.opacity = '0';
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="min-h-screen bg-black overflow-hidden relative flex flex-col">
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] transition-opacity duration-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
      />

      {/* Navigation */}
      <nav className="relative z-20 pl-6 pr-6 py-6 w-full">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="text-white w-6 h-6" />
            <span className="text-white font-semibold text-lg">TuTTC</span>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#education" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Education</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Projects</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="text-white text-sm font-medium">Contact</a>
            <a href="https://github.com/TuTTC" target="_blank" rel="noreferrer" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Tran Thi Cam Tu
        </h1>
        
        <div className="max-w-xl w-full space-y-4 flex flex-col items-center">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full max-w-md">
            <input 
              type="email" 
              placeholder="camtutran2608@gmail.com" 
              readOnly
              className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-white/40 text-base"
            />
            <button className="bg-white rounded-full p-3 text-black hover:bg-gray-200 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-white text-sm leading-relaxed px-4">
            AI Engineer. Passionate about applying Computer Science and Artificial Intelligence to solve complex biological problems.
          </p>
          
          <a href="#about" className="inline-block mt-4 liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Read Manifesto
          </a>
        </div>
      </div>

      {/* Social Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12 mt-auto">
        <a href="https://byvn.net/yRce" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <User className="w-5 h-5" />
        </a>
        <a href="https://github.com/TuTTC" target="_blank" rel="noreferrer" aria-label="GitHub" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe className="w-5 h-5" />
        </a>
        <a href="mailto:camtutran2608@gmail.com" aria-label="Email" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
