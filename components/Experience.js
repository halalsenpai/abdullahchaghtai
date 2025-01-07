import { motion } from "framer-motion";
import { marked } from "marked";
import { Calendar, MapPin } from "react-feather";
import { useState } from "react";

export const Experience = ({ jobs }) => {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 
                       bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My journey in software development
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Job Navigation */}
          <div className="md:w-48 flex-shrink-0">
            <div className="sticky top-24 space-y-1.5">
              {jobs.map((job, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveJob(idx)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300
                            ${activeJob === idx 
                              ? 'bg-white dark:bg-gray-800 shadow-md text-yellow-500 dark:text-yellow-400' 
                              : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'}`}
                >
                  <span className="block text-sm font-medium">
                    {job.frontmatter.company}
                  </span>
                  <span className="text-xs opacity-60">
                    {job.frontmatter.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Job Content */}
          <div className="flex-1">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeJob === idx ? 1 : 0,
                  y: activeJob === idx ? 0 : 20,
                  display: activeJob === idx ? 'block' : 'none'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-lg 
                              shadow-md dark:shadow-gray-900/50 p-6">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                        {job.frontmatter.title}
                      </h3>
                      <a
                        href={job.frontmatter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-yellow-400 transition-colors"
                      >
                        @ {job.frontmatter.company}
                      </a>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{job.frontmatter.range}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.frontmatter.location}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-gray-600 dark:text-gray-400">
                      <div 
                        className="space-y-2 [&>ul]:list-none [&>ul]:space-y-2"
                        dangerouslySetInnerHTML={{ 
                          __html: marked(job.content).replace(
                            /<li>/g, 
                            '<li class="relative pl-6 before:content-[\'▹\'] before:absolute before:left-0 before:text-yellow-400">'
                          )
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
