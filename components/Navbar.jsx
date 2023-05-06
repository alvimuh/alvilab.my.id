import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { pathname } = useRouter();
  console.log(pathname);
  const menus = [
    {
      label: "Home",
      pathname: "/",
    },
    {
      label: "About",
      pathname: "/about",
    },
    {
      label: "Bookmark",
      pathname: "/bookmark",
    },
  ];
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <nav className="absolute top-0 w-full">
      <div
        className={`bg-black w-full h-screen fixed top-0 z-10 transition-all duration-300 ${
          toggle ? "visible opacity-50 " : "invisible opacity-0"
        }`}
        onClick={() => setToggle(false)}
      ></div>
      <div className="container-default py-6 flex justify-between">
        <h2 className="text-gray-700 dark:text-white text-xl font-serif">
          Alvilab.my.id
        </h2>
        <ul className="hidden md:flex gap-4">
          {menus.map((item, index) => (
            <li key={index}>
              <Link
                href={item.pathname}
                className={`${
                  pathname === item.pathname
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400"
                } font-semibold`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="block md:hidden relative bottom-[3px]">
          <Button variant="base" onClick={() => setToggle(!toggle)}>
            <Bars3Icon width={24} />
          </Button>
          <div
            className={`absolute bg-white right-4 px-6 py-5 shadow-lg rounded-md z-20 transition-all duration-500 ${
              toggle ? "visible opacity-100 " : "scale-95 invisible opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-4 w-32">
              {menus.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.pathname}
                    className={`${
                      pathname === item.pathname
                        ? "text-gray-800 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    } font-semibold w-full block`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
