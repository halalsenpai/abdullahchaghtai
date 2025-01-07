import { motion } from "framer-motion";
import Image from "next/image";
import { GitHub, ExternalLink, Folder } from "react-feather";

export const Projects = () => {
  const projects = [
    {
      title: "Le Gavroche",
      description: "Multi-tenant restaurant management platform with CMS and booking system",
      image: "/static/images/restaurant.png",
      link: "https://le-gavroche.netlify.app/",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      featured: true
    },
    {
      title: "Recruitment Portal",
      description: "A modern recruitment platform connecting job seekers and companies with real-time chat.",
      image: "/static/images/featured-project-1.png",
      tech: ["React", "Redux", "Bootstrap", "Ant Design"],
      github: "https://github.com/yourusername/recruitment-portal",
      external: "https://jovial-twilight-4cf04b.netlify.app/",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 
                       bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my expertise in building 
            scalable applications.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="group relative bg-gray-800/50 backdrop-blur-xl rounded-xl 
                            overflow-hidden shadow-gray-900/50 h-full">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center h-full space-x-4">
                      <a
                        href={project.link || project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-amber-500/20 text-amber-500 
                                 hover:bg-amber-500/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-amber-500/20 text-amber-500 
                                   hover:bg-amber-500/30 transition-colors"
                        >
                          <GitHub className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-100">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-100 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {/* ... other projects grid ... */}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}; 