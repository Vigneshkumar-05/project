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
    action: () => {
      window.location.href = "/";
    },
  },
  {
    icon: QuickSpin,
    name: "Quick Spin",
    tooltip: "Quick Spin",
    action: () => {
      window.location.href = "/quickspin";
    },
  },
  {
    icon: OptimizationWizards,
    name: "Optimization Wizards",
    tooltip: "Optimization Wizards",
    action: () => {
      window.location.href = "/optimizationwizards";
    },
  },
  {
    icon: MPET,
    name: "MPET",
    tooltip: "MPET",
    action: () => {
      window.location.href = "/mpet";
    },
  },
  {
    icon: ClosedLoopTuning,
    name: "Closed Loop Tuning",
    tooltip: "Closed Loop Tuning",
    action: () => {
      window.location.href = "/closedlooptuning";
    },
  },
  {
    icon: AdvancedTuning,
    name: "Advanced Tuning",
    tooltip: "Advanced Tuning",
    action: () => {
      window.location.href = "/advancedtuning";
    },
  },
  {
    icon: RegisterMap,
    name: "Register Map",
    tooltip: "Register Map",
    action: () => {
      window.location.href = "/registermap";
    },
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
