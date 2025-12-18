import React from 'react';
import { Instagram, Github, Linkedin } from '../Components/UI/SvgProvider';

const Footer = () => {
  return (
    <section className="h-screen  mt-[10%] w-full text-white items-center justify-center ">
      <div className="w-full h-full p-4 l xl:p-12 lg:py-4 py-12  flex flex-col items-start justify-between">
        <div className="w-full h-fit text-2xl md:text-6xl xl:text-8xl leading-tight tracking-wide font-bold  ">
          <h1>
            Got a <span className="text-[#01C38E]">project</span>?{' '}
          </h1>
          <h1>
            Cool. Let’s make it <span className="text-[#01C38E]">Real</span>.
          </h1>
        </div>
        <div className="xl:w-1/2  h-full flex flex-col justify-center text-sm xl:text-2xl leading-relaxed">
          <p>
            If your idea is big, small, half-baked, or still a chaotic note on
            your phone. I can help turn it into something that actually works.
          </p>
          <p className="mt-4">
            Just say hi. I promise the conversation will be easier than your
            project.
          </p>
          <p className="mt-4 text-[#696E79]">{'*and i don’t bite : )'}</p>
        </div>
        <div className="w-full h-fit mt-4 flex flex-col gap-4 xl:flex-row  items-center ">
          <div className="w-full text-2xl font-bold text-[#696E79]">
            <p>Zikkri Amri Saragih</p>
          </div>
          <div className="w-full  flex justify-between">
            <div className="xl:w-12 xl:h-12 w-10  p-1  ">
              <a href="https://www.instagram.com/zikkriamri/">
                <div className="w-full h-full transition-all duration-400 text-[#696E79] hover:text-gray-400  ">
                  <Instagram />
                </div>
              </a>
            </div>
            <div className="xl:w-12 xl:h-12 w-10   p-1  ">
              <a href="#">
                <div className="w-full h-full  transition-all duration-400 text-[#696E79] hover:text-gray-400  ">
                  <Github />
                </div>
              </a>
            </div>
            <div className="xl:w-12 xl:h-12 w-10  p-1  ">
              <a href="#">
                <div className="w-full h-full transition-all duration-400 text-[#696E79] hover:text-gray-400  ">
                  <Linkedin />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full h-fit">
            <div className="w-full h-full flex items-center justify-end">
              <a
                href="#"
                className="w-full font-bold h-full md:w-fit md:h-fit py-2 text-xl flex hero-cta items-center justify-center text-center 
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

export default Footer;
