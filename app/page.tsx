import BrowseTypeSection from "./components/sections/BrowseTypeSection/BrowseTypeSection";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import MostSearchSection from "./components/sections/MostSearchSection/MostSearchSection";
export default function Home() {
  return (
    <div className="p-8">
      <main>
       <HeroSection/>
       <BrowseTypeSection/>
       <MostSearchSection/>
      </main>
    </div>
  );
}
