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
        I'm Abdullah, a Computer Science graduate with a versatile skillset that transcends programming languages. While I'm proficient in Java and JavaScript, my true strength lies in problem-solving and delivering effective solutions.

In my current role within the health tech sector, I've honed my ability to tackle complex challenges head-on. Whether it's optimizing performance, architecting robust systems, or enhancing user experiences, I'm dedicated to finding innovative solutions.

I believe in the power of technology to transform industries, and my approach is always centered on delivering tangible results. Let's connect to explore how I can apply my problem-solving skills to meet your specific objectives.
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
            {/* TODO - CSS this has got to be the most idiotic thing but it works for me, Ill revisit it later */}
            <Image alt="" className="!hidden" src={BioImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
