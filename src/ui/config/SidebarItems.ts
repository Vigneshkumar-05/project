import { RiHome4Line } from "react-icons/ri";
import { PiSpinnerBallDuotone } from "react-icons/pi";
import { MdOutlineTune } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { TbChartTreemap } from "react-icons/tb";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";

const sidebarTopItems = [
  {
    icon: RiHome4Line,
    name: "Home",
    tooltip: "Home",
    action: "/",
  },
  {
    icon: PiSpinnerBallDuotone,
    name: "Quick Spin",
    tooltip: "Quick Spin",
    action: "/quickspin",
  },
  {
    icon: MdOutlineTune,
    name: "Optimization Wizards",
    tooltip: "Optimization Wizards",
    action: "/optimizationwizards",
  },
  {
    icon: IoMdFootball,
    name: "MPET",
    tooltip: "MPET",
    action: "/mpet",
  },
  {
    icon: MdInsertChartOutlined,
    name: "Closed Loop Tuning",
    tooltip: "Closed Loop Tuning",
    action: "/closedlooptuning",
  },
  {
    icon: IoMdSettings,
    name: "Advanced Tuning",
    tooltip: "Advanced Tuning",
    action: "/advancedtuning",
  },
  {
    icon: TbChartTreemap,
    name: "Register Map",
    tooltip: "Register Map",
    action: "/registermap",
  },
];

const sidebarBottomItems = [
  {
    icon: MdOutlineKeyboardDoubleArrowRight,
    name: "Open sidebar",
    tooltip: "",
  },
  {
    icon: IoLinkSharp,
    name: "Disconnected",
    tooltip: "Disconnected",
  },
];

export { sidebarTopItems, sidebarBottomItems };
