import React from "react";

const Hero = () => {
  return (
    <>
      <div className="font-bold text-4xl/normal md:text-8xl lg:text-8xl absolute top-20 text-left z-10 my-5 flex flex-col md:gap-5 text-wrap">
        <div>If you can't take risks,</div>
        <div>you can't create a</div>
        <div>future</div>
      </div>
      <img
        src="sakura.png"
        alt="sakura"
        className="absolute bottom-10 lg:right-10 lg:w-[60%] w-full"
      />
    </>
  );
};

export default Hero;
