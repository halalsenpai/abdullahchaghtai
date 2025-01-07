import { motion } from "framer-motion";
import Image from "next/image";
import { GitHub, ExternalLink, Folder } from "react-feather";

export const Projects = () => {
  const projects = [
    {
      title: "Recruitment Portal",
      description: "A modern recruitment platform connecting job seekers and companies with real-time chat and application tracking capabilities.",
      image: "/static/images/featured-project-1.png",
      tech: ["React", "Redux Toolkit", "Bootstrap", "Ant Design"],
      github: "https://github.com/yourusername/recruitment-portal",
      external: "https://jovial-twilight-4cf04b.netlify.app/",
      color: "from-purple-400/20 to-blue-400/20"
    },
    // Add more projects with different gradient colors
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 
                       bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building exceptional digital experiences.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800/50 
                            backdrop-blur-xl shadow-2xl dark:shadow-gray-900/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
                
                <div className="relative grid md:grid-cols-2 gap-8 p-8">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((item, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 
                                     text-gray-600 dark:text-gray-400"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                                   transition-colors duration-200"
                        >
                          <GitHub className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </a>
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                                   transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="mt-32">
          <h3 className="text-2xl font-semibold text-center mb-12">Other Noteworthy Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <motion.a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-xl 
                         shadow-lg dark:shadow-gray-900/50 transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-yellow-400/10">
                    <Folder className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex gap-3">
                    <GitHub className="w-5 h-5 text-gray-400" />
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 
                             transition-colors duration-200">
                  Project Title
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  A brief description of the project and its core functionality.
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>React</span>
                  <span>•</span>
                  <span>Next.js</span>
                  <span>•</span>
                  <span>TailwindCSS</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}; 