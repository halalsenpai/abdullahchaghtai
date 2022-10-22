import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { AboutSection } from "../components/AboutSection";
import { Experience } from "../components/Experience";
import { Herosection } from "../components/Herosection";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

export default function Home({ jobs }) {
  console.log("files", jobs);
  return (
    <main className="dark:bg-[#0a192f] h-fit min-h-screen">
      <SocialMediaLinks />
      <div className="h-screen flex justify-center items-center min-h-[500px]">
        <Herosection />
      </div>
      <div className="mx-auto px-[10px] h-full sm:px-[72px] max-w-[900px] py-[100px]">
        <AboutSection />
      </div>
      <div className="mx-auto px-[10px] sm:px-[72px] max-w-[900px] py-[100px]">
        <Experience />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/jobs"));
  console.log("something", files);

  const jobs = files.map((filename) => {
    const markDownWithMeta = fs.readFileSync(path.join("content/jobs", filename), "utf-8");
    const { data: frontmatter, content } = matter(markDownWithMeta);
    return {
      frontmatter,
      content,
    };
  });

  return {
    props: {
      jobs: jobs,
    },
  };
}
