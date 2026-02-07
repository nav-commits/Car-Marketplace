import Card from "../../ui/Card";
import Image from "next/image";
import clsx from "clsx";
import { cars } from "@/data/cars";

const LatestBlogsSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <section className="px-4 md:px-6 mt-12">
      <h2 className="font-bold text-2xl md:text-3xl mb-12 text-center">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.slice(6, 9).map((car) => (
          <Card key={car.id} className="rounded-xl relative">
           <div className="relative w-full h-48">
  <Image
    src={car.image}
    alt={car.title}
    fill
    sizes="100vw"
    className="object-cover rounded-xl"
  />
</div>

            {car.label && (
              <div
                className={clsx(
                  "absolute top-2 left-2 px-3 py-1 text-sm font-bold rounded-xl",
                  {
                    "bg-[#3D923A] text-white": car.label === "Great Price",
                    "bg-blue-500 text-white": car.label === "Low Mileage",
                    "bg-white text-black":
                      car.label !== "Great Price" &&
                      car.label !== "Low Mileage",
                  }
                )}
              >
                {car.label}
              </div>
            )}
            <div className="p-2">
              <div className="flex  gap-3">
                {car.admin && (
                  <p className="text-sm opacity-80 line-clamp-2">{car.admin}</p>
                )}
                {car.createdAt && (
                  <p className="text-sm opacity-80">
                    {formatDate(car.createdAt)}
                  </p>
                )}
              </div>
              <h3 className="text-lg font-medium">{car.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogsSection;
