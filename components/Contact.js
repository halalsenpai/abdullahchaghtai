import React from "react";

export const Contact = () => {
  return (
    <div className="section-container text-center">
      <p className="text-yellow-400 text-sm mb-4">What's Next?</p>
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-400 mb-12">
        I'm currently open to new opportunities. Whether you have a question
        or just want to say hi, I'll get back to you!
      </p>
      <a
        href="mailto:devchaghtai@gmail.com"
        className="inline-block px-8 py-4 border-2 border-yellow-400 
                 text-yellow-400 hover:bg-yellow-400/10 transition-colors
                 rounded"
      >
        Say Hello
      </a>
    </div>
  );
};
