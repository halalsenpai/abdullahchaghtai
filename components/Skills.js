import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      description: "UI/UX Development",
      skills: [
        { 
          name: "React", 
          icon: "/icons/react.svg",
          color: "#61DAFB",
          darkColor: "#149ECA"
        },
        { 
          name: "Next.js", 
          icon: "/icons/nextjs.svg",
          color: "#000000",
          darkColor: "#FFFFFF",
          invert: true
        },
        { 
          name: "TypeScript", 
          icon: "/icons/typescript.svg",
          color: "#3178C6",
          darkColor: "#3178C6"
        },
        { 
          name: "TailwindCSS", 
          icon: "/icons/tailwind.svg",
          color: "#06B6D4",
          darkColor: "#38BDF8"
        },
        { 
          name: "Redux", 
          icon: "/icons/redux.svg",
          color: "#764ABC",
          darkColor: "#764ABC"
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Creating scalable and efficient server-side applications",
      skills: [
        { 
          name: "Node.js", 
          icon: "/icons/nodejs.svg",
          color: "#339933",
          darkColor: "#539E43"
        },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "Redis", icon: "/icons/redis.svg" }
      ]
    },
    {
      title: "DevOps & Tools",
      description: "Streamlining development and deployment processes",
      skills: [
        { 
          name: "Docker", 
          icon: "/icons/docker.svg",
          color: "#2496ED",
          darkColor: "#2496ED"
        },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Jenkins", icon: "/icons/jenkins.svg" },
        { name: "Jira", icon: "/icons/jira.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 
                       bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Technical expertise and tools
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Category Navigation */}
          <div className="md:w-48 flex-shrink-0">
            <div className="sticky top-24 space-y-1.5">
              {skillCategories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300
                            ${activeCategory === idx 
                              ? 'bg-white dark:bg-gray-800 shadow-md text-yellow-500 dark:text-yellow-400' 
                              : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'}`}
                >
                  <span className="block text-sm font-medium">{category.title}</span>
                  <span className="text-xs opacity-60">{category.description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[activeCategory].skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-xl 
                                rounded-lg p-4 shadow-md dark:shadow-gray-900/50 
                                hover:shadow-lg transition-all duration-300"
                       style={{
                         '--skill-color': skill.color,
                         '--skill-dark-color': skill.darkColor
                       }}
                  >
                    <div className="relative z-10">
                      <div className="aspect-square relative mb-2">
                        <div className="absolute inset-0 flex items-center justify-center 
                                      transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            layout="fill"
                            objectFit="contain"
                            className={`p-3 transition-all duration-300
                              ${skill.invert ? 'dark:invert' : ''}
                              group-hover:drop-shadow-[0_0_0.3rem_var(--skill-color)]
                              dark:group-hover:drop-shadow-[0_0_0.3rem_var(--skill-dark-color)]`}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-900 dark:text-gray-100 
                                    transition-colors duration-300
                                    group-hover:text-[var(--skill-color)]
                                    dark:group-hover:text-[var(--skill-dark-color)]">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}; 