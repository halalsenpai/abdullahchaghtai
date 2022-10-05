import Image from "next/image";
// import SocialMediaLinks from "./SocialMediaLinks";
import avatar from "../public/static/senpaiavi1.png";

export default function HeroSection() {
  return (
    <div>
      <div className="flex flex-col-reverse xs:flex-row p-[auto] items-center h-screen mx-4">
        <div className="flex-1 basis-1/3 p-5 text-center">
          {/* <span className="text-center xs:text-left">
            <SocialMediaLinks />
          </span> */}

          <h1 className="text-5xl text-left">
            Hi! I'm <strong>Abdullah</strong>,
          </h1>
          <h2 className="text-4xl text-left">
            a software engineer that turns
            <i className="cursor-pointer"> chai </i>
            into clean and scaleable code.
          </h2>
          <p>
            I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I
            might have a thing for{" "}
            <strong className="cursor-pointer" onClick={handleDarkMode}>
              dark
            </strong>{" "}
            modes
          </p>
        </div>
        <div className="flex-1 w-[100%] h-[100%] justify-center flex ">
          <div className="xs:w-[100%] xs:h-[100%] w-[300px] flex justify-center items-center">
            <Image src={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}
