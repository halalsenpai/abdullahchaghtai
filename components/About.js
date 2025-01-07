import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 
                       bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A brief introduction about who I am and what I do.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-invert">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl 
                            shadow-gray-900/50 p-8 space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  As a Full Stack Engineer and Technical Lead at Bashalog, I bridge the gap between 
                  innovative ideas and enterprise-ready solutions. With expertise in both development 
                  and project management, I specialize in creating scalable applications that drive 
                  business growth.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My approach combines technical excellence with strategic thinking - whether it's 
                  implementing Odoo ERP systems, developing custom software solutions, or integrating 
                  AI capabilities. I've successfully led teams in delivering complex projects across 
                  various industries, from healthcare to retail.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  What sets me apart is my ability to understand both business requirements and technical 
                  challenges, enabling me to architect solutions that not only solve immediate problems 
                  but also scale for future growth. I'm particularly passionate about leveraging AI and 
                  automation to transform traditional business processes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative">
                {/* Image Container */}
                <div className="relative z-10 rounded-2xl overflow-hidden bg-gray-800/50 
                              shadow-gray-900/50">
                  <div className="relative aspect-square">
                    <Image
                      src="/static/abd.jpeg"
                      alt="Abdullah at UBIT"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500/20 to-transparent 
                              rounded-2xl opacity-50" />
              </div>

              {/* Quick Info Cards */}
              <div className="mt-6 space-y-2">
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 
                              shadow-gray-900/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Full Stack Engineer</span>
                    <span className="font-medium text-amber-500">4+ Years</span>
                  </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 
                              shadow-gray-900/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Resume</span>
                    <a href="/Abdullah-Chaghtai.pdf" 
                       className="font-medium text-amber-500 hover:text-amber-400 transition-colors">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}; 