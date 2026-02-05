import { carTypes } from "@/data/browseCarData";
import Card from "../../ui/Card";
import Image from "next/image";
import { reviewImages } from "@/data/reviewImages";
const NeedSomeInspirationSection: React.FC = () => {
  return (
    <section className="px-4 md:px-6 mt-12">
      <h2 className="font-bold text-2xl md:text-3xl mb-12">
        Need Some Inspiration?
      </h2>
      <div className="flex flex-col md:flex-row gap-3">
        {carTypes.map((type) => (
          <Card
            key={type.title}
            className="p-4 flex items-center justify-center border border-[#E9E9E9] rounded-lg"
          >
            <p className="text-md font-medium">{type.title}</p>
          </Card>
        ))}
      </div>
      <Card className="bg-[#405FF2] mt-8 rounded-xl p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="flex flex-col text-white text-center md:text-left max-w-xl">
            <h2 className="font-bold text-2xl mb-2">Who is BoxCar</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id es
            </p>
          </div>
          {reviewImages.map((card) => (
            <Card key={card.id} className="bg-white rounded-lg md:w-auto">
              <Image
                src={card.image}
                alt={"brand-named-images"}
                width={220}
                height={220}
              />
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default NeedSomeInspirationSection;
