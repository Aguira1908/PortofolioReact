import React from 'react';
import { Instagram, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen  text-white flex items-center justify-center font-bold text-6xl">
      <div className="w-full h-screen flex flex-col  items-center justify-between">
        <div className="w-full h-full py-12 lg:py-4 flex flex-col  lg:justify-center items-end p-4 lg:p-12">
          <h1 className="text-3xl md:text-7xl pointer-events-none xl:text-[165px] text-[#01C38E]   drop-shadow-[0_0_6px_rgba(1,195,142,0.8)] drop-shadow-[0_0_20px_rgba(1,195,142,0.6)]">
            Zikkri Amri Saragih
          </h1>
          <h2 className="text-2xl md:text-4xl  lg:text-6xl">Web Developer</h2>
        </div>

        <div className="w-full h-full px-4 lg:px-12 md:py-8 lg:h-fit flex flex-col md:flex-row   items-end lg:items-center justify-end gap-8 lg:gap-0 lg:justify-between">
          <div className="w-full h-fit   md:border-l-4 lg:border-l-8  md:px-2 lg:px-4 lg:py-2 border-[#01C38E]  ">
            <div className="text-2xl md:text-xl  xl:text-3xl">
              <h2>Curious About Me?</h2>
              <h2>Take A little Scroll</h2>
            </div>
            <span className="text-lg md:mt-2 md:text-md hidden lg:block font-normal text-[#696E79]">
              *I build things for the Web
            </span>
          </div>

          <div className="w-full  flex justify-between">
            <div className="xl:w-12 xl:h-12  p-1 bg-gra-800 ">
              <a href="https://www.instagram.com/zikkriamri/">
                <Instagram className="w-full h-full transition-all duration-400 text-[#696E79] hover:text-gray-400  " />
              </a>
            </div>
            <div className="xl:w-12 xl:h-12  p-1 bg-gra-800 ">
              <a href="#">
                <Github className="w-full h-full transition-all duration-400 text-[#696E79] hover:text-gray-400  " />
              </a>
            </div>
            <div className="xl:w-12 xl:h-12  p-1 bg-gra-800 ">
              <a href="#">
                <Linkedin className="w-full h-full transition-all duration-400 text-[#696E79] hover:text-gray-400  " />
              </a>
            </div>
          </div>

          <div className="w-full h-fit  ">
            <div className="w-full h-full flex items-center justify-end">
              <a
                href="#"
                className="w-full h-full md:w-fit md:h-fit py-2 text-xl flex hero-cta items-center justify-center text-center 
                md:text-lg md:rounded-lg
                lg:rounded-xl md:px-8 md:py-2 xl:py-4 xl:px-16 bg-[#01C38E] hover:bg-[#00b786] xl:text-3xl transition-all duration-150 "
              >
                Contanct Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
