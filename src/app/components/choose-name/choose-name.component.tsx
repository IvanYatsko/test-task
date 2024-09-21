import { FC } from "react";
import Person from "./person.component";

async function getData() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const result = await response.json();
  return result.results;
}

type DataType = {
  email: string;
};

const ChooseName: FC = async () => {
  const data: DataType[] = await getData();

  return (
    <div className="mb-4 w-full" id="target-block">
      <p className="font-poppins text-title2 leading-title2 text-customBlue font-bold mb-20">
        Millions of people trust us!
      </p>
      <div className="flex flex-col items-start">
        <p className="font-poppins text-title1 leading-title1 text-customOrange font-bold uppercase mb-4">
          CHOOSE <span className="text-customBlue">YOUR NAME</span>
        </p>
        <div className="space-y-4 w-full">
          {data?.map((item: DataType) => (
            <Person key={item.email} name={item.email} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseName;
