import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';

const Proses = () => {
  return (
    <HomeLayout>
      <div className="w-full h-screen flex flex-col items-center text-center justify-center text-white  gap-8">
        <h1 className="text-4xl font-bold">Still Working... Don't Wory</h1>
        <img className="w-xs" src="/img/404.jpg" alt="" />
        <a href="/" className="hover:underline ">
          Back To Home
        </a>
      </div>
    </HomeLayout>
  );
};

export default Proses;
