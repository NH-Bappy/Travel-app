import Image from "next/image";

type FeatureItem =  {
    title:string;
    icon:string;
    description:string;
}

const FeatureItems = ({title,icon,description}:FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
        <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image
        src={icon}
        alt="map"
        width={28}
        height={28}
        />
        </div>
        <h2 className="text-xl font-semibold leading-[120%] lg:text-[32px] lg:font-semibold lg:leading-[120%] mt-5 capitalize">
        {title}
        </h2>
        <p className="text-base mt-5 bg-white/80 font-sans text-[#7B7B7B] lg:mt-[30px] lg:bg-none">
        {description}
        </p>
    </li>
  )
}

export default FeatureItems