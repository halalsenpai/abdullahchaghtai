import React from "react";
import { data } from "../constants/Experience";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";

export const Experience = () => {
  return (
    <section>
      <h1 className="text-3xl text-yellow-400 font-bold">Work Experience</h1>
      <Tabs value="html">
        <TabsHeader className="dark:bg-yellow-400">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {/* {desc} */}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};
