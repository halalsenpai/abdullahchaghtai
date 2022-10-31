import Image from "next/image";
import React from "react";
import FeaturedImage1 from "/public/static/images/featured-project-1.png";
import FeaturedImage2 from "/public/static/images/featured-project-2.png";

export const Featured = () => {
  return (
    <div>
      <h1 className="text-3xl dark:text-yellow-400 font-bold mb-3">Some things I have worked on</h1>
      <ul>
        <li className="mb-[100px]">
          <div className="sm:grid flex flex-col grid-cols-12 group relative">
            <div className="order-2 py-3 p-1 sm:p-0 col-span-3 col-start-6 col-end-13 z-10 row-start-1 text-right inline-block self-center">
              <div className="">
                <p className="text-sm mb-1 text-yellow-400  ">Featured Project</p>
                <h3 className="text-3xl mb-2  ">
                  <a href="https://jovial-twilight-4cf04b.netlify.app/" target="_blank" rel="noreferrer">
                    Recruitment Portal
                  </a>
                </h3>
                <p className="sm:bg-[hsl(216,65%,15%)] p-[10px] sm:p-[25px] rounded-sm shadow-xl  ">
                  This portal allows job seekers and companies to connect directly, chat in real time, track of all applications sent or received, and other cutting-edge features
                  to help you find the right fit.
                </p>
                <ul className="flex text-gray-400 [&>*]:sm:ml-4 [&>*]:ml-2 justify-end mt-5">
                  <li>Reactjs</li>
                  <li>Bootstrap</li>
                  <li>Ant Design</li>
                  <li>Redux</li>
                  <li>Redux Toolkit</li>
                </ul>
              </div>
            </div>
            <div className="cursor-pointer z-0 w-full h-full absolute sm:relative  col-span-10 col-start-1 row-start-1 self-center rounded-lg overflow-hidden ">
              <a href="https://jovial-twilight-4cf04b.netlify.app/" target="_blank" rel="noreferrer"></a>
              <Image alt="" className="opacity-30 group-hover:opacity-60 group-hover:blur-0 blur-sm transition-all ease-in duration-300" layout="responsive" src={FeaturedImage1} />
            </div>
          </div>
        </li>
        <li className="">
          <div className="sm:grid flex flex-col grid-cols-12 group relative">
            <div className="order-2 py-3 p-1 sm:p-0   z-10 row-start-1 col-span-7 col-start-1 text-right inline-block self-center">
              <div className="">
                <p className="text-sm mb-1 text-yellow-400  ">Featured Project</p>
                <h3 className="text-3xl mb-2  ">
                  <a href="https://github.com/halalsenpai/property-rental" target="_blank" rel="noreferrer">
                    Property Rental
                  </a>
                </h3>
                <p className="sm:bg-[hsl(216,65%,15%)] p-[10px] sm:p-[25px] rounded-sm shadow-xl  ">
                  Find property opportunities that others miss. Our superior property search and data enhancement makes finding the next deal a breeze.
                </p>
                <ul className="flex text-gray-400 [&>*]:sm:ml-4 [&>*]:ml-2 justify-end mt-5">
                  <li>Reactjs</li>
                  <li>Google Apis</li>
                  <li>Ant Design</li>
                  <li>KeyCloak</li>
                  <li>Redux Toolkit</li>
                </ul>
              </div>
            </div>
            <div className="cursor-pointer z-0 w-full h-full absolute sm:relative  col-end-13 col-span-10  row-start-1 self-center rounded-lg overflow-hidden ">
              <a href="https://github.com/halalsenpai/property-rental" target="_blank" rel="noreferrer"></a>
              <Image alt="" className="opacity-30 group-hover:opacity-60 group-hover:blur-0 blur-sm transition-all ease-in duration-300" layout="responsive" src={FeaturedImage2} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
