import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
const About = () => {
  return (
    <section className=" my-10 py-16 px-4 md:px-8 relative">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="mb-6 md:w-1/2">
        Hey I am Utsav Yadav, a third-year IT undergraduate at HBTU Kanpur. I
        have always been fascinated by technology and my love for it has driven
        me towards coding and problem solving. I have dvelved into competitive
        programming and web development over the past 2 years and it has been a
        very memorable journey. Currently, I am learning about different System
        Design concepts on how to make large scale distributed systems. I also
        have hobbies ranging from speedcubing to watching anime and chilling.
      </div>
      <div className="relative mt-10 md:mt-0 md:absolute md:top-0 md:right-0 md:w-1/3 md:mr-8">
        <Image
          height={500}
          width={500}
          src="/coverphoyytu.png"
          alt="Avatar"
          className="object-cover mx-auto rounded-full h-96 w-96"
        />
      </div>
    </section>
  );
};

export default About;
