import RightPanel from "../components/RightPanel/RightPanel";

function ClosedLoopTuning(): JSX.Element {
  return (
    <div className="flex justify-between">

      <div>
        <p>Closed Loop Tuning</p>
      </div>

      <div>
        <RightPanel />
      </div>

    </div>
  );
};

export default ClosedLoopTuning;