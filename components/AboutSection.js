import Image from "next/image";
import React from "react";
import { Technologies } from "../constants/Skills";
import BioImage from "/public/static/abd.jpeg";

export const AboutSection = () => {
  return (
    <section className="relative block sm:h-full">
      <h1 className="text-3xl text-yellow-400 font-bold">About me</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr,2fr] sm:gap-[50px]">
        <div className="text-lg text-gray-400">
          Hi, I‘m Abdullah, and I graduated from the University of Karachi in 2020 with a degree in Computer Science. My interests are in Front End Engineering, and I love
          to create beautiful and performant products with delightful user experiences. My interest in web development began when I was trying to do a crypto assignment and kinda
          went overkill with the frontend instead of making sure the ciphers came out right :)
          <div>Here are a few technologies I have experiences with:</div>
          <ul className="grid grid-cols-2">
            {Technologies.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="group relative w-[100%] h-[100% min-h-[300px] sm:min-h-[400px]  sm:min-w-[100%]">
          <div className="hidden sm:block transition ease-in delay-150 duration-200 border-yellow-400 border-solid border-4 h-full w-full relative translate-x-4 translate-y-4 group-hover:-translate-x-0 group-hover:-translate-y-0 "></div>
          <Image alt="" className="object-top" layout="fill" objectFit="cover" src={BioImage} />
        </div>
      </div>
    </section>
  );
};
