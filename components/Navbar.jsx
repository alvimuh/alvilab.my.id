import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../utils/theme";

export default function Navbar() {
  const { pathname } = useRouter();
  const { theme, onChangeTheme } = useContext(ThemeContext);

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
    {
      label: "Saweria",
      pathname: "https://saweria.co/alvimuh",
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
      <div className="container-default py-6 flex justify-between items-center">
        <h2 className="text-gray-700 dark:text-white text-xl font-serif">
          Alvilab.my.id
        </h2>
        <div className="flex items-center gap-6">
          <button
            onClick={onChangeTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-gray-700 dark:text-white" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700 dark:text-white" />
            )}
          </button>
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
              <Bars3Icon width={24} className="text-gray-700 dark:text-white" />
            </Button>
            <div
              className={`absolute bg-white dark:bg-gray-900 right-4 px-6 py-5 shadow-lg rounded-md z-20 transition-all duration-500 ${
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
      </div>
    </nav>
  );
}
