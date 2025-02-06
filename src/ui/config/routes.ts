// Components
import Home from "../pages/Home";
import AdvancedTuning from "../pages/AdvancedTuning";
import ClosedLoopTuning from "../pages/ClosedLoopTuning";
import MPET from "../pages/MPET";
import OptimizationWizards from "../pages/OptimizationWizards";
import QuickSpin from "../pages/QuickSpin";
import RegisterMap from "../pages/RegisterMap";

// icons
import { RiHome4Line } from "react-icons/ri";
import { PiSpinnerBallDuotone } from "react-icons/pi";
import { MdOutlineTune } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { TbChartTreemap } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";



const routes = [
  {
    icon: RiHome4Line,
    name: "Home",
    component: Home,
  },
  {
    icon: PiSpinnerBallDuotone,
    name: "Quick Spin",
    component: QuickSpin,
  },
  {
    icon: MdOutlineTune,
    name: "Optimization Wizards",
    component: OptimizationWizards,
  },
  {
    icon: IoMdFootball,
    name: "MPET",
    component: MPET,
  },
  {
    icon: MdInsertChartOutlined,
    name: "Closed Loop Tuning",
    component: ClosedLoopTuning,
  },
  {
    icon: IoMdSettings,
    name: "Advanced Tuning",
    component: AdvancedTuning,
  },
  {
    icon: TbChartTreemap,
    name: "Register Map",
    component: RegisterMap,
  },
];

const sidebarFunctions = [
  {
    icon: MdOutlineKeyboardDoubleArrowRight,
    name: "Open sidebar",
  },
  {
    icon: IoLinkSharp,
    name: "Disconnected",
  },
];

const navigationRoutes = [
  {
    name: "File",
    submenu: [
      {
        name: "Load registers",
        action: () => {
          console.log("Load registers clicked");
        },
      },
      {
        name: "Save registers",
        action: () => {
          console.log("Save registers clicked");
        },
      },
      {
        name: "Compare Tuning Files",
        action: () => {
          console.log("Compare Tuning Files clicked");
        },
      },
    ],
  },
  {
    name: "Options",
    submenu: [
      {
        name: "Serial Port",
        action: () => {
          console.log("Serial Port clicked");
        },
      },
    ],
  },
  {
    name: "Tools",
    submenu: [
      {
        name: "Open Scripting Windows",
        action: async () => {
          window.navigationApi.openScriptWindow();
        },
      },
    ],
  },
  {
    name: "Help",
    submenu: [
      {
        name: "Product Page",
        action: () => {
          console.log("Product Page clicked");
        },
      },
      {
        name: "Tool Guide",
        action: () => {
          console.log("Tool Guide clicked");
        },
      },
      {
        name: "E2E Support",
        action: () => {
          console.log("E2E Support clicked");
        },
      },
      {
        name: "View Readme",
        action: () => {
          console.log("View Readme clicked");
        },
      },
      {
        name: "About",
        action: () => {
          console.log("About clicked");
        },
      },
    ],
  },
  {
    name: "Documents",
    submenu: [
      {
        name: "User's Guide",
        action: () => {
          console.log("User's Guide clicked");
        },
      },
      {
        name: "Tuning Guide",
        action: () => {
          console.log("Tuning Guide clicked");
        },
      },
      {
        name: "Datasheet",
        action: () => {
          console.log("Datasheet clicked");
        },
      },
    ],
  },
];


export { routes, sidebarFunctions, navigationRoutes };
