import BrowseTypeSection from "./components/sections/BrowseTypeSection/BrowseTypeSection";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import MostSearchSection from "./components/sections/MostSearchSection/MostSearchSection";
import NeedSomeInspirationSection from "./components/sections/NeedSomeInspirationSection/NeedSomeInspirationSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection/WhyChooseUsSection";
export default function Home() {
  return (
    <div className="p-8">
      <main>
       <HeroSection/>
       <BrowseTypeSection/>
       <MostSearchSection/>
       <WhyChooseUsSection/>
       <NeedSomeInspirationSection/>
      </main>
    </div>
  );
}
