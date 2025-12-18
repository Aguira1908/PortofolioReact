import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);
  const timelineRef = useRef(null);
  const AboutData = [
    {
      title: 'I Dont Make People Think To Hard',
      desc: `I build websites that don’t ask users to “figure things out.”
            Clean layouts, smooth interactions, and logic that actually feels natural.
            Simple on purpose, not because I’m lazy.`,
    },
    {
      title: 'I Build Websites That Don’t Make People Think',
      desc: `If someone needs a tutorial to use your website, something’s wrong.
              I keep the flow intuitive and the experience light.
              The goal? Make everything feel obvious without saying a word.`,
    },
    {
      title: 'I Believe the Internet Needs Less Chaos',
      desc: `I like keeping things neat, both in UI and in code.
            Laravel and React help me tame the messy parts so the final result feels calm.
            A little order goes a long way.`,
    },
  ];

  useEffect(() => {
    const timeln = gsap.timeline({
      paused: true,
      scrollTrigger: {
        scroller: 'body', // gunakan scroller global Lenis
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    timeln.fromTo(
      colLeftRef.current,
      { y: 0 },
      {
        y: '160vh',
        duration: 1.2,
        ease: 'none',
      },
      0
    );

    ScrollTrigger.create({
      animation: timeln,
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <section
      id="vertical"
      ref={sectionRef}
      className="h-[170vh] my-[10%] w-full text-white items-center justify-center "
    >
      <div className="container h-full w-full">
        <div className="vertical_contain w-full h-full flex justify-center items-start">
          <div
            ref={colLeftRef}
            className="col_left hidden md:block md:px-4 xl:px-12   w-full  "
          >
            <h2 className="md:text-5xl  xl:text-6xl  font-extrabold border-l-8 px-6 xl:px-8 border-[#01C38E]">
              About Me
            </h2>
          </div>

          <div className="col_right h-full flex flex-col justify-between  xl:w-[70%] xl:px-12">
            {AboutData?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="vertical_item  w-full flex flex-col p-4 gap-3"
                >
                  <h3 className="text-3xl xl:text-5xl font-bold text-[#01C38E] ">
                    {item.title}
                  </h3>
                  <p className="text-base  xl:text-lg">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
