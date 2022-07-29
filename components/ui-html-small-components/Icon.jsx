import React from "react";

const Icon = ({ icon, purpose, iconContainerStyles }) => {
  return (
    <article
      className={`${iconContainerStyles} cursor-pointer`}
      onClick={() => purpose()}
    >
      {icon}
    </article>
  );
};

export default Icon;
