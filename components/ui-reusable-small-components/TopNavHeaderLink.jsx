import React from "react";
import { Link } from "react-scroll";
import { Icon } from "../";

const TopNavHeaderLink = ({
  navigationLinkIcon,
  navigationLinkName,
  navigationLinkDestination,
}) => {
  return (
    <Link
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
      activeClass="activeLink"
      to={navigationLinkDestination}
    >
      <article className="hover:text-[color:var(--yellow)] cursor-pointer">
        <Icon
          icon={navigationLinkIcon}
          iconContainerStyles="sm:hidden"
          purpose={() => {}}
        />
        <span className="hidden sm:flex">{navigationLinkName}</span>
      </article>
    </Link>
  );
};

export default TopNavHeaderLink;
