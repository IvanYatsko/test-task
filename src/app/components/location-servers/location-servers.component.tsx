import { FC } from "react";
import { Hierarchy, Location } from "@/app/assets/svgs";

const LocationServers: FC = () => {
  return (
    <div className="flex justify-around items-center space-x-4 text-customBlack mt-6 mb-6 shadow-custom p-4 rounded-lg w-full">
      <div className="flex flex-row items-center gap-3">
        <Location />
        <div className="flex flex-col items-center">
          <p className="font-poppins text-title2 leading-title2 font-bold text-customBlack">50+</p>
          <p className="font-poppins text-smallText leading-smallText text-customGray2">Locations</p>
        </div>
      </div>
      <div className="w-px h-8 bg-customGray2"></div>
      <div className="flex flex-row items-center gap-3">
        <Hierarchy />
        <div className="flex flex-col items-center">
          <p className="font-poppins text-title2 leading-title2 font-bold text-customBlack">1000+</p>
          <p className="font-poppins text-smallText leading-smallText text-customGray2">Servers</p>
        </div>
      </div>
    </div>
  );
};

export default LocationServers;
