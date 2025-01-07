import Image from "next/image";
import React from "react";
import FeaturedImage1 from "/public/static/images/featured-project-1.png";
import FeaturedImage2 from "/public/static/images/featured-project-2.png";

export const Featured = () => {
  return (
    <div className="space-y-20">
      <h2 className="text-2xl font-bold text-yellow-400">Featured Projects</h2>
      
      <div className="space-y-32">
        <div className="group relative grid md:grid-cols-12 gap-4">
          <div className="md:col-span-7 md:col-start-1 z-10">
            <div className="space-y-4">
              <p className="text-yellow-400 text-sm">Featured Project</p>
              <h3 className="text-2xl font-bold">
                <a href="https://jovial-twilight-4cf04b.netlify.app/" 
                   className="hover:text-yellow-400 transition-colors"
                >
                  Recruitment Portal
                </a>
              </h3>
              <p className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                A modern recruitment platform connecting job seekers and companies with real-time chat 
                and application tracking capabilities.
              </p>
              <ul className="flex flex-wrap gap-4 text-sm text-gray-400">
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>Bootstrap</li>
                <li>Ant Design</li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-7 md:col-start-6 row-start-1 relative">
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src={FeaturedImage1}
                alt="Project screenshot"
                className="transition-all duration-300 
                         group-hover:scale-105 group-hover:opacity-75"
                layout="responsive"
              />
            </div>
          </div>
        </div>

        {/* Repeat similar structure for second project */}
      </div>
    </div>
  );
};
