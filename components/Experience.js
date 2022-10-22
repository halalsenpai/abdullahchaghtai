import React from "react";
import { data } from "../constants/Experience";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { marked } from "marked";

export const Experience = ({ jobs }) => {
  console.log("jobs in experience.js", jobs);
  return (
    <section className="">
      <h1 className="text-3xl dark:text-yellow-400 font-bold">Work Experience</h1>
      <Tabs value="optimyse">
        <TabsHeader indicatorProps={{ className: "bg-transparent border rounded-none border-blue-800 dark:border-yellow-400" }} className="bg-transparent">
          {jobs.map(({ slug, value }) => (
            <Tab className="text-gray-500" key={slug} value={slug}>
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {jobs.map(({ frontmatter, content, slug }) => (
            <TabPanel key={slug} value={slug}>
              <span className="text-lg font-bold dark:text-white">
                {frontmatter.title} <span className="dark:text-yellow-400"> @ </span>
                <a
                  href={frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group duration-300 text-lg font-bold cursor-pointer dark:text-yellow-400">
                  {frontmatter.company}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellow-400"></span>
                </a>
              </span>
              <div className="text-gray-600 text-sm">{frontmatter.range}</div>
              <div className="list-reset text-gray-500" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};
