import { quicklinks, nextSteps } from "../config/links";
import { useTabContext } from "../context/ActiveTabContext";

type LinksPropsType = {
  proceedStatus: boolean;
}

function Links({ proceedStatus }: LinksPropsType): JSX.Element {
  const { setActiveTab } = useTabContext();

  return proceedStatus ? (
    <section className="h-full w-full">
      {nextSteps.map((data, index) => (
        <div key={index} onClick={() => data.onClick(setActiveTab)} className=" bg-white mx-1 my-4 h-[24%] w-[60%] flex items-center shadow-custom1 cursor-pointer transition-[box-shadow] ease-in-out duration-500 rounded-md hover:shadow-custom3">
          <data.icon className="h-[40%] w-[20%] text-xl text-gray-600" />
          <div className="h-[80%] w-full flex flex-col justify-around">
            <p className="font-bold text-lgBlue">{data.text}</p>
            <p className="text-xsm">{data.description}</p>
          </div>
        </div>
      )
      )}
    </section>
  ) : (
    <section className="w-[55%] min-w-fit grid grid-rows-3 grid-cols-2 gap-[5%]">
      {quicklinks.map((data, index) => (
        <div
          key={index}
          className={`p-5 flex items-center cursor-pointer bg-[#ffffff] rounded-sm featurelist-hover ${data?.css}`}
        >
          <data.icon className="h-full w-[30%] text-xl text-gray-600 icon " />
          <p className="h-full w-full text-center text-gray-700 whitespace-nowrap ">
            {data.text}
          </p>
        </div>
      ))
      }
    </section >
  );
};

export default Links;

