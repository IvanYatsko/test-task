import { SvgProps } from "@/app/assets/svgs/sngs.modules";
import { FC, ReactNode } from "react";

type FeatureProps = {
  title1: string;
  title2: string;
  text: string;
  icon: ReactNode;
};

const Feature: FC<FeatureProps> = ({ title1, title2, text, icon }) => {
  return (
    <div className="p-6 border-y border-customGray2 flex flex-col items-center">
      {icon}
      <h2 className="font-poppins text-title1 leading-title1 text-customOrange font-bold uppercase mt-2">
        {title1}
      </h2>
      <h2 className="font-poppins text-title1 leading-title1 text-customBlue font-bold uppercase mb-2">
        {title2}
      </h2>
      <p className="font-subtitle text-mediumText leading-mediumText text-customGray2">{text}</p>
    </div>
  );
};

export default Feature;
