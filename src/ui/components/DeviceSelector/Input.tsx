import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDeviceContext } from "../../context/DeviceContext";

type InputPropType = {
  handleDropdown: () => void;
  showDropdown: boolean;
};

function Input({ handleDropdown, showDropdown, }: InputPropType): JSX.Element {

  const { deviceName, setDeviceName } = useDeviceContext();

  return (
    <div className="h-full w-full col-span-2 center cursor-text">
      <fieldset className="h-full w-[90%] pb-2 flex justify-around items-center border-2 border-gray-200 rounded-md focus-within:border-gray-400">
        <legend className="ml-[0.7rem] px-[0.2rem]">
          <p className="text-xs text-gray-500">Select Device</p>
        </legend>

        <div className="w-full center">
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="w-[90%] h-[1.8rem] cursor-text text-sm bg-inherit focus:outline-none"
            placeholder="Select Your Device"
          />
        </div>

        <section className="w-[25%] h-full flex justify-evenly items-center">
          {deviceName !== "" && (
            <button className="center" onClick={() => setDeviceName("")}>
              <IoClose className="text-xl text-gray-500 cursor-pointer icon-styles" />
            </button>
          )}

          <button
            className={`center transition-[transform] duration-500 ease-in-out 
              ${showDropdown && "rotate-icon"}`}
            onClick={() => handleDropdown()}
          >
            <IoMdArrowDropdown className="text-xl text-gray-500 cursor-pointer icon-styles" />
          </button>
        </section>
      </fieldset>
    </div>
  );
};

export default Input;
