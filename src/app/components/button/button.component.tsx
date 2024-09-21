import { FC } from "react";

type ButtonProps = {
  text: string;
  styles?: string;
};

const Button: FC<ButtonProps> = ({ text, styles }) => {
  return (
    <button
      className={`font-poppins bg-customOrange text-white py-4 px-36 rounded-xl text-title2 leading-title2 font-bold mb-6 ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
