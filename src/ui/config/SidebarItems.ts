import Home from "../assets/icons/home.svg";
import QuickSpin from "../assets/icons/quickspin.svg";
import OptimizationWizards from "../assets/icons/optimizationwizard.svg";
import MPET from "../assets/icons/mpet.svg";
import ClosedLoopTuning from "../assets/icons/closedlooptuning.svg";
import AdvancedTuning from "../assets/icons/advancedtuning.svg";
import RegisterMap from "../assets/icons/registermap.svg";
import OpenSidebar from "../assets/icons/opensidebar.svg";
import Disconnected from "../assets/icons/disconnected.svg";

const sidebarTopItems = [
  {
    icon: Home,
    name: "Home",
    tooltip: "Home",
    action: "/",
  },
  {
    icon: QuickSpin,
    name: "Quick Spin",
    tooltip: "Quick Spin",
    action: "/quickspin",
  },
  {
    icon: OptimizationWizards,
    name: "Optimization Wizards",
    tooltip: "Optimization Wizards",
    action: "/optimizationwizards",
  },
  {
    icon: MPET,
    name: "MPET",
    tooltip: "MPET",
    action: "/mpet",
  },
  {
    icon: ClosedLoopTuning,
    name: "Closed Loop Tuning",
    tooltip: "Closed Loop Tuning",
    action: "/closedlooptuning",
  },
  {
    icon: AdvancedTuning,
    name: "Advanced Tuning",
    tooltip: "Advanced Tuning",
    action: "/advancedtuning",
  },
  {
    icon: RegisterMap,
    name: "Register Map",
    tooltip: "Register Map",
    action: "/registermap",
  },
];

const sidebarBottomItems = [
  {
    icon: OpenSidebar,
    name: "Open sidebar",
    tooltip: "",
  },
  {
    icon: Disconnected,
    name: "Disconnected",
    tooltip: "Disconnected",
  },
];

export { sidebarTopItems, sidebarBottomItems };
