import Head from "next/head";
import ChatText from "../components/ChatText";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Home() {
  const portfolio = [
    {
      title: "Bizlook",
      featuredImg: "/portofolio/bizlook.png",
      description:
        "Team project while joining the 1000 start-up digital event, in building a service product marketplace platform.",
      plarform: "Web",
      tech: "React.js",
    },
    {
      title: "Kreasijabar",
      featuredImg: "/portofolio/kreasijabar.png",
      description:
        "A freelancer project that improves the KREASI (West Java Creative Economy Actor) web features.",
      plarform: "Web",
      tech: "Laravel",
    },
    {
      title: "Smandak Learning",
      featuredImg: "/portofolio/smandak-learning.png",
      description:
        "A thesis project that builds a mobile-based online learning information system at SMAN 1 Cibadak.",
      plarform: "Mobile + Web",
      tech: "React Native",
    },
  ];
  return (
    <>
      <Head>
        <title>Alvira Mohamad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div></div>
      <header className="overflow-hidden ">
        <div className="pt-24 container-default flex flex-col md:flex-row">
          <div className="h-[240px] md:h-[240px] md:w-1/2 md:self-center">
            <p className="text-4xl md:text-6xl text-gray-900 dark:text-white font-bold mb-4">
              From front-end to back-end
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400">
              I am passionate about building technology that emp🔥wers people
            </p>
          </div>
          <div className="h-[340px] md:h-[240px] md:w-1/2 pb-[50%] relative">
            <div className="absolute w-96 pb-96 bottom-[-120px] absolute-x-center">
              <div className="absolute absolute-y-center absolute-x-center">
                <div className="circle-dashed w-[501px] pb-[501px] animate-spin-slow ease-in"></div>
              </div>
              <div className="absolute absolute-y-center absolute-x-center">
                <div className="circle-dashed w-96 pb-96 animate-spin-slow ease-in"></div>
              </div>
              <div className="absolute absolute-y-center absolute-x-center">
                <div className="circle-dashed w-64 pb-64 animate-spin-slow ease-in bg-[#FFFDFF]"></div>
              </div>
            </div>
            <div className="bg-[#0EA5E9] text-sm font-medium absolute bottom-72 left-[30%] px-4 py-1 rounded-full text-white shadow-lg">
              React.js
            </div>
            <div className="bg-[#161616] text-sm font-medium absolute bottom-60 right-[10%] px-4 py-1 rounded-full text-white shadow-lg">
              Next.js
            </div>
            <div className="bg-[#F05340] text-sm font-medium absolute bottom-56 left-[10%] px-4 py-1 rounded-full text-white shadow-lg">
              Laravel
            </div>
            <div className="bg-[#0468D7] text-sm font-medium absolute bottom-48 right-[20%] px-4 py-1 rounded-full text-white shadow-lg">
              Flutter
            </div>
            <div className="bg-[#08677E] text-sm font-medium absolute bottom-40 left-[20%] px-4 py-1 rounded-full text-white shadow-lg">
              Golang
            </div>

            <div className="w-32 absolute absolute-x-center bottom-5">
              <video
                className="w-32"
                muted
                playsInline
                autoPlay
                loop
                src="/lets-connect.mp4"
              >
                <source data-src="/lets-connect.mp4" />
              </video>
            </div>
          </div>
        </div>
      </header>
      <Section className="bg-gray-50 border py-12">
        <div>
          <p className="text-xl text-gray-800">
            I am a software engineer who has work experience as a professional
            frontend engineer, and a full-stack web developer for more than 4
            years.
          </p>
          <div className="mt-3">
            <Button
              href="https://www.linkedin.com/in/mohamadalvir"
              target="_blank"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-medium text-xl mb-2">Technical Skills</h2>
          <p>
            <span className="block md:inline text-gray-500">Languages:</span>{" "}
            Proficient in JavaScript, HTML/CSS, Dart, PHP, Go, MySQL,
            PostgresSQL
          </p>
          <p className="mt-1">
            <span className="block md:inline text-gray-500">Frameworks:</span>{" "}
            React.js (Next.js, CRA), React Native, Flutter, Laravel,
            CodeIgniter, Echo, etc
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-medium text-xl mb-2">Education</h2>
          <div className="flex justify-between gap-1 flex-col-reverse md:flex-row">
            <div>
              <p className="text-base font-medium leading-snug">
                Indonesia Computer University
              </p>
              <p>Bachelor of Computer Science</p>

              <p className="text-xs text-gray-600 mt-1">
                Major in Information System;
              </p>
              <p className="text-xs text-gray-600">
                Cumulative GPA: 3.8/4.0. Beasiswa Unggulan Kemendikbud Awardee.
              </p>
            </div>
            <div className="md:text-right font-medium">
              <p className="text-xs text-gray-500">Bandung, ID / Des 2021</p>
            </div>
          </div>
          <h2 className="font-medium text-xl mb-2 mt-6">Course/Training</h2>
          <div className="flex justify-between gap-1 flex-col-reverse md:flex-row">
            <div>
              <p className=" font-medium leading-snug">
                The Complete Guide (incl. Hooks, React Router, Redux)
              </p>
              <p>Deepen the fundamentals of javascript and react.js</p>
            </div>
            <div className="md:text-right font-medium">
              <p className="text-xs text-gray-500">Udemy Course / Nov 2018</p>
            </div>
          </div>
          <div className="flex justify-between gap-1 flex-col-reverse md:flex-row mt-4">
            <div>
              <p className=" font-medium leading-snug">
                Dart - Pemrograman Dart untuk Pemula sampai Mahir
              </p>
              <p>Learn the fundamentals of dart and flutter</p>
            </div>
            <div className="md:text-right font-medium">
              <p className="text-xs text-gray-500">Udemy Course / Aug 2022</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl text-center">Featured projects</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {portfolio.map((itemProps, index) => (
            <Card key={index} {...itemProps} />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-center text-3xl">
          I love being able to connect with other coders!
        </h2>

        <p className="text-center mt-3 text-base">
          By following tech enthusiasts like me, you can get insight about code,
          and growth together. <br />
          Come join us on TikTok and see what all the buzz is about!
        </p>
        <p className="text-center mt-3 text-gray-600">
          I also create discord server called Ternak Kode, so you can join and
          be closer to me.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-stretch w-48 md:w-96 gap-3 mx-auto">
          <Button isBlock>Follow on Tiktok</Button>
          <Button isBlock variant="outlined">
            Join Server Discord
          </Button>
        </div>
      </Section>
    </>
  );
}
