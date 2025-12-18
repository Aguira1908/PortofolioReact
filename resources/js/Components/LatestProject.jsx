import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const LatestProject = () => {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);

  const AboutData = [
    {
      title: 'Titip Lagu — A Tiny Idea That Turned Into A Real Product',
      desc: `A small, fun side-project where people can request songs and share them easily. I designed it to be stupidly simple: search → pick → share. No friction, no clutter — just a clean little tool that works.`,
    },
    {
      title: 'Diskominfo News Portal — Built to Handle Real Traffic',
      desc: `A full news platform for a government office: fast load times, clean CMS, and automated summarization to help the editorial team save hours every week. Built with Laravel, Inertia, Filament, and a custom LLM workflow behind the scenes.`,
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
              Selected Projects
            </h2>
          </div>

          <div className="col_right h-full flex flex-col justify-between  xl:w-[70%] xl:px-12">
            {AboutData?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="vertical_item  w-full flex flex-col p-4 gap-5"
                >
                  <h3 className="text-3xl xl:text-5xl font-bold text-[#01C38E] ">
                    {item.title}
                  </h3>
                  <p className="text-base  xl:text-lg">{item.desc}</p>
                  <a
                    href="/proses"
                    className=" 
                    transition-all duration-150
                    bg-gray-50/5 hover:bg-gray-50/10 border-2 border-gray-700 hover:border-gray-600 w-fit h-fit px-6 py-2 rounded-full hover:underline "
                  >
                    details
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
