import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
const About = () => {
  return (
    <section className=" h-screen py-16 px-4 md:px-8 relative">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="mb-6 md:w-1/2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        nemo laboriosam minima vel, est aliquid sed repellat perspiciatis
        tenetur blanditiis atque ab laborum neque vitae dicta voluptate quo cum
        impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        voluptatibus soluta eius cupiditate architecto blanditiis nam eos! Odio
        qui in vero quibusdam magni nostrum magnam minus. Debitis quod
        consequuntur distinctio.
      </div>
      <div className="relative mt-10 md:mt-0 md:absolute md:top-0 md:right-0 md:w-1/3 md:mr-8">
        <Image
          height={500}
          width={500}
          src="/pfp.png"
          alt="Avatar"
          className="w-1/2 md:w-full mx-auto rounded-full"
        />
      </div>
    </section>
  );
};

export default About;
