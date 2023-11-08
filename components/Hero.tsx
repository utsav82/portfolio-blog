import React from "react";

const Hero = () => {
  return (
    <>
      <div className="sm:h-screen mt-10 font-bold text-4xl/normal md:text-7xl lg:text-8xl text-left flex flex-col md:gap-y-5 relative">
        <div className="z-10">If you can't take risks,</div>
        <div className="z-10">you can't create a</div>
        <div className="z-10">future</div>
      </div>
      <div className="sm:absolute bottom-10 lg:right-10 lg:w-[60%]">
        <img src="sakura.png" alt="sakura" />
      </div>
    </>
  );
};

export default Hero;
