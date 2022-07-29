import Head from "next/head";
import React from "react";
import { Layout, Hero, Services } from "../components";

const Home = () => {
  return (
    <Layout>
      {/* the header section */}
      <Head>
        <title>Pizza - NextJs | Sanity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* the main section of the application */}
      <main className="h-fit">
        {/* the hero component */}
        <Hero />

        {/* the services component */}
        <Services />
      </main>
    </Layout>
  );
};

export default Home;
