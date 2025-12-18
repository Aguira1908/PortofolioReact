import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const WhatiDo = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  const WhatiDoData = [
    {
      title: 'MAKING WEBSITES FEEL NICE TO USE',
      desc: "I care a lot about how things feel — spacing, flow, and the little moments. If a website feels smooth and comfortable, that's the point.",
    },
    {
      title: 'TURNING IDEAS INTO WORKING PRODUCTS',
      desc: "Give me the concept, and I'll build the actual thing. From wireframe to live website — clean, structured, and functional.",
    },
    {
      title: 'CLEANING UP MESSY LOGIC (I DO THIS A LOT)',
      desc: 'Complex flows, confusing code, weird behaviors — I enjoy fixing them. I like turning chaos into something readable and predictable.',
    },
    {
      title: 'BRINGING FRONTEND TO LIFE (SUBTLY)',
      desc: 'I use animation and interaction in the softest way possible. Just enough to make it feel alive, never enough to make it annoying.',
    },
    {
      title: "CONNECTING SYSTEMS THAT WEREN'T MEANT TO TALK",
      desc: 'APIs, integrations, data syncing — I make different systems play nicely. If it has an API, I can make it useful.',
    },
    {
      title: 'MAKING CODE FUTURE-PROOF',
      desc: "I write things that other developers won't hate later. Clear structure, predictable patterns, and no unnecessary magic.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !cardsWrapperRef.current) return;

      // Reset posisi untuk memastikan
      gsap.set(cardsWrapperRef.current, { x: 0 });

      const cards = gsap.utils.toArray('.panel-card');
      const containerWidth = sectionRef.current.offsetWidth;
      const totalCardsWidth = cards.length * 350 + (cards.length - 1) * 32; // width + gap
      const scrollDistance = Math.max(0, totalCardsWidth - containerWidth);

      // Debug info
      console.log('Container width:', containerWidth);
      console.log('Total cards width:', totalCardsWidth);
      console.log('Scroll distance:', scrollDistance);

      // Bersihkan ScrollTrigger yang ada
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Buat timeline untuk horizontal scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // Mulai ketika container mencapai 80% dari atas viewport
          end: () => `+=${scrollDistance * 2}`, // Ganda jarak untuk scroll yang lebih smooth
          scrub: 0.8, // Lebih smooth
          pin: true,
          anticipatePin: 1,
          markers: false, // Set true untuk debugging
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: { min: 0.3, max: 0.6 },
            ease: 'power2.inOut',
          },
          onUpdate: (self) => {
            // Optional: Debug progress
            // console.log('Progress:', self.progress);
          },
        },
        defaults: { ease: 'power2.inOut' },
      });

      // Animasi horizontal utama
      tl.to(
        cardsWrapperRef.current,
        {
          x: -scrollDistance,
          duration: 1, // Durasi relatif
        },
        0
      );

      // Animasi individual untuk setiap kartu
      cards.forEach((card, i) => {
        // Hitung progres berdasarkan posisi kartu
        const cardProgress = i / (cards.length - 1);

        // Animasi masuk kartu
        tl.fromTo(
          card,
          {
            scale: 0.85,
            opacity: 0.4,
            rotationY: -10,
            filter: 'blur(2px)',
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'back.out(1.4)',
          },
          cardProgress * 0.5 // Offset timing
        );

        // Optional: Animasi hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // Tambahkan handler untuk resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, containerRef);

    return () => {
      ctx.revert();
      // Pastikan semua ScrollTrigger dibersihkan
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background elements untuk efek depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

      {/* Header Section */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-12 z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          What I <span className="text-blue-400">Do</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl">
          Specializing in creating seamless digital experiences through
          thoughtful design and clean code.
        </p>
      </div>

      {/* Scroll Container */}
      <div className="w-full max-w-6xl mx-auto px-4 z-10">
        <div ref={sectionRef} className="relative w-full overflow-visible">
          {/* Cards Wrapper */}
          <div
            ref={cardsWrapperRef}
            className="flex gap-8 pb-12 will-change-transform"
            style={{
              minHeight: '280px',
              paddingLeft: 'calc(50% - 175px)', // Center first card
            }}
          >
            {WhatiDoData.map((item, i) => (
              <div
                key={i}
                className="panel-card flex-shrink-0 w-[350px] h-[250px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group"
              >
                {/* Card Number */}
                <div className="text-blue-400/40 text-sm font-mono mb-2">
                  0{i + 1}
                </div>

                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-6 w-8 h-[2px] bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-gray-400 text-sm animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span>Scroll horizontally</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay untuk fade effect */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-20"></div>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

export default WhatiDo;
