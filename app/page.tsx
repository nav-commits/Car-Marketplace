import BrowseTypeSection from "./components/sections/BrowseTypeSection/BrowseTypeSection";
import ExploreOurPremiumBrandsSection from "./components/sections/ExploreOurPremiumBrandsSection/ExploreOurPremiumBrandsSection";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import LatestBlogsSection from "./components/sections/LatestBlogsSection/LatestBlogsSection";
import MostSearchSection from "./components/sections/MostSearchSection/MostSearchSection";
import NeedSomeInspirationSection from "./components/sections/NeedSomeInspirationSection/NeedSomeInspirationSection";
import OurTeamSection from "./components/sections/OurTeamSection/OurTeamSection";
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
       <OurTeamSection/>
       <LatestBlogsSection/>
       <ExploreOurPremiumBrandsSection/>
      </main>
    </div>
  );
}
