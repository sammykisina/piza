import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Pizza } from "../assets";

const ItalianPizza = () => {
  return (
    <article className="bg-white rounded-lg px-2 py-1 border shadow-md flex flex-row gap-3 w-fit">
      {/* the image */}
      <div className="w-[90px] h-[90px] rounded-md border overflow-hidden relative">
        <Image src={Pizza} alt="" objectFit="cover" layout="fill" />
      </div>

      {/* the name, price and rating */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          {/* name */}
          <span className="text-lg font-semibold text-[color:var(--dark)]">
            Italian Pizza
          </span>
          {/* rates */}
          <div className="flex">
            {Array.from(Array(Math.ceil(4)).keys()).map((index) => (
              <AiFillStar key={index} className="text-yellow-400 w-4 h-4" />
            ))}
            <AiOutlineStar className=" w-4 h-4" />
          </div>
          {/* price */}
          <div className="flex flex-row gap-1 items-center">
            <span className="text-xs text-[color:var(--red)] font-bold">$</span>
            <span className="text-[color:var(--dark)] font-semibold text-xl">
              7.49
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItalianPizza;
