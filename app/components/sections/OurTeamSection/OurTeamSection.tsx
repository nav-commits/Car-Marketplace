import Card from "../../ui/Card";
import Image from "next/image";
import clsx from "clsx";
import { teamMembers } from "@/data/ourteamData";

const OurTeamSection: React.FC = () => {
  return (
    <section className="px-4 md:px-6 mt-12">
      <h2 className="font-bold text-2xl md:text-3xl mb-12 text-center">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className={clsx(
              "flex flex-col justify-between items-center rounded-lg  h-full",
              member.bgColor
            )}
          >
            <div className="text-center pt-6 mb-4">
              <h3 className="font-bold">{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <Image
              src={member.imgSrc}
              alt={member.name}
              width={member.imgWidth}
              height={member.imgHeight}
              className="mt-auto"
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;
