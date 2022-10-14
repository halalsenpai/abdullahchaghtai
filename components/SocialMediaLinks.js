import React from "react";
import { socialMediaLinks } from "../constants/SocialMedia";
import { Linkedin } from "react-feather";

export const SocialMediaLinks = () => {
  return (
    <div className="hidden sm:fixed bottom-0 left-[40px] md:flex flex-col items-center">
      <div className="flex flex-col">
        {socialMediaLinks.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer" className="hover:-translate-y-1 ease-linear mb-3">
            {item.icon}
          </a>
        ))}
      </div>
      <div className="w-[2px] h-[100px] bg-blue-600 dark:bg-yellow-400"></div>
    </div>
  );
};
