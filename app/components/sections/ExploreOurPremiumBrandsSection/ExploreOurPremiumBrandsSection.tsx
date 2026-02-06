import Image from "next/image";
import Button from "../../ui/Button";

const ExploreOurPremiumBrandsSection: React.FC = () => {
  return (
    <section className="mt-12 bg-[#F9FBFC] px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex max-w-xl flex-col gap-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#050B20]">
            Explore Our Premium Brands
          </h3>
          <p className="text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-2 flex justify-center md:justify-start">
            <Button
              title="Get Started"
              type="button"
              borderRadius="rounded-lg"
              className="items-center gap-2 bg-[#405FF2] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              icon={
                <img
                  src="/Icons/cta-arrow.svg"
                  alt="arrow icon"
                  className="h-3 w-3"
                />
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/Images/logo-brand.png"
            alt="Premium brands"
            width={320}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreOurPremiumBrandsSection;
