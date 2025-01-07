import { motion } from "framer-motion";
import { ArrowRight, Calendar, GitHub, Linkedin } from "react-feather";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-100"
              >
                <span className="block">Hi, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r 
                               from-amber-500 to-yellow-600">
                  Abdullah Chaghtai
                </span>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl md:text-3xl text-gray-400"
              >
                Full Stack Engineer & Technical Lead
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-400 max-w-2xl"
              >
                Specializing in scalable applications, AI integration, and enterprise solutions. 
                Co-founder of Bashalog, transforming businesses through technology.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://calendly.com/bashalog-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium 
                         text-white bg-gradient-to-r from-amber-600 to-yellow-600 
                         dark:from-amber-500 dark:to-yellow-600
                         rounded-lg shadow-lg hover:shadow-amber-500/20 
                         hover:shadow-2xl transition-all duration-200 group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 
                                    group-hover:translate-x-1" />
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-base 
                         font-medium text-gray-900 dark:text-gray-100 
                         bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
                         rounded-lg shadow-lg hover:shadow-xl 
                         hover:bg-white dark:hover:bg-gray-800
                         transition-all duration-200
                         border border-gray-200/50 dark:border-gray-700/50"
              >
                View Projects
              </a>
            </motion.div>

            {/* Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-2 
                         bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
                         rounded-full border border-gray-200/50 dark:border-gray-700/50"
            >
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Co-founder & Technical Lead @
              </span>
              <a
                href="https://bashalog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-100 
                          hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
              >
                <span className="font-semibold">Bashalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/halalsenpai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-amber-500 
                         hover:bg-gray-800 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/halalsenpai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-amber-500 
                         hover:bg-gray-800 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Stats/Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Years Experience", value: "4+" },
              { label: "Projects Delivered", value: "20+" },
              { label: "Technologies", value: "15+" },
              { label: "Happy Clients", value: "10+" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-lg p-4
                         shadow-lg dark:shadow-gray-900/50 text-center
                         border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 
                       flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 