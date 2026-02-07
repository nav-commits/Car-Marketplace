import Image from "next/image";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import { selectOptions } from "../../../../data/carFilters";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#EEF1FB]">
      <p className="mt-20 mb-4 text-center p-4">
        Find cars for sale and for rent near you
      </p>
      <h1 className="text-[70px] text-center font-bold mb-6">
        Find Your Dream Car
      </h1>
      <Card className="bg-white rounded-lg lg:rounded-full p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          {selectOptions.map((item, index) => (
            <React.Fragment key={item.placeholder}>
              <div className="flex items-center">
                <Select placeholder={item.placeholder} options={item.options} />
              </div>
              {index !== selectOptions.length - 1 && (
                <div className="hidden lg:block h-6 w-px bg-gray-300" />
              )}
            </React.Fragment>
          ))}
          <Button
            borderRadius="rounded-full"
            type="button"
            className="bg-[#405FF2] px-3 py-3"
            icon={
              <img
                src="/Icons/search.svg"
                alt="search-icon"
                className="w-3 h-3"
              />
            }
          />
        </div>
      </Card>
      <div className="relative w-full flex justify-center mt-12">
        <Image
          src="/images/car.png"
          alt="Car image hero"
          width={800}
          height={356}
          priority
          className="z-0 max-w-full w-auto h-auto"
        />
        <div className="absolute bottom-0 left-0 w-full h-11 bg-white z-10" />
      </div>
    </section>
  );
};

export default HeroSection;
