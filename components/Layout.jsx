import React from "react";
import { TopNavHeader, Footer } from "./";
const Layout = ({ children }) => {
  return (
    <section>
      <article className=" w-full max-w-[1100px] mx-auto px-[24px]">
        {/* The Header component */}
        <TopNavHeader />

        {/* the children */}
        {children}
      </article>
      {/* The Footer component */}
      <Footer />
    </section>
  );
};

export default Layout;
