import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { sortByDate } from "../utils";
import { Skills } from "../components/Skills";

export default function Home({ jobs }) {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience jobs={jobs} />
      <Projects />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/jobs"));
  console.log("something", files);

  const jobs = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markDownWithMeta = fs.readFileSync(path.join("content/jobs", filename), "utf-8");
    const { data: frontmatter, content } = matter(markDownWithMeta);
    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      jobs: jobs.sort(sortByDate),
    },
  };
}
