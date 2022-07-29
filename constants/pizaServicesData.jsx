import { ServicesPicOne, ServicesPicTwo, ServicesPicThree } from "../assets";
import Image from "next/image";

export const pizaServicesData = [
  {
    serviceImage: (
      <Image src={ServicesPicOne} alt="" layout="fill" objectFit="cover" />
    ),
    serviceName: "Easy To Order",
    serviceDescription: "You only need a few steps in ordering pizza.",
  },
  {
    serviceImage: (
      <Image src={ServicesPicTwo} alt="" layout="fill" objectFit="cover" />
    ),
    serviceName: "Fastest Delivery",
    serviceDescription: "Delivery that is always on time even faster.",
  },
  {
    serviceImage: (
      <Image src={ServicesPicThree} alt="" layout="fill" objectFit="cover" />
    ),
    serviceName: "Best Quality",
    serviceDescription: "Not only fast. For us quality is also number one.",
  },
];
