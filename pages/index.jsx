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
      <header className="h-[700px] max-w-5xl mx-auto px-12">
        <div className="h-full flex items-center">
          <div className="w-1/2">
            <p className="text-6xl text-gray-900 dark:text-white font-bold mb-4">
              From front-end to back-end
            </p>
            <p className="text-2xl text-gray-800 dark:text-gray-400">
              I am passionate about building technology that emp🔥wers people
            </p>
          </div>
        </div>
      </header>
      <Section className="bg-gray-50 border py-12">
        <p className="text-xl">
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
      </Section>
      <Section>
        <h2 className="text-3xl text-gray-900 font-bold">Featured projects</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {portfolio.map((itemProps, index) => (
            <Card key={index} {...itemProps} />
          ))}
        </div>
      </Section>
    </>
  );
}
