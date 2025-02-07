import RightPanel from "../components/RightPanel/RightPanel";

const QuickSpin: React.FunctionComponent = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p>quick spin</p>
      </div>

      <div>
        <RightPanel/>
      </div>
    </div>
  );
}; 

export default QuickSpin;