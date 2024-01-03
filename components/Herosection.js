import React, {useEffect, useState} from "react";
import Image from "next/image";
import AvatarImage from "/public/static/senpaiavi1.png";
import {useTheme} from "next-themes";

export const Herosection = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    function toggleDarkMode() {
        if (theme === "light") {
            setTheme("dark");
            // hot fix only dark mode
        } else setTheme("dark");
    }

    return (
        <div
            className="container px-[20px] md:px-[72px] md:max-w-[860px] lg:max-w-[unset] flex flex-col-reverse sm:flex-row 2xl:justify-center xl:justify-center select-none">
            <div className="flex flex-col">
                <h5 className="mb-4 sm:mb-5 font-courier font-semibold text-base sm:text-lg text-blue-800 dark:text-yellow-400">Hi,
                    my name is</h5>
                <h3 className="sm:text-6xl text-4xl font-calibre font-bold">Abdullah Chaghtai.</h3>
                <h1 className="sm:text-6xl text-4xl font-calibre font-bold  dark:text-[#8892B0]">I like building things
                    for the web.</h1>
                <p className="sm:text-2xl text-lg max-w-[550px]">
                    Im a software engineer specializing in building (and occasionally designing) awesome digital
                    experiences and I may have an unhealthy obsession for mechanical keyboards
                    {/* <strong className="cursor-pointer" onClick={toggleDarkMode}>
            dark
          </strong>{" "} */}
                    {/* modes. */}
                </p>
                <p>open to engineering roles</p>
                {/*Create a button that downloads my resume it needs to have a yellow border, transparent background, and white text*/}
                <div className="flex justify-start sm:justify-start mt-5">
                    <a href="/Abdullah-Chaghtai.pdf" target="_blank" download="Abdullah_CV.pdf"
                       className="border border-solid rounded py-3 px-4 hover:cursor-pointer hover:border-yellow-500 hover:shadow border-yellow-400">
                        View Resume
                    </a>
                </div>

            </div>
            <div className="flex justify-center">
                <div className="hidden sm:flex mb-1 w-full max-w-[200px] md:max-w-[300px] h-full items-center">
                    <Image alt="" src={AvatarImage} height={500} width={500}/>
                </div>
            </div>
        </div>
    );
};
