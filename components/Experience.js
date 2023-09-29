import React from "react";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { marked } from "marked";
import { toPascalCase } from "../utils";

export const Experience = ({ jobs }) => {
  console.log("jobs in experience.js", jobs);
  return (
    <section className="">
      <h1 className="text-3xl dark:text-yellow-400 font-bold mb-2">Work Experience</h1>
      <Tabs value="nextgen healthcare">
        <TabsHeader
          indicatorProps={{ className: "bg-transparent border rounded-none border-blue-800 dark:border-yellow-400" }}
          className="bg-transparent font-calibre text-gray-800 dark:text-gray-300">
          {jobs.map(({ slug, value }) => (
            <Tab className="text-black dark:text-gray-300" key={slug} value={slug}>
              {toPascalCase(slug)}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {jobs.map(({ frontmatter, content, slug }) => (
            <TabPanel className="font-calibre text-black dark:text-gray-300" key={slug} value={slug}>
              <span className="text-lg  font-bold">
                {frontmatter.title} <span className="dark:text-yellow-400"> @ </span>
                <a
                  href={frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group duration-300 text-lg text-black font-bold cursor-pointer dark:text-yellow-400">
                  {frontmatter.company}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 relative -top-2 bg-yellow-400"></span>
                </a>
              </span>
              <div className="text-sm mb-2">{frontmatter.range}</div>
              <div className="list-reset leading-snug" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};
