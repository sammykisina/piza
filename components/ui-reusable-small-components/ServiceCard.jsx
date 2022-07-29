import React from "react";
import Image from "next/image";

const ServiceCard = ({ serviceImage, serviceName, serviceDescription }) => {
  return (
    <article className="col-span-1 flex flex-col items-center gap-2 ">
      {/* image */}
      <div className="relative h-[150px] w-[150px]">{serviceImage}</div>

      {/* title */}
      <span className="text-xl text-[color:var(--dark)]">{serviceName}</span>

      {/* description */}
      <p className="text-center text-[color:var(--gray)]">
        {serviceDescription}
      </p>
    </article>
  );
};

export default ServiceCard;
