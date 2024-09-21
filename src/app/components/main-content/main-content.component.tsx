import { FC } from "react";
import Image from "next/image";
import { GET_VPN } from "@/app/constants/common.constants";
import Button from "../button/button.component";
import LocationServers from "../location-servers/location-servers.component";
import Feature from "../feature/feature.component";
import { Icon1, Icon2, Icon3, Icon4 } from "@/app/assets/svgs";
import ChooseName from "../choose-name/choose-name.component";

type MainContentProps = {
  children?: React.ReactNode;
};

const MainContent: FC<MainContentProps> = () => {
  return (
    <div className="text-center py-20 px-4 md:px-0 flex flex-col items-center">
      <h1 className="font-poppins text-largeTitle leading-largeTitle font-bold text-customBlack max-w-96">
        Access <span className="text-customBlue">everything securely</span> with
        <br />
        VPN
      </h1>
      {/* <Image src="/assets/Image.png" alt="Image" width={540} height={209} /> */}
      <a href="#target-block">
        <Button text={GET_VPN} />
      </a>
      {/* <Image src="/assets/trusted.png" alt="Image" width={136} height={42} /> */}
      <LocationServers />
      <div className="text-customGray2 font-poppins text-mediumText leading-mediumText font-medium mb-20">
        VPN-your <span className="text-customBlue">ultimate</span> solution for
        a private and secure online experience!
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <Feature
          title1="Unlimited"
          title2="access to content"
          text="Enjoy unlimited bandwidth to stay connected to the world's best
            shows, apps, and games!"
          icon={<Icon1 />}
        />
        <Feature
          title1="flashing"
          title2="connecting speed"
          text="VPN Lumos offers unlimited bandwidth for faster loading and no
            buffering!"
          icon={<Icon2 />}
        />
        <Feature
          title1="hide"
          title2="your location"
          text="Get your own unique IP for added security and access to restricted
            sites, apps, and services!"
          icon={<Icon3 />}
        />
        <Feature
          title1="bypass"
          title2="blocked sites"
          text="Access any website safely and anonymously!"
          icon={<Icon4 />}
        />
      </div>

      <ChooseName />

      <Button text={GET_VPN} styles="w-full" />
    </div>
  );
};

export default MainContent;
