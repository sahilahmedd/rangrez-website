import About from "@/components/About";
import Herosection from "@/components/home/Herosection";

export default function Home() {
  return (
    <div className="relative w-full">
      <Herosection />
      <About />
    </div>
  );
}
