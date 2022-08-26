import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </main>
    </div>
  );
};

export default Home;