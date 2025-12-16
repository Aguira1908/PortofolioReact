import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="vertical"
      className="h-[170vh] w-full text-white items-center justify-center "
    >
      <div className="container h-full w-full">
        <div className="vertical_contain w-full h-full flex justify-center items-start">
          <div className="col_left hidden md:block px-12   w-full  ">
            <h2 className="text-6xl font-extrabold border-l-4 border-[#01C38E] p-6">
              About Me
            </h2>
          </div>

          <div className="col_right h-full flex flex-col justify-between  xl:w-[60%] xl:px-12">
            <div className="vertical_item  w-full flex flex-col p-4 gap-3">
              <h3 className="text-3xl font-bold text-[#01C38E] ">
                Dont Make People Think To Hard
              </h3>
              <p>
                I build websites that don’t ask users to “figure things out.”
                Clean layouts, smooth interactions, and logic that feels
                natural.
              </p>
            </div>

            <div className="vertical_item  w-full flex flex-col p-4 gap-3">
              <h3 className="text-3xl font-bold text-fuchsia-400">
                GOOD WEBSITES SHOULDN’T FEEL LIKE HOMEWORK
              </h3>
              <p>If someone needs a tutorial, something’s wrong.</p>
            </div>

            <div className="vertical_item  w-full flex flex-col p-4 gap-3">
              <h3 className="text-3xl font-bold text-fuchsia-400">
                GOOD WEBSITES SHOULDN’T FEEL LIKE HOMEWORK
              </h3>
              <p>Experience must feel natural and intuitive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
