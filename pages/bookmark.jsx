import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  const links = [
    {
      title: "Extension",
      link: "/",
    },
    {
      title: "Monitor AOC 24v2q",
      link: "/",
    },
  ];
  return (
    <>
      <Head>
        <title>Bookmark - Alvilab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className="h-96 max-w-5xl mx-auto px-12">
        <div className="h-full flex items-center">
          <div className="w-96">
            <input
              className="text-5xl text-white font-bold mb-4 bg-transparent outline-none"
              placeholder="Cari bookmark..."
            />
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-12">
        {links.map((item, index) => (
          <div key={index} className="bg-gray-100 bg-opacity-5 px-6 py-2 border border-gray-400 rounded-lg">
            <h3 className="text-white font-bold text-2xl">{item.title}</h3>
          </div>
        ))}
      </main>
    </>
  );
}
