import React, { useEffect, useRef } from 'react';
import LenisProvider from '../Components/Provider/LenisProvider';
import Particles from '@/components/ui/shadcn-io/particles/';

import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeLayout = ({ children }) => {
  const particlesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const setupParallax = () => {
      const parallaxIntensity = 0.5;

      gsap.to(particlesRef.current, {
        yPercent: 50 * parallaxIntensity,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });
    };

    const timeoutId = setTimeout(setupParallax, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full relative min-h-screen antialiased bg-[#191E29] overflow-hidden  ">
      <div
        ref={particlesRef}
        className="absolute w-full h-full pointer-events-none  "
      >
        <Particles
          ease={20}
          staticity={70}
          quantity={1000}
          color="#01C38E"
          size={0.5}
          className=" inset-0 w-full  h-full"
        />
      </div>

      <div className="relative z-10" ref={contentRef}>
        <LenisProvider>{children}</LenisProvider>
      </div>
    </div>
  );
};

export default HomeLayout;
