import { FaUserCog } from "react-icons/fa";
import { RiBarChartBoxFill } from "react-icons/ri";
import { MdOutlineTune } from "react-icons/md";
import { RiFolderChartFill } from "react-icons/ri";
import { GiSpanner } from "react-icons/gi";
import { TbHelpHexagonFilled } from "react-icons/tb";

import { PiSpinnerBallDuotone } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { TbChartTreemap } from "react-icons/tb";


const quicklinks = [
    {
        icon: FaUserCog,
        text: "User Guide",
        css: "rounded-tl-[1.5rem] "
    },
    {
        icon: RiFolderChartFill,
        text: "Product Page",
        css: "rounded-tr-[1.5rem] "

    },
    {
        icon: RiBarChartBoxFill,
        text: "Datasheet",
    },
    {
        icon: GiSpanner,
        text: "Tool Page",
    },
    {
        icon: MdOutlineTune,
        text: "Tuning Guide",
        css: "rounded-bl-[1.5rem] "

    },
    {
        icon: TbHelpHexagonFilled,
        text: "E2E Support",
        css: "rounded-br-[1.5rem] "

    },
];

const nextSteps = [
    {
        icon: PiSpinnerBallDuotone,
        text: "Quick Spin",
        description: "Get your motor spining in just few steps.",
        onClick: (setActiveTab: React.Dispatch<React.SetStateAction<number>>) => {
            setActiveTab(1);
        },
    },
    {
        icon: MdOutlineTune,
        text: "Optimization Wizards",
        description: "Go here after your motor spin consistently.",
        onClick: (setActiveTab: React.Dispatch<React.SetStateAction<number>>) => {
            setActiveTab(2);
        },
    },
    {
        icon: IoMdSettings,
        text: "Advanced Tuning",
        description: "Access all your control in one single page.",
        onClick: (setActiveTab: React.Dispatch<React.SetStateAction<number>>) => {
            setActiveTab(5);
        },
    },
    {
        icon: TbChartTreemap,
        text: "Register Map",
        description: "Full interactive device register map.",
        onClick: (setActiveTab: React.Dispatch<React.SetStateAction<number>>) => {
            setActiveTab(6);
        },
    }
]


export { quicklinks, nextSteps };