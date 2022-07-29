import React from "react";
import {
  SectionContainer,
  InteractiveLink,
  Button,
  HeroContactUsButton,
  ItalianPizza,
} from "./";
import { Cherry, HeroImage } from "../assets";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import heroCss from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <SectionContainer id="/">
      <article className="pt-[40px] flex flex-col sm:flex-row transition-all duration-500 ease-in-out">
        {/* the left side */}
        <div className="flex flex-col gap-3 flex-1">
          {/* the more than fast button */}
          <Button
            buttonName="More than Faster"
            buttonIcon={<Image src={Cherry} alt="" width={40} height={25} />}
            buttonStyles={heroCss.moreThanFastButtonStyles}
            buttonIconPosition="right"
            purpose={() => {}}
          />

          {/* the hero text */}
          <p className="text-3xl font-extrabold capitalize text-[color:var(--dark)] tracking-wider leading-10">
            be the fastest <br /> in delivering <br /> your{" "}
            <span className="text-[color:var(--red)] text-shadow-md">
              Pizza
            </span>
          </p>

          {/* the mini text */}
          <p className="text-[color:var(--gray)] text-sm w-[80%] ">
            Our job is to filling your tummy with delicious Pizza and with fast
            and free delivery.
          </p>

          {/* the buttons */}
          <div className="flex">
            {/* the get started button */}
            <InteractiveLink
              interactiveLinkName="Get Started"
              interactiveLinkStyles={heroCss.interactiveLinkStyles}
              interactiveLinkDestination=""
            />

            {/* the watch video button */}
            <Button
              buttonName="Watch"
              buttonStyles={heroCss.watchTheVideoButtonStyles}
              buttonIcon={<BsPlayFill className="w-4 h-4  text-yellow-500" />}
              buttonIconWrapperStyles="p-1 rounded-full flex justify-center items-center bg-white shadow-md"
              buttonIconPosition="left"
              purpose={() => {}}
            />
          </div>
        </div>

        {/* the right side */}
        <div className="relative">
          {/* the image */}
          <div className=" sm:w-[230px] md:w-[360px] lg:w-[500px] lg:-mt-6 ">
            <Image src={HeroImage} alt="" layout="intrinsic" />
          </div>

          {/* the contact us button */}
          <div className="absolute top-[165px] -left-[20px] sm:-left-[70px] md:top-[260px] md:-left-[40px] lg:-left-[80px] lg:top-[300px]">
            <HeroContactUsButton />
          </div>

          {/* the Italian pizza */}
          <div className=" absolute -right-[20px] top-[250px] md:-right-[40px] lg:top-[350px] ">
            <ItalianPizza />
          </div>
        </div>
      </article>
    </SectionContainer>
  );
};

export default Hero;
