import Image from "next/image";
import React from "react";
import { Technologies } from "../constants/Skills";
import BioImage from "/public/static/abd.jpeg";

export const AboutSection = () => {
  return (
    <section className="relative block sm:h-full">
      <h1 className="text-3xl dark:text-yellow-400 font-bold mb-2">About me</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr,2fr] sm:gap-[50px]">
        <div className="text-lg leading-snug">
          Hi, I‘m Abdullah, and I graduated from the University of Karachi in 2020 with a degree in Computer Science. My interests are in Front End Engineering, and I love to
          create beautiful and performant products with delightful user experiences. My interest in web development began when I was trying to do a crypto assignment and kinda went
          overkill with the frontend instead of making sure the ciphers came out right :)
          <div className="mt-1">Here are a few technologies I have experiences with:</div>
          <ul className="grid grid-cols-2">
            {Technologies.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden mt-1">Heres what I look like :D</div>
        <div className="group block relative">
          <Image alt="" className="z-[2] aspect-auto" layout="responsive" objectFit="cover" src={BioImage} />
          <div className="hidden sm:block top-0 duration-200 h-fit absolute transition ease-in delay-150 border-yellow-400 border-solid border-4 w-full translate-x-4 translate-y-4 z-[1] group-hover:-translate-x-0 group-hover:-translate-y-0 ">
            <Image alt="" className="!hidden" src={BioImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
