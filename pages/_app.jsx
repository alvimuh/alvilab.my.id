import "../tailwind.css";
import { useState, useEffect } from "react";
import { ThemeContext } from "../utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if there's a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("html").className = savedTheme;
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.querySelector("html").className = initialTheme;
    }
  }, []);

  const onChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").className = newTheme;
  };

  const queryClient = new QueryClient();
  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      <QueryClientProvider client={queryClient}>
        <CustomCursor />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
