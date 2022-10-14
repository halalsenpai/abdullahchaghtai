import React, { useEffect, useState } from "react";
import Image from "next/image";
import AvatarImage from "/public/static/senpaiavi1.png";
import { useTheme } from "next-themes";

export const Herosection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function toggleDarkMode() {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  }

  return (
    <div className="container md:px-[72px] md:max-w-[860px] lg:max-w-[unset] flex flex-col-reverse sm:flex-row 2xl:justify-center xl:justify-center select-none">
      <div className="flex flex-col">
        <h5 className="mb-6 font-courier font-semibold text-lg text-blue-800 dark:text-[#64ffda]">Hi, my name is</h5>
        <h3 className="text-6xl font-calibre font-bold">Abdullah Chaghtai.</h3>
        <h1 className="text-6xl font-calibre font-bold  dark:text-[#8892B0]">I like building things for the web.</h1>
        <p className="text-2xl max-w-[550px]">
          Im a software engineer specializing in building (and occasionally designing) awesome digital experiences and I may have a thing for{" "}
          <strong className="cursor-pointer" onClick={toggleDarkMode}>
            dark
          </strong>{" "}
          modes.
        </p>
        <p>currently open to frontend roles</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[300px] h-full flex items-center">
          <Image src={AvatarImage} height={500} width={500} />
        </div>
      </div>
    </div>
  );
};
