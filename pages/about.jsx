import Head from "next/head";
import ChatText from "../components/ChatText";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import Card from "../components/Card";
import ExperienceItem from "../components/Item/Experience";

export default function About() {
  return (
    <>
      <Head>
        <title>Alvira Mohamad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div></div>
      <header className="overflow-hidden">
        <div className="pt-24 pb-12 container-default">
          <div className="py-16">
            <p className="text-3xl md:text-5xl text-gray-900 dark:text-white font-bold mb-4">
              Call me Alvi
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-8">
              I am a software engineer who has work experience as a professional
              frontend engineer, and a full-stack web developer for more than 4
              years.
            </p>
            <Button
              href="https://www.linkedin.com/in/mohamadalvir"
              target="_blank"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </header>
      <Section className="bg-gray-50 border py-12">
        <div>
          <h2 className="text-xl mb-2">Technical Skills</h2>
          <p>
            <span className="block md:inline text-gray-500">Languages:</span>{" "}
            Proficient in JavaScript, HTML/CSS, Dart, PHP, Go
          </p>
          <p className="mt-1">
            <span className="block md:inline text-gray-500">Frameworks:</span>{" "}
            React.js (Next.js, CRA), React Native, Flutter, Laravel,
            CodeIgniter, Echo, etc
          </p>
          <p className="mt-1">
            <span className="block md:inline text-gray-500">Databases:</span>{" "}
            PostgresSQL, MySQL, MongoDB
          </p>
          <p className="mt-1">
            <span className="block md:inline text-gray-500">
              Relevant Skills:
            </span>{" "}
            React Redux, React Hooks, REST API, GraphQL, UI Design, etc
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl mb-2">Education</h2>
          <ExperienceItem
            tag="Bandung, ID / Des 2021"
            title="Indonesia Computer University"
            subtitle="Bachelor of Computer Science"
            description={[
              "Major in Information System;",
              <br />,
              "Cumulative GPA: 3.8/4.0. Beasiswa Unggulan Kemendikbud Awardee.",
            ]}
          />
          <h2 className="text-xl mb-2 mt-6">Course/Training</h2>
          <ExperienceItem
            tag="Udemy Course / Nov 2018"
            title="The Complete Guide (incl. Hooks, React Router, Redux)"
            subtitle="by Academind"
            description="Deepen the fundamentals of javascript and react.js"
          />
          <ExperienceItem
            tag="Udemy Course / Aug 2022"
            title=" Dart - Pemrograman Dart untuk Pemula sampai Mahir"
            subtitle="by Programmer Zaman Now"
            description="Learn the fundamentals of dart and flutter"
          />
        </div>
      </Section>
    </>
  );
}
