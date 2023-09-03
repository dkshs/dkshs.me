import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import type { AppProps } from "next/app";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";

import { ToastContainer } from "react-toastify";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const merriweatherSans = MerriweatherSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={merriweatherSans.className}>
      <div className="fixed inset-0 -z-[1] bg-violet-900/10 bg-gradient-to-b from-violet-900/10 to-black/60" />
      <ToastContainer
        autoClose={3000}
        limit={3}
        theme="dark"
        style={{ zIndex: 99999 }}
        toastStyle={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.5)",
          fontWeight: "500",
          fontFamily: merriweatherSans.style.fontFamily,
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
