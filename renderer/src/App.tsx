import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home";
import AdvancedTuning from "./pages/AdvancedTuning";
import ClosedLoopTuning from "./pages/ClosedLoopTuning";
import MPET from "./pages/MPET";
import OptimizationWizards from "./pages/OptimizationWizards";
import QuickSpin from "./pages/QuickSpin";
import RegisterMap from "./pages/RegisterMap";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen grid grid-rows-[3.5rem_1fr] grid-cols-[2.75rem_1fr_1fr]">
        <Navigation />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quickspin" element={<QuickSpin />} />
          <Route
            path="/optimization-wizards"
            element={<OptimizationWizards />}
          />
          <Route path="/mpet" element={<MPET />} />
          <Route path="/closedlooptuning" element={<ClosedLoopTuning />} />
          <Route path="/advancedtuning" element={<AdvancedTuning />} />
          <Route path="/registermap" element={<RegisterMap />} />
        </Routes>
        <div className="shadow-md">{/* <p>Slider</p> */}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
