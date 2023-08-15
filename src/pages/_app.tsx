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
      <Component {...pageProps} />
    </div>
  );
}
