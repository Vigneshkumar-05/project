import { FeatureList } from "../config/FeatureListItems";

const HomeFeaturesList: React.FunctionComponent = () => {
  return (
    <div className="m-1 w-[60%] grid xl:grid-rows-3 xl:grid-cols-2 grid-rows-6 grid-cols-1 gap-[5%]">
      {FeatureList.map((feature, index) => (
        <div
          key={index}
          className={`p-6 flex items-center cursor-pointer bg-[#ffffff] rounded-sm featurelist-hover ${feature?.css}`}
        >
          <feature.icon className="min-w-[30%] text-2xl text-gray-600 icon" />
          <p className="text-lg text-gray-700 whitespace-nowrap">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomeFeaturesList;
