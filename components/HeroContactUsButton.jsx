import React from "react";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { ContactUsMan } from "../assets";

const HeroContactUsButton = () => {
  return (
    <article className="w-fit flex flex-row gap-2 items-center px-2 py-1 bg-white rounded-full shadow-sm border cursor-pointer relative">
      {/* the left side */}
      <div className="bg-yellow-500/30 flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]">
        <Image src={ContactUsMan} alt="" layout="intrinsic" />
      </div>

      {/* the middle section */}
      <div className="flex flex-col">
        <span className=" text-[color:var(--dark)] text-sm font-semibold">
          Jamillay Cane
        </span>
        <span className="text-[color:var(--gray)] text-xs -mt-1">
          Food Courier
        </span>
      </div>

      {/* the right section  */}
      <div className="bg-[color:var(--red)] p-2 w-[30px] h-[30px] flex justify-center items-center rounded-full">
        <IoCallOutline className="w-6 h-6 text-[color:var(--white)]" />
      </div>

      {/* the ping */}
      <span className="bg-green-500 w-4 h-4 rounded-full animate-ping absolute right-2 -top-2" />
    </article>
  );
};

export default HeroContactUsButton;
