import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "../utils/theme";

export default function Navbar() {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const { pathname } = useRouter();
  const menus = [
    {
      label: "Home",
      pathname: "/",
    },
    {
      label: "Bookmark",
      pathname: "/bookmark",
    },
    {
      label: "Contact",
      pathname: "#",
    },
  ];
  return (
    <nav className="absolute top-0 w-full">
      <div className="container-default py-6 flex justify-between">
        <h2 className="text-gray-600 dark:text-white text-xl font-serif">
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
        {/* <button
          onClick={() => {
            onChangeTheme();
          }}
        >
          {theme}
        </button> */}
      </div>
    </nav>
  );
}
