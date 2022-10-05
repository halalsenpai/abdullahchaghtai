import Image from "next/image";
import { useTheme } from "next-themes";
import { CustomTooltip } from "./Tooltip";
import SocialMediaLinks from "./SocialMediaLinks";
import avatar from "../public/static/senpaiavi1.png";

export default function HeroSection() {
  const { theme, setTheme } = useTheme();

  function handleDarkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <div className="flex flex-col-reverse xs:flex-row p-[auto] items-center h-screen mx-4">
        <div className="flex-1 basis-1/3 p-5 text-center">
          <span className="text-center xs:text-left">
            <SocialMediaLinks />
          </span>

          <h1 className="text-5xl text-left">
            Hi! I'm <strong>Abdullah</strong>,
          </h1>
          <h2 className="text-4xl text-left">
            a software engineer that turns
            <CustomTooltip title="tea" placement="top" arrow followCursor>
              <i className="cursor-pointer"> chai </i>
            </CustomTooltip>
            into clean and scaleable code.
          </h2>
          <p>
            I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for{" "}
            <strong className="cursor-pointer" onClick={handleDarkMode}>
              dark
            </strong>{" "}
            modes
          </p>
        </div>
        <div className="flex-1 w-[100%] h-[100%] justify-center flex ">
          {/* <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_8efd9doz.json" style={{ height: "100%", width: "100%" }}>
            <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
          </Player> */}
          {/* <Image src={avatar} className="w-[100%] h-[100%]" /> */}
          <div className="xs:w-[100%] xs:h-[100%] w-[300px] flex justify-center items-center">
            <Image src={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}
