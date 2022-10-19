import { AboutSection } from "../components/AboutSection";
import { Herosection } from "../components/Herosection";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

export default function Home() {
  return (
    <main className="dark:bg-[#0a192f] h-fit min-h-screen">
      <SocialMediaLinks />
      <div className="h-screen flex justify-center items-center min-h-[500px]">
        <Herosection />
      </div>
      <div className="mx-auto px-[10px] h-full sm:px-[72px] max-w-[900px] py-[100px]">
        <AboutSection />
      </div>
    </main>
  );
}
