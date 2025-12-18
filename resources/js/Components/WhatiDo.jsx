import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const WhatiDo = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const WhatiDoData = [
    {
      title: 'MAKING WEBSITES FEEL NICE TO USE',
      desc: `I care a lot about how things feel — spacing, flow, and the little moments.
            If a website feels smooth and comfortable, that’s the point.`,
    },
    {
      title: 'TURNING IDEAS INTO WORKING PRODUCTS',
      desc: `Give me the concept, and I’ll build the actual thing.
          From wireframe to live website — clean, structured, and functional.`,
    },
    {
      title: 'CLEANING UP MESSY LOGIC (I DO THIS A LOT)',
      desc: `Complex flows, confusing code, weird behaviors — I enjoy fixing them.
            I like turning chaos into something readable and predictable`,
    },
    {
      title: 'BRINGING FRONTEND TO LIFE (SUBTLY)',
      desc: `I use animation and interaction in the softest way possible.
            Just enough to make it feel alive, never enough to make it annoying.`,
    },
    {
      title: 'CONNECTING SYSTEMS THAT WEREN’T MEANT TO TALK  ',
      desc: `APIs, integrations, data syncing — I make different systems play nicely.
              If it has an API, I can make it useful.`,
    },
    {
      title: 'MAKING CODE FUTURE-PROOF',
      desc: `I write things that other developers won’t hate later.
            Clear structure, predictable patterns, and no unnecessary magic.`,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = sectionRef.current;
      const cards = gsap.utils.toArray('.panel-card');
      const totalWidth = container.scrollWidth;
      const viewportWidth = container.offsetWidth;
      const scrollDistance = totalWidth - viewportWidth;
      const extraScroll = window.innerHeight * 0.6;
      // Tambahkan timeline untuk animasi yang lebih kaya
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          pin: true,
          scrub: 1.2,
          end: () => `+=${scrollDistance + extraScroll}`,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: { min: 0.7, max: 1 },
            delay: 10,
            ease: 'power1.inOut',
          },
        },
      });

      // Animasi smooth dengan easing yang menarik
      tl.to(container, {
        x: -scrollDistance,
        ease: 'power2.inOut',
      });

      // Tambahkan animasi individual untuk setiap kartu
      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          {
            scale: 0.9,
            opacity: 0.5,
            rotationY: -15,
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              markers: false,
              trigger: card,
              containerAnimation: tl,
              // start: 'left 10%',
              start: 'center center',
              end: 'right right',
              scrub: 1.2,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-full  relative w-full flex items-center justify-center">
      <div ref={containerRef} className="h-fit xl:h-full w-[100px]  ">
        <div
          ref={sectionRef}
          className="container-card xl:py-[20%]  flex gap-8  items-center justify-start"
        >
          {WhatiDoData.map((item, i) => {
            return (
              <div
                key={i}
                className="xl:min-w-[500px] min-w-[300px] min-h-[100px] panel-card xl:min-h-[300px] bg-white/5  backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-md flex flex-col items-center justify-evenly"
              >
                <h2 className="text-xl xl:text-4xl mb-3 xl:mb-0 font-bold text-[#01C38E]   ">
                  {item.title}
                </h2>
                <p className="text-white/80 text-sm xl:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatiDo;
