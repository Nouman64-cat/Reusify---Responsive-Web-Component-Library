import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-5">
      <h1 className="font-parkinsans text-9xl">
        Res<span className="text-[#9117E1]">ui</span>fy
      </h1>
      <div
        className="px-5 py-2 bg-[#9117E1] rounded-2xl text-white animate-pulseGlow"
      >
        <h2 className="font-parkinsans text-3xl animate-pulseGlow">Coming Soon....</h2>
      </div>
    </div>
  );
};

export default page;
