import RightPanel from "../components/RightPanel/RightPanel";

const OptimizationWizards: React.FunctionComponent = () => {
  return (
    <div className="flex justify-between">

      <div>
        <p>Optimization Wizards</p>
      </div>

      <div>
        <RightPanel/>
      </div>
      
    </div>
  );
};

export default OptimizationWizards;