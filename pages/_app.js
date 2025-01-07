import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  // Force dark mode on initial load
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  return <Component {...pageProps} />;
}

export default MyApp;
