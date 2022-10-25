import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { AboutSection } from "../components/AboutSection";
import { Experience } from "../components/Experience";
import { Herosection } from "../components/Herosection";
import { SocialMediaLinks } from "../components/SocialMediaLinks";
import { sortByDate } from "../utils";

export default function Home({ jobs }) {
  return (
    <main className="dark:bg-[#0a192f] h-fit min-h-screen">
      <SocialMediaLinks />
      <div className="h-screen flex justify-center items-center min-h-[500px]">
        <Herosection />
      </div>
      <div className="mx-auto px-[20px] h-full sm:px-[72px] max-w-[900px] pb-[60px]">
        <AboutSection />
      </div>
      <div className="mx-auto px-[20px] sm:px-[72px] max-w-[900px] py-[60px]">
        <Experience jobs={jobs} />
      </div>
    </main>
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
