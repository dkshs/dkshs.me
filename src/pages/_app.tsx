import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";

const merriweatherSans = MerriweatherSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={merriweatherSans.className}>
      <div className="fixed inset-0 -z-[1] bg-black bg-gradient-to-b from-black/60 to-violet-900/20" />
      <Component {...pageProps} />
    </div>
  );
}
