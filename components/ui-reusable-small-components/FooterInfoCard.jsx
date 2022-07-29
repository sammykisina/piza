import React from "react";
import { Title } from "../";

const FooterInfoCard = ({ title, links }) => {
  return (
    <article>
      <Title
        title={title}
        titleStyles="text-[color:var(--dark)] text-lg"
        // lineStyles="bg-[color:var(--red)]"
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
