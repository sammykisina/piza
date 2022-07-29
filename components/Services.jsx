import React from "react";
import { SectionContainer, Title, ServiceCard } from "./";
import { pizaServicesData } from "../constants/pizaServicesData";

const Services = () => {
  return (
    <SectionContainer id="services">
      <article>
        {/* titles */}
        <div className="flex flex-col items-center gap-3">
          <Title
            title="WHAT WE SERVE"
            titleStyles="text-[color:var(--red)] text-sm"
          />

          <p className="text-center text-2xl sm:text-3xl font-bold text-[color:var(--dark)] leading-10 tracking-wider">
            Your Favorite Pizza <br />
            Delivery Partner
          </p>
        </div>

        {/* services */}
        <div className="mt-5 sm:mt-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {pizaServicesData.map((pizaService, pizaServiceIndex) => (
            <ServiceCard
              key={pizaServiceIndex}
              serviceImage={pizaService.serviceImage}
              serviceName={pizaService.serviceName}
              serviceDescription={pizaService.serviceDescription}
            />
          ))}
        </div>
      </article>
    </SectionContainer>
  );
};

export default Services;
