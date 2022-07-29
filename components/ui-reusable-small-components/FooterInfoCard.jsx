import React from "react";
import { Title } from "../";

const FooterInfoCard = ({ title, links }) => {
  return (
    <article>
      <Title
        title={title}
        titleStyles="text-[color:var(--creamWhite)]"
        lineStyles="bg-[color:var(--creamWhite)]"
      />

      <ul className="px-4 text-sm text-[color:var(--dark)]">
        {links.map((link, linkIndex) => (
          <li key={linkIndex}>{link.name}</li>
        ))}
      </ul>
    </article>
  );
};

export default FooterInfoCard;
