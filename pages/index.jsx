import Head from "next/head";
import ChatText from "../components/ChatText";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import Card from "../components/Card";
import ExperienceItem from "../components/Item/Experience";

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
      <header className="overflow-hidden">
        <div className="pt-24 container-default flex flex-col md:flex-row">
          <div className="h-[240px] md:w-1/2 md:self-center justify-center flex flex-col">
            <p className="text-5xl md:text-6xl text-gray-900 dark:text-white font-bold mb-4">
              From front-end to back-end
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400">
              I am passionate about building technology that emp🔥wers people
            </p>
          </div>
          <div className="h-[340px] md:h-[240px] md:w-1/2 pb-[50%] relative ">
            <div className="w-32 absolute absolute-x-center bottom-5">
              <video
                className="w-32 rounded-full"
                muted
                playsInline
                autoPlay
                loop
                src="/IMG_4859.mp4"
              >
                <source data-src="/IMG_4859.mp4" />
              </video>
            </div>
            <div className="absolute w-96 pb-96 bottom-[-120px] absolute-x-center">
              <div className="absolute absolute-y-center absolute-x-center">
                <div className="circle-dashed w-[501px] pb-[501px] animate-spin-slow ease-in"></div>
              </div>
              <div className="absolute absolute-y-center absolute-x-center">
                <div className="circle-dashed w-96 pb-96 animate-spin-slow ease-in"></div>
              </div>
              <div className="absolute absolute-y-center absolute-x-center">
                <div className="circle-dashed w-64 pb-64 animate-spin-slow ease-in"></div>
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
            <div className="bg-indigo-700 text-sm font-medium absolute bottom-32 left-[2%] px-4 py-1 rounded-full text-white shadow-lg">
              Rest API
            </div>
            <div className="bg-pink-600 text-sm font-medium absolute bottom-36 right-0 px-4 py-1 rounded-full text-white shadow-lg">
              GraphQL
            </div>
          </div>
        </div>
      </header>
      <Section className="bg-gray-50 dark:bg-gray-900 border dark:border-gray-800  py-12">
        <div>
          <p className="text-xl text-gray-800">
            I am a software engineer who has work experience as a professional
            frontend engineer, and a full-stack web developer for more than 4
            years.
          </p>
          <div className="mt-6">
            <Button href="/about">About me</Button>
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
      <Section
        className="overflow-hidden"
        containerClassName="max-w-screen-2xl flex flex-col md:flex-row gap-20 md:gap-32 items-strech"
      >
        <div className="md:w-1/2 md:order-2">
          <div className="max-w-lg md:mt-16 ">
            <h2 className="text-3xl">Let's growth together!</h2>
            <p className="mt-4 text-base">
              I makes tiktok video and instagram reels about programming. Follow
              me and see what all the buzz is about! By following tech
              enthusiasts like me, you can get insight about code, few coder
              jokes, and tricks.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-stretch w-48 md:w-full gap-3">
              <Button
                isBlock
                href="https://www.tiktok.com/@alvi.muh"
                target="_blank"
              >
                Follow on Tiktok
              </Button>
              <Button
                isBlock
                href="https://www.instagram.com/alvi.muh"
                variant="outlined"
                target="_blank"
              >
                Follow on Instagram
              </Button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex gap-1 -rotate-6 -mx-16 md:-ml-56">
            <div className="rounded-lg shadow-lg hover:shadow-2xl overflow-hidden hover:scale-110 transition ease-out duration-700">
              <img className="w-full" src="/tiktok-1.webp" alt="" />
            </div>
            <div className="rounded-lg shadow-lg hover:shadow-2xl overflow-hidden hover:scale-110 transition ease-out duration-700">
              <img className="w-full" src="/tiktok-2.webp" alt="" />
            </div>
            <div className="rounded-lg shadow-lg hover:shadow-2xl overflow-hidden hover:scale-110 transition ease-out duration-700">
              <img className="w-full" src="/tiktok-3.webp" alt="" />
            </div>
            <div className="rounded-lg shadow-lg hover:shadow-2xl overflow-hidden hover:scale-110 transition ease-out duration-700">
              <img className="w-full" src="/tiktok-4.webp" alt="" />
            </div>
          </div>
        </div>
      </Section>
      <Section
        className="overflow-hidden"
        containerClassName="max-w-screen-2xl flex flex-col md:flex-row gap-20 md:gap-32"
      >
        <div className="md:w-1/2">
          <div className="max-w-lg md:mt-28">
            <h2 className="text-3xl">
              I love being able to connect with other coders!
            </h2>
            <p className="mt-4 text-base">
              I also have a discord server called Ternak Kode for connecting
              programming learners. Join our Discord server and get help from
              fellow coders today!
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-stretch w-48 md:w-1/2 gap-3">
              <Button
                isBlock
                href="https://discord.gg/ternakkode"
                target="_blank"
              >
                Join Server Discord
              </Button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-lg shadow-lg hover:shadow-xl overflow-hidden hover:scale-110 hover:rotate-1 rotate-6 ml-12 -mr-80 md:ml-0 transition ease-out duration-700">
            <img
              src="/ternak-kode.png"
              className="w-full"
              alt="disord-ternak-kode"
            />
          </div>
        </div>

        <div className="fixed z-20 bottom-0 absolute-x-center mb-4 px-2 w-full">
          <div className="flex items-center gap-4 justify-between container-default bg-white dark:bg-gray-900  px-8 md:px-12 py-6 w-full shadow-2xl rounded-lg">
            <h4 className="text-xl mr-auto">Buy me a coffee</h4>
            {/* <img src="/saweria.png" alt="" width={60} /> */}
            <Button
              href="https://saweria.co/alvimuh"
              target="_blank"
              variant="outlined"
            >
              Donate via Saweria
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
