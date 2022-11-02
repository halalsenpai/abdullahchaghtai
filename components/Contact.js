import React from "react";

export const Contact = () => {
  return (
    <div className="flex items-center flex-col justify-center text-center h-[600px] max-w-[600px]">
      <h1 className="text-lg text-yellow-400 mb-6"> want to know more?</h1>
      <div className="text-4xl font-bold mb-6">Get In Touch</div>
      <div className="text-lg mb-10">
        Currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </div>
      <a
        href="mailto:devchaghtai@gmail.com.com?subject=Mail from halalsenpai.com"
        target="_blank"
        rel="noreferrer"
        className="border border-solid rounded py-3 px-4 hover:cursor-pointer hover:border-yellow-500 hover:shadow border-yellow-400">
        Say Hello
      </a>
    </div>
  );
};
