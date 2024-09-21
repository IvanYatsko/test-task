import { FC } from "react";
import { GET_VPN, VPN } from "@/app/constants/common.constants";
import { Logo } from "@/app/assets/svgs";
import Link from "next/link";

const Header: FC = () => {
  return (
    <div className="w-full bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Logo className="mr-1" />
            <div className="font-poppins text-subtitle leading-subtitle font-semibold text-customGray">
              {VPN}
            </div>
          </div>
        </Link>
        <button className="font-roboto bg-customBlue font-semibold text-white text-smallText leading-smallText py-3 px-6 rounded-full">
          <a href="#target-block">{GET_VPN}</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
