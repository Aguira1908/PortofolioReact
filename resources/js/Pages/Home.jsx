import React, { useEffect, useRef } from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import HeroSection from '../Components/HeroSection';
import HeroTransition from '../Components/Transition/HeroTransition';
import AboutSection from '../Components/AboutSection';

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <HeroTransition />
      <AboutSection />
    </HomeLayout>
  );
};

export default Home;
