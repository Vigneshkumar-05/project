import RightPanel from "../components/RightPanel/RightPanel";

const AdvancedTuning: React.FunctionComponent = () => {
  return (
    <div className="flex justify-between">

      <div>
        <p>Advanced Tuning</p>
      </div>

      <div>
        <RightPanel/>
      </div>
      
    </div>
  );
};

export default AdvancedTuning;