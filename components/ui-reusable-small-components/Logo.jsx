import React from "react";
import Image from "next/image";

const Logo = ({ logo }) => {
  return (
    <article className="flex items-center justify-start gap-[0.1rem]">
      <Image src={logo} alt="" width={50} height={50} />
      <span className="text-[color:var(--dark)] font-bold text-[1.5rem]">
        Piza
      </span>
    </article>
  );
};

export default Logo;
