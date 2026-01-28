import Card from "../../ui/Card";
import Image from "next/image";
import { carTypes } from "@/data/carTypes";
import Button from "../../ui/Button";

const BrowseTypeSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-center font-bold text-[40px] mb-12 mt-12">
        Browse by Type
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 justify-items-center gap-2">
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
      <div className="flex justify-center gap-8 mt-12 p-6">
        <Card className="rounded-lg" bgColor="bg-[#E9F2FF]">
          <div className="p-8">
            <h3 className="text-[40px] font-bold">
              Are You Looking For a Car?
            </h3>
            <p className="mb-4">
              We are committed to providing our customers with exceptional
              service.
            </p>
            <Button
              title="Get Started"
              borderRadius="rounded-lg"
              className="px-6 py-4 bg-[#405FF2] text-white"
            />
          </div>
        </Card>
        <Card className="rounded-lg" bgColor="bg-[#FFE9F3]">
          <h3 className="text-[40px] font-bold mb-2 p-3">
            Do You Want to Sell a Car ?
          </h3>
          <p className="mb-4">
            We are committed to providing our customers with exceptional
            service.
          </p>
          <Button
            title="Get Started"
            borderRadius="rounded-lg"
            className="px-6 py-4 bg-[#050B20] text-white"
          />
        </Card>
      </div>
    </section>
  );
};

export default BrowseTypeSection;
