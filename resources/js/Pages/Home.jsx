import React, { useEffect, useRef } from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import HeroSection from '../Components/HeroSection';
import HeroTransition from '../Components/Transition/HeroTransition';
import AboutSection from '../Components/AboutSection';
import AboutTransition from '../Components/Transition/AboutTransition';
import WhatiDo from '../Components/WhatiDo';

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <HeroTransition />
      <AboutSection />
      <AboutTransition />
      <WhatiDo />
    </HomeLayout>
  );
};

export default Home;
