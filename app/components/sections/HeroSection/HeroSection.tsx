import Image from "next/image";
const HeroSection: React.FC = () => {
  return (
    <section className="flex bg-[#EEF1FB] flex-col items-center justify-center  px-4">
      <p className="text-[16px] p-8">
        Find cars for sale and for rent near you
      </p>
      <h1 className="text-[70px] font-bold mb-4">Find Your Dream Car</h1>
      <Image
        src="/Images/car.png"
        alt="car"
        width={1166}
        height={356}
        className="object-cover"
      />
    </section>
  );
};

export default HeroSection;
