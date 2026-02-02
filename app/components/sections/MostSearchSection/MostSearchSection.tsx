"use client";

import { useState } from "react";
import Card from "../../ui/Card";
import Image from "next/image";
import { cars } from "../../../../data/cars";
import Tabs from "../../ui/Tabs";
import Button from "../../ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const MostSearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("In Stock");
  const searchedCarsTabs = ["In Stock", "Sedan", "SUV", "Convertible"];

  const filteredCars = cars.filter((car) => {
    if (activeTab === "In Stock") return car.inStock;
    return car.category === activeTab;
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true });
  return (
    <section className="px-6">
      <h2 className="text-center font-bold text-[40px] mb-12 mt-12">
        The Most Searched Cars
      </h2>

      {/* Tabs */}
      <div className="flex gap-6 justify-center border-b max-w-7xl mx-auto border-gray-300">
        <Tabs
          tabs={searchedCarsTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          className="max-w-7xl mx-auto"
        />
      </div>
      {/* Carousel */}
      <div className="relative mt-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="min-w-[300px] flex-shrink-0">
                <Card className="rounded-xl shadow-lg bg-[#050B20]">
                  <div className="relative w-full h-48">
                    <Image
                      src={car.image}
                      alt={car.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-4 flex flex-col">
                    <div>
                      <p className="text-lg text-white font-bold">{car.title}</p>
                      <p className="text-sm text-white opacity-80 line-clamp-2">
                        {car.description}
                      </p>
                    </div>
                    <div className="border-t border-gray-600 my-2" />
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

                    <div className="flex gap-3 items-center justify-between">
                      <p className="text-lg font-semibold text-white">
                        ${car.price.toLocaleString()}
                      </p>
                      <Button
                        title="View Details"
                        borderRadius="rounded-lg"
                        className="px-6 py-4 text-white"
                        icon={
                          <img
                            src="/Icons/cta-arrow.svg"
                            alt="search-icon"
                            className="w-3 h-3"
                          />
                        }
                      />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Arrows */}
        <div className="flex justify-center gap-8 mt-3">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="p-3 px-5 bg-white rounded-full flex items-center border border-gray-300 justify-center hover:bg-gray-100"
          >
            <FiArrowLeft className="text-black w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="p-3 px-5 bg-white rounded-full flex items-center border border-gray-300 justify-center hover:bg-gray-100"
          >
            <FiArrowRight className="text-black w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostSearchSection;
