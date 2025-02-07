import RightPanel from "../components/RightPanel/RightPanel";

const ClosedLoopTuning: React.FunctionComponent = () => {
  return (
    <div className="flex justify-between">

      <div>
        <p>Closed Loop Tuning</p>
      </div>

      <div>
        <RightPanel/>
      </div>
      
    </div>
  );};

export default ClosedLoopTuning;