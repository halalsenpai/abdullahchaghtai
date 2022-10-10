import { Herosection } from "../components/Herosection";

export default function Home() {
  return (
    <div>
      <main className="dark:bg-[#0a192f]">
        <div className="sm:h-screen sm:flex sm:justify-center sm:items-center sm:min-h-[500px]">
          <Herosection />
        </div>
      </main>
    </div>
  );
}
