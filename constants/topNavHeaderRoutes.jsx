import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

export const topNavHeaderRoutes = [
  {
    name: "Home",
    icon: <AiFillHome />,
    to: "/",
  },
  {
    name: "Menu",
    icon: <HiMenuAlt4 />,
    to: "menu",
  },
  // {
  //   name: "Contact",
  //   icon: <AiFillPhone />,
  //   to: "contact",
  // },
];
