"use client";

import clsx from "clsx";
import { useState } from "react";
import Card from "../../ui/Card";
import Image from "next/image";
import { cars } from "../../../../data/cars";
import Tabs from "../../ui/Tabs";

const MostSearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("In Stock");
  const searchedCarsTabs = ["In Stock", "Sedan", "SUV", "Convertible"];
  const filteredCars =
    activeTab === "In Stock"
      ? cars.slice(0, 4)
      : cars.filter((car) =>
          car.description.toLowerCase().includes(activeTab.toLowerCase())
        );

  return (
    <section className="px-6">
      <h2 className="text-center font-bold text-[40px] mb-12 mt-12">
        The Most Searched Cars
      </h2>
      <div className="flex gap-6 justify-center border-b max-w-7xl mx-auto border-gray-300">
      <Tabs
        tabs={searchedCarsTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        className="max-w-7xl mx-auto"
      />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mt-6">
        {filteredCars.map((car) => (
          <Card
            key={car.id}
            className="rounded-xl shadow-lg bg-[#050B20] overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={car.image}
                alt={car.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              <div>
                <p className="text-lg text-white font-bold leading-tight">
                  {car.title}
                </p>
                <p className="text-sm text-white opacity-80 line-clamp-2">
                  {car.description}
                </p>
              </div>

              <div className="border-t border-gray-600 my-2" />

              {/* Specs */}
              <div className="flex justify-between text-xs text-white">
                <div className="flex flex-col items-center gap-1">
                  <img src="/Icons/meter.svg" className="w-5 h-5" />
                  <span>{car.miles.toLocaleString()} mi</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <img src="/Icons/gas.svg" className="w-5 h-5" />
                  <span>{car.fuel}</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <img src="/Icons/transmission.svg" className="w-5 h-5" />
                  <span>{car.transmission}</span>
                </div>
              </div>

              <div className="border-t border-gray-600 my-2" />

              {/* Price */}
              <p className="text-lg font-semibold text-white">
                ${car.price.toLocaleString()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MostSearchSection;
