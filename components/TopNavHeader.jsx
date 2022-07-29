import React, { useEffect, useState } from "react";
import headerCss from "../styles/TopNavHeader.module.css";
import { BiCart } from "react-icons/bi";
import { topNavHeaderRoutes } from "../constants/topNavHeaderRoutes";
import { TopNavHeaderLink, Logo, Icon } from "./";
import { PizaYellowLogo } from "../assets";
import { AiOutlineUser } from "react-icons/ai";

const TopNavHeader = () => {
  /**
   * component States
   */
  const [topNavHeaderScrolled, setTopNavHeaderScrolled] = useState(false);

  /**
   * component Functions
   */

  // react to scroll effect on the top nav head
  const changeTopNavHeader = () => {
    if (window.scrollY >= 10) setTopNavHeaderScrolled(true);
    else setTopNavHeaderScrolled(false);
  };

  //useEffect to detect to the scroll effect
  useEffect(() => {
    window.addEventListener("scroll", changeTopNavHeader);
  }, []);

  return (
    <section
      className={`h-[80px] fixed top-0 left-0 z-[50] w-full flex justify-center items-center ${
        topNavHeaderScrolled ? "shadow-lg pt-3 bg-[#fdecec]" : "bg-transparent"
      }`}
    >
      <section className="mx-auto px-[24px] flex justify-between items-center h-full z-[10] w-full max-w-[1100px]">
        {/* The left side */}
        <article className="flex gap-4 flex-1">
          <Logo logo={PizaYellowLogo} />

          {/* The middle side */}
          <ul className={headerCss.menu}>
            {topNavHeaderRoutes.map(
              (topNavHeaderRoute, topNavHeaderRouteIndex) => (
                <TopNavHeaderLink
                  key={topNavHeaderRouteIndex}
                  navigationLinkIcon={topNavHeaderRoute.icon}
                  navigationLinkName={topNavHeaderRoute.name}
                  navigationLinkDestination={topNavHeaderRoute.to}
                />
              )
            )}
          </ul>
        </article>

        {/* The right side */}
        <article className={headerCss.rightSide}>
          {/* the cart */}
          <div className={headerCss.cart}>
            <Icon
              icon={<BiCart className="w-5 h-5 text-[color:var(--gray)]" />}
            />

            {/* The items in the cart count */}
            <span className={headerCss.badge}>9</span>
          </div>

          {/* the user icon*/}
          <Icon
            icon={
              <AiOutlineUser className="w-5 h-5 text-[color:var(--gray)]" />
            }
          />
        </article>
      </section>
    </section>
  );
};

export default TopNavHeader;
