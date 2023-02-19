import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}
