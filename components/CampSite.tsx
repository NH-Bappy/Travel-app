import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string; // This should be the URL or path to the image
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-sm text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
              />
            ))}
          </span>
          <p className="text-base font-semibold md:text-lg md:font-semibold text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default CampSite;