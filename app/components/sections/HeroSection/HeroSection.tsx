import Image from "next/image";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#EEF1FB] z-100">
      <p className="text-[16px] pt-8">
        Find cars for sale and for rent near you
      </p>
      <h1 className="text-[70px] font-bold mb-4">Find Your Dream Car</h1>
      <Card className="bg-white rounded-full p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Select
            placeholder="Used Cars"
            options={[
              { label: "Shoes", value: "shoes" },
              { label: "Hats", value: "hats" },
              { label: "Jackets", value: "jackets" },
            ]}
          />
          <Select
            placeholder="Any Makes"
            options={[
              { label: "Shoes", value: "shoes" },
              { label: "Hats", value: "hats" },
              { label: "Jackets", value: "jackets" },
            ]}
          />
          <Select
            placeholder="Any Models"
            options={[
              { label: "Shoes", value: "shoes" },
              { label: "Hats", value: "hats" },
              { label: "Jackets", value: "jackets" },
            ]}
          />

          <Select
            placeholder="All Prices"
            options={[
              { label: "Shoes", value: "shoes" },
              { label: "Hats", value: "hats" },
              { label: "Jackets", value: "jackets" },
            ]}
          />
          <Button
            boderRadius="rounded-full"
            className="bg-[#405FF2] px-3 py-3"
            icon={
              <img
                src="/Icons/search.svg"
                alt="phone-icon"
                className="w-4 h-4"
              />
            }
          />
        </div>
      </Card>
      <Image
        src="/images/car.png"
        alt="Car"
        width={800}
        height={356}
        className="relative z-1 top-10"
        priority
      />
    </section>
  );
};

export default HeroSection;
