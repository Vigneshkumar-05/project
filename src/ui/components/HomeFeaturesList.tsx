import { FeatureList } from "../config/FeatureListItems";

const HomeFeaturesList: React.FunctionComponent = () => {
  return (
    <div className="w-[55%] min-w-fit grid grid-rows-3 grid-cols-2 gap-[5%]">
      {FeatureList.map((feature, index) => (
        <div
          key={index}
          className={`p-5 flex items-center cursor-pointer bg-[#ffffff] rounded-sm featurelist-hover ${feature?.css}`}
        >
          <feature.icon className="h-full w-[30%] text-xl text-gray-600 icon " />
          <p className="h-full w-full text-center text-gray-700 whitespace-nowrap ">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomeFeaturesList;
