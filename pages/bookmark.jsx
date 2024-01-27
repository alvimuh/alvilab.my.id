import Head from "next/head";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import { useQuery, useMutation } from "react-query";
import { fetchBookmark, postNewVisitor } from "../modules/bookmark/api";
import { ArrowUpRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Bookmark() {
  const [categoriesTab, setCategoriesTab] = useState({
    active: null,
    list: [
      {
        title: "All",
        type: null,
      },
      {
        title: "Code Resources",
        type: "coding-resource",
      },
      {
        title: "Setup Gear",
        type: "setup",
      },
    ],
  });

  const { data, isFetched, isLoading } = useQuery("bookmark", fetchBookmark);

  const { mutate } = useMutation({
    mutationFn: postNewVisitor,
  });

  const onBookmarkClick = (data) => {
    mutate({
      id: data.id,
    });
    window.open(data.link, "_blank");
  };

  const onTabClick = (type) => {
    setCategoriesTab((prevState) => ({
      ...prevState,
      active: type,
    }));
  };

  const bookmarkFilter = (item) => {
    // return item.slug === categoriesTab.active
    if (categoriesTab.active === null) return true;
    return item.type === categoriesTab.active;
  };

  return (
    <>
      <Head>
        <title>Bookmark - Alvilab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className="overflow-hidden">
        <div className="pt-32 pb-0 container-default">
          <div>
            <h1 className="text-3xl">Bookmark</h1>
            <div className="mt-3 flex gap-1 flex-wrap">
              {categoriesTab.list.map((item, index) => (
                <Button
                  key={index}
                  variant={
                    item.type === categoriesTab.active ? "solid" : "outlined"
                  }
                  className="!rounded-full"
                  onClick={() => onTabClick(item.type)}
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>
      <Section>
        {isLoading ? (
          <>
            <div className="w-full animate-pulse h-24 border border-gray-300 rounded mb-4 bg-gray-100 cursor-wait"></div>
            <div className="w-full animate-pulse h-24 border border-gray-300 rounded mb-4 bg-gray-100 cursor-wait"></div>
            <div className="w-full animate-pulse h-24 border border-gray-300 rounded mb-4 bg-gray-100 cursor-wait"></div>
            <div className="w-full animate-pulse h-24 border border-gray-300 rounded mb-4 bg-gray-100 cursor-wait"></div>
            <div className="w-full animate-pulse h-24 border border-gray-300 rounded mb-4 bg-gray-100 cursor-wait"></div>
            <div className="w-full animate-pulse h-24 border border-gray-300 rounded mb-4 bg-gray-100 cursor-wait"></div>
          </>
        ) : isFetched ? (
          data.filter(bookmarkFilter).map((item, index) => (
            <button
              key={index}
              onClick={() => onBookmarkClick(item)}
              className="relative block w-full text-left px-3 md:px-6 py-4 md:py-5 border border-gray-300 hover:border-gray-400 rounded mb-4 hover:bg-gradient-to-b from-white to-gray-100 cursor-pointer"
            >
              <h3 className="text-base md:text-xl leading-tight mb-1">
                {item.title}
                <span className="ml-2 text-gray-500">
                  <ArrowUpRightIcon width={14} className="inline" />
                </span>
              </h3>

              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-500 text-sm">
                <span className="mr-1 relative bottom-[2px]">
                  <EyeIcon width={16} className="inline" />
                </span>
                {item.total_visitor}
              </p>
              {item.is_pinned && (
                <div className="border bg-gray-50 text-gray-500 py-1 px-3 rounded absolute top-3 right-2 text-xs font-semibold">
                  Pinned
                </div>
              )}
            </button>
          ))
        ) : null}
      </Section>
    </>
  );
}
