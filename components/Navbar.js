import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
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
      <div className="max-w-5xl mx-auto px-12 py-6 flex justify-between">
        <h2 className="text-white text-xl font-serif">Alvilab.my.id </h2>
        <ul className="flex gap-4">
          {menus.map((item, index) => (
            <li key={index}>
              <Link
                href={item.pathname}
                className={`${
                  pathname === item.pathname ? "text-gray-100" : "text-gray-400"
                } font-semibold`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
