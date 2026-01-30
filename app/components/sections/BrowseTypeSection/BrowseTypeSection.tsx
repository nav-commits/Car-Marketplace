import Card from "../../ui/Card";
import Image from "next/image";
import { carTypes } from "@/data/carTypes";
import Button from "../../ui/Button";

const BrowseTypeSection: React.FC = () => {
  return (
    <section className="px-6">
      <h2 className="text-center font-bold text-[40px] mb-12 mt-12">
        Browse by Type
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 justify-items-center gap-2">
        {carTypes.map((type) => (
          <Card
            key={type.title}
            className="flex flex-col items-center justify-center border border-[#E9E9E9] rounded-lg"
          >
            {type.icon && (
              <Image
                src={type.icon}
                alt={type.title + " icon"}
                width={34}
                height={34}
                className="mb-2"
              />
            )}
            <p className="text-md font-medium">{type.title}</p>
          </Card>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
        {/* Card 1 */}
        <Card className="rounded-lg" bgColor="bg-[#E9F2FF]">
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[32px] font-bold mb-4">
                Are You Looking For a Car?
              </h3>
              <p className="mb-4">
                We are committed to providing our customers with exceptional
                service.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Button
                title="Get Started"
                borderRadius="rounded-lg"
                className="px-6 py-4 bg-[#405FF2] text-white"
                icon={
                  <img
                    src="/Icons/cta-arrow.svg"
                    alt="search-icon"
                    className="w-3 h-3"
                  />
                }
              />
              <img
                src="/Icons/electric-car.svg"
                alt="electric car"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </Card>
        {/* Card 2 */}
        <Card className="rounded-lg" bgColor="bg-[#FFE9F3]">
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[32px] font-bold mb-4">
                Do You Want to Sell a Car?
              </h3>
              <p className="mb-4">
                We are committed to providing our customers with exceptional
                service.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Button
                title="Get Started"
                borderRadius="rounded-lg"
                className="px-6 py-4 bg-[#050B20] text-white"
                icon={
                  <img
                    src="/Icons/cta-arrow.svg"
                    alt="search-icon"
                    className="w-3 h-3"
                  />
                }
              />
              <img
                src="/Icons/electric-car2.svg"
                alt="electric car"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BrowseTypeSection;
