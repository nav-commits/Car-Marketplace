"use client";

import Card from "../../ui/Card";
import Image from "next/image";
import { cars } from "@/data/cars";
import Button from "../../ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { features } from "@/data/featuresData";

const WhyChooseUsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="px-6 mt-12">
      <Card className="p-4 bg-[#F9FBFC]">
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-12 mt-12">
          Why Choose Us?
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
          {features.map((feature) => (
            <article key={feature.title} className="flex flex-col gap-3 flex-1">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </Card>
      <section className="mt-16">
        <div className="relative mt-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {cars.map((car) => (
                <div key={car.id} className="min-w-[300px] flex-shrink-0">
                  <Card className="rounded-xl relative shadow-lg bg-[#050B20]">
                    <div className="relative w-full h-48">
                      <Image
                        src={car.image}
                        alt={car.title}
                        fill
                        className="object-cover rounded-t-xl"
                      />
                    </div>
                    {car.label && (
                      <div
                        className={clsx(
                          "absolute top-2 left-2 px-3 py-1 text-sm font-bold rounded-xl",
                          {
                            "bg-[#3D923A] text-white":
                              car.label === "Great Price",
                            "bg-blue-500 text-white":
                              car.label === "Low Mileage",
                            "bg-white text-black":
                              car.label !== "Great Price" &&
                              car.label !== "Low Mileage",
                          }
                        )}
                      >
                        {car.label}
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-white px-3 py-2 rounded-full">
                      <img src="/Icons/bookmark.svg" className="w-3 h-4" />
                    </div>
                    <div className="p-4 flex flex-col">
                      <div>
                        <h3 className="text-lg text-white font-bold">
                          {car.title}
                        </h3>
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
                          <img
                            src="/Icons/transmission.svg"
                            className="w-5 h-5"
                          />
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
                          type="button"
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
          <div className="flex justify-center gap-8 mt-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="p-3 px-5 bg-white rounded-full flex items-center border border-gray-300 justify-center hover:bg-gray-100"
            >
              <img src="/Icons/left.svg" alt="left-icon" className="w-3 h-3" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="p-3 px-5 bg-white rounded-full flex items-center border border-gray-300 justify-center hover:bg-gray-100"
            >
              <img
                src="/Icons/right.svg"
                alt="right-icon"
                className="w-3 h-3"
              />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUsSection;
