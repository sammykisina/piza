import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiServiceFill } from "react-icons/ri";

export const topNavHeaderRoutes = [
  {
    name: "Home",
    icon: <AiFillHome />,
    to: "/",
  },
  {
    name: "Services",
    icon: <RiServiceFill />,
    to: "services",
  },
  {
    name: "Menu",
    icon: <HiMenuAlt4 />,
    to: "menu",
  },
  {
    name: "Contact",
    icon: <AiFillPhone />,
    to: "contact",
  },
];
