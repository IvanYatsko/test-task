import { FC } from "react";

type PersonProps = {
  name: string;
};

const Person: FC<PersonProps> = ({ name }) => {
  return (
    <label className="flex justify-start items-center space-x-4 text-customBlack mb-4 shadow-custom p-4 rounded-lg w-full">
      <input type="radio" name="option" value={name} className="form-radio" />
      <p className="font-poppins text-mediumText leading-mediumText text-customBlack font-semibold">
        {name}
      </p>
    </label>
  );
};

export default Person;
