import React from "react";
import { Logo } from "./";
import { PizaDarkLogo } from "../assets";
import { socialMediaIcons } from "../constants/socialMediaIcons";
import { Icon, Title, Input, FooterInfoCard } from "./";
import { BiSend } from "react-icons/bi";
import { footerLinks } from "../constants/footerLinks";

const Footer = () => {
  return (
    <section>
      {/* wave one */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fd794f"
          // fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* the rest of the body */}
      <article className="w-full bg-[color:var(--yellow)]  flex justify-center items-center h-fit pb-5">
        <div className="flex flex-col border-red-700 w-full px-6 max-w-[1100px]">
          {/* the left side */}
          <div className="sm:flex items-center justify-center w-[80%]">
            {/* the logo */}
            <div className="sm:w-[70%]">
              <Logo logo={PizaDarkLogo} />
              <p className="text-base text-[color:var(--creamWhite)] pl-4 ">
                Our job is to filling your tummy <br /> with delicious pizza and
                with fast and free delivery
              </p>
            </div>

            {/* media icons */}
            <div className="flex justify-center items-center gap-3 mt-2 relative">
              {socialMediaIcons.map((socialMediaIcon, socialMediaIndex) => (
                <Icon
                  key={socialMediaIndex}
                  icon={socialMediaIcon.icon}
                  iconContainerStyles="text-[20px] text-[color:var(--dark)] z-10"
                  purpose={() => {}}
                />
              ))}

              <div className="blob bg-[#131313]/10 absolute z-0" />
            </div>
          </div>

          {/* the right side */}
          <div className="mt-5 flex flex-col sm:flex-row justify-center">
            <div className="sm:flex flex-1 justify-center gap-10">
              {/* the company section */}
              {footerLinks.map((footerLink, footerLinkIndex) => (
                <FooterInfoCard
                  key={footerLinkIndex}
                  title={footerLink.title}
                  links={footerLink.links}
                />
              ))}
            </div>

            {/* the  get in touch section*/}
            <div className="mt-6">
              <Title
                title="Get in Touch"
                titleStyles="text-[color:var(--creamWhite)]"
              />

              <div className="leading-[0.1] mb-1">
                <span className="text-lg ">Question or feedback?</span> <br />{" "}
                <span className="text-xs">We&apos;d love to here from you</span>
              </div>

              {/*  the button */}
              <Input
                inputWrapperStyles="border  rounded-full px-4 flex items-center"
                inputStyles="py-2 placeholder-[color:var(--creamWhite)] text-[color:var(--white)]"
                inputPlaceholder="Email Address"
                icon={<BiSend className="w-6 h-6 text-[color:var(--dark)]" />}
                iconPurpose={() => {}}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
