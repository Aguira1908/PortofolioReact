import React, { useEffect, useRef } from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import HeroSection from '../Components/HeroSection';
import HeroTransition from '../Components/Transition/HeroTransition';
import AboutSection from '../Components/AboutSection';
import AboutTransition from '../Components/Transition/AboutTransition';
import WhatiDo from '../Components/WhatiDo';
import WhatiDoTesting from '../Components/WhatiDoTesting';
import WhatiDoTransition from '../Components/Transition/WhatiDoTransition';
import Spacer from '../Components/Transition/Spacer';
import LatestProject from '../Components/LatestProject';

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <HeroTransition />
      <AboutSection />
      <AboutTransition />
      <WhatiDo />
      {/* <WhatiDoTesting /> */}
      {/* <Spacer /> */}
      <WhatiDoTransition />
      <LatestProject />
    </HomeLayout>
  );
};

export default Home;
