import React from "react";

const SectionContainer = ({ id, children }) => {
  return (
    <section id={id} className="py-[100px]">
      <section className={`w-full max-w-[1100px] mx-auto sm:px-[24px]`}>
        <article>{children}</article>
      </section>
    </section>
  );
};

export default SectionContainer;
