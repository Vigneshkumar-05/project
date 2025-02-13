import RightPanel from "../components/RightPanel/RightPanel";

function AdvancedTuning(): JSX.Element {
  return (
    <div className="flex justify-between">

      <div>
        <p>Advanced Tuning</p>
      </div>

      <div>
        <RightPanel />
      </div>

    </div>
  );
};

export default AdvancedTuning;