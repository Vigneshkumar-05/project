import { FaUserCog } from "react-icons/fa";
import { RiBarChartBoxFill } from "react-icons/ri";
import { MdOutlineTune } from "react-icons/md";
import { RiFolderChartFill } from "react-icons/ri";
import { GiSpanner } from "react-icons/gi";
import { TbHelpHexagonFilled } from "react-icons/tb";

const FeatureList = [
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

export { FeatureList };