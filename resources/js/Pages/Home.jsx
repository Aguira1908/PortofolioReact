import React, { useEffect, useRef } from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import HeroSection from '../Components/HeroSection';
import HeroTransition from '../Components/Transition/HeroTransition';

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <HeroTransition />
    </HomeLayout>
  );
};

export default Home;
