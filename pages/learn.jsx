import Head from "next/head";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Section from "../components/Section";
import { useQuery, useMutation } from "react-query";
import { fetchBookmark, postNewVisitor } from "../modules/bookmark/api";
import { ArrowUpRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Learn() {
  const [categoriesTab, setCategoriesTab] = useState({
    active: 0,
    list: [
      {
        title: "Coding with Me",
        type: "coding-with-me",
        description: "Tutorial coding, dengan metode learning by doing.",
      },
      {
        title: "Kitab Programmer",
        type: "kitab-programmer",
        description:
          "Referensi terkait istilah-istilah yang dibahas pada artikel Coding with Me.",
      },
    ],
  });

  const { data, isFetched, isLoading } = useQuery("bookmark", fetchBookmark);

  const { mutate } = useMutation({
    mutationFn: postNewVisitor,
  });

  const onTabClick = (index) => {
    setCategoriesTab((prevState) => ({
      ...prevState,
      active: index,
    }));
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
            <h1 className="text-3xl">Learn</h1>
            <div className="mt-3 flex gap-1 flex-wrap">
              {categoriesTab.list.map((item, index) => (
                <Button
                  key={index}
                  variant={
                    index === categoriesTab.active ? "solid" : "outlined"
                  }
                  className="!rounded-full"
                  onClick={() => onTabClick(index)}
                >
                  {item.title}
                </Button>
              ))}
            </div>
            <p className="mt-4">
              {categoriesTab.list[categoriesTab.active].description}
            </p>
          </div>
        </div>
      </header>
      <Section></Section>
    </>
  );
}
