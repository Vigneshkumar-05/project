type ButtonPropsType = {
  name: string;
  onClick: () => void;
  position: string;
  disabled?: boolean;
};

function Button({ name, onClick, position, disabled }: ButtonPropsType): JSX.Element {
  return (
    <button
      className={`${position === "primary"
        ? "bg-[#cc0000] text-white"
        : " bg-white text-secondaryRed ring-1 ring-red-600"
        } h-fit text-xs rounded-sm px-4 py-2 ${disabled && "cursor-not-allowed bg-red-200"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
