import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { DeviceContextProvider } from "./context/DeviceContext";

import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import AdvancedTuning from "./pages/AdvancedTuning";
import ClosedLoopTuning from "./pages/ClosedLoopTuning";
import MPET from "./pages/MPET";
import OptimizationWizards from "./pages/OptimizationWizards";
import QuickSpin from "./pages/QuickSpin";
import RegisterMap from "./pages/RegisterMap";

const App: React.FunctionComponent = () => {
  return (
    <DeviceContextProvider>
      <Router>
        <div className="max-w-screen h-screen grid grid-rows-[5.45%_1fr] grid-cols-[3%_1fr] bg-[#f9f9f9]">
          <Navigation />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quickspin" element={<QuickSpin />} />
            <Route
              path="/optimizationwizards"
              element={<OptimizationWizards />}
            />
            <Route path="/mpet" element={<MPET />} />
            <Route path="/closedlooptuning" element={<ClosedLoopTuning />} />
            <Route path="/advancedtuning" element={<AdvancedTuning />} />
            <Route path="/registermap" element={<RegisterMap />} />
          </Routes>
        </div>
      </Router>
    </DeviceContextProvider>
  );
};

export default App;
