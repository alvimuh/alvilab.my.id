// import "tailwindcss/tailwind.css";
import "../tailwind.css";
import { useState } from "react";
import { ThemeContext } from "../utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const onChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.querySelector("html").className = newTheme;
  };

  const queryClient = new QueryClient();
  return (
    <>
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </ThemeContext.Provider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MR3EF18Q2H"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-MR3EF18Q2H');`}
      />
    </>
  );
}

export default MyApp;
