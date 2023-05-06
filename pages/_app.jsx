// import "tailwindcss/tailwind.css";
import "../tailwind.css";
import { useState } from "react";
import { ThemeContext } from "../utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const onChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.querySelector("html").className = newTheme;
  };

  const queryClient = new QueryClient();
  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
