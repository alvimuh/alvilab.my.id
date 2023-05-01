import Head from "next/head";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import { useQuery } from "react-query";
import { fetchBookmark } from "../modules/bookmark/api";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const categoriesTab = {
    active: 0,
    list: [
      {
        title: "All",
      },
      {
        title: "Code Resources",
      },
      {
        title: "Setup Gear",
      },
    ],
  };

  const { data, isFetched } = useQuery("bookmark", fetchBookmark);

  return (
    <>
      <Head>
        <title>Bookmark - Alvilab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className="overflow-hidden">
        <div className="pt-32 pb-16 container-default">
          <div>
            <h1 className="text-3xl">Bookmark</h1>
            <div className="mt-3 flex gap-1 flex-wrap">
              {categoriesTab.list.map((item, index) => (
                <Button
                  key={index}
                  variant={
                    index === categoriesTab.active ? "solid" : "outlined"
                  }
                  className="rounded-full"
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>
      <Section>
        {isFetched &&
          data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 bg-opacity-5 px-6 py-2 border border-gray-400 rounded mb-4 hover:bg-gradient-to-b from-white to-gray-100 cursor-pointer"
            >
              <h3 className="text-xl">
                {item.title}
                <span className="ml-2 text-gray-500">
                  <ArrowUpRightIcon width={14} className="inline" />
                </span>
              </h3>

              <p className="text-gray-600">Link description</p>
            </div>
          ))}
      </Section>
    </>
  );
}
