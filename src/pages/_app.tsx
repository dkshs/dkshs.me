import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";

import { Header } from "@/components/Header";

const merriweatherSans = MerriweatherSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={merriweatherSans.className}>
      <div className="fixed inset-0 -z-[1] bg-violet-900/10 bg-gradient-to-b from-violet-900/10 to-black/60" />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
