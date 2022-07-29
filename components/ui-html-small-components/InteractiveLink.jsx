import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const InteractiveLink = ({
  interactiveLinkName,
  interactiveLinkStyles,
  interactiveLinkDestination,
}) => {
  /**
   * component states
   */
  const [buttonHovered, setButtonHovered] = useState(false);

  /**
   * component function
   */
  const onButtonHover = () => {
    setButtonHovered(!buttonHovered);
  };

  return (
    <Link href="">
      <article
        onMouseEnter={onButtonHover}
        onMouseLeave={onButtonHover}
        className={`${interactiveLinkStyles} flex justify-between py-2 px-4 items-center gap-3 cursor-pointer`}
      >
        <span>{interactiveLinkName}</span>
        {buttonHovered ? (
          <div className="ml-[8px] text-xl">
            <IoIosArrowRoundForward />
          </div>
        ) : (
          <div className="ml-[8px] text-xl">
            <MdKeyboardArrowRight />
          </div>
        )}
      </article>
    </Link>
  );
};

export default InteractiveLink;
