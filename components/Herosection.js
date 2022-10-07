import React from "react";
import Image from "next/image";
import AvatarImage from "/public/static/senpaiavi1.png";

export const Herosection = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse sm:flex-row bg-red-400">
      <div className="flex flex-col">
        <h5 className="text-base mb-1 font-courier font-semibold">Hi, my name is</h5>
        <h3 className="text-5xl font-calibre font-bold">Abdullah Chaghtai.</h3>
        <h1 className="text-5xl font-calibre font-bold">I like building things for the web.</h1>
        <p className="text-2xl max-w-[550px] mt-2">
          Im a software engineer specializing in building (and occasionally designing) awesome digital experiences and I may have a thing for <strong>dark</strong> modes.
        </p>
        <p>currently open to frontend roles</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[300px] h-full">
          <Image src={AvatarImage} height={500} width={500} />
        </div>
      </div>
    </div>
  );
};
