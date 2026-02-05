import Card from "../../ui/Card";
import { features } from "@/data/featuresData";

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="px-6 mt-12">
      <Card className="p-4 bg-[#F9FBFC]">
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-12 mt-12">
          Why Choose Us?
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
          {features.map((feature) => (
            <article key={feature.title} className="flex flex-col gap-3 flex-1">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default WhyChooseUsSection;
