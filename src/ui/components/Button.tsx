import React from "react";

type ButtonPropsType = {
  name: string;
  onClick: () => void;
  position: string;
};

const Button: React.FunctionComponent<ButtonPropsType> = ({
  name,
  onClick,
  position,
}) => {
  return (
    <button
      className={`${
        position === "primary"
          ? "bg-[#cc0000] text-white"
          : " bg-white text-secondaryRed ring-1 ring-red-600"
      } h-fit text-xs rounded-sm px-4 py-2`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
