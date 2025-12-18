import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const WhatiDoTransition = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const bottomTextRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // STEP 1 — Zoom
      tl.fromTo(
        containerRef.current,
        { scale: 1 },
        { scale: 2.5, ease: 'none' }
      );
      tl.to(
        sectionRef.current,
        {
          opacity: 0,

          ease: 'none',
        },
        '>-0.2' // sedikit sebelum akhir
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full mt-[10%] h-scren min-h-screen text-white text-xl xl:text-6xl md:text-3xl font-bold  "
    >
      <div
        ref={containerRef}
        className="h-screen w-full leading-loose tracking-wide flex flex-col items-start justify-between p-4 lg:p-12"
      >
        <div className="w-full h-full text-8xl font-extrabold ">
          <h1>THIS IS WHAT I DO.</h1>
          <h1>
            BUT WHAT I <span className=" text-[#01C38E] ">BUILD</span>
          </h1>
        </div>
        <div className="w-full h-full flex items-end justify-end text-7xl">
          <h1>
            THAT’S A <span className="text-[#01C38E]">DIFFERENT</span> STORY.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default WhatiDoTransition;
