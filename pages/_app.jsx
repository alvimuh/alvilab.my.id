// import "tailwindcss/tailwind.css";
import "../tailwind.css";
import { useState } from "react";
import { ThemeContext } from "../utils/theme";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const onChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.querySelector("html").className = newTheme;
  };
  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
