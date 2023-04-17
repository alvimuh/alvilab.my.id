import Head from "next/head";
import { useState, useEffect } from "react";
import AttachmentList from "../components/AttachmentList";
import ChatText from "../components/ChatText";
import Navbar from "../components/Navbar";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Alvira Mohamad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <header className="h-screen max-w-5xl mx-auto px-12">
        <div className="h-full flex items-center">
          <div className="w-96">
            <p className="text-5xl text-white font-bold mb-4">
              From front-end to back-end
            </p>
            <p className="text-2xl text-gray-400">
              I am passionate about building technology that emp🔥wers people
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
