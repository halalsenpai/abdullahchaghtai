import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
