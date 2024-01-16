import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";

import { env } from "@/env.mjs";
import { data } from "@/data";
import { ToastContainer } from "react-toastify";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const merriweatherSans = MerriweatherSans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_BASEURL),
  title: {
    default: env.SITE_NAME,
    template: `%s • ${env.SITE_NAME}`,
  },
  description: data.description,
  alternates: {
    canonical: "/",
  },
  manifest: `${env.SITE_BASEURL}/manifest.json`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: {
      default: env.SITE_NAME,
      template: `%s • ${env.SITE_NAME}`,
    },
    description: data.description,
    siteName: env.SITE_NAME,
    type: "website",
    url: "/",
    locale: env.SITE_LOCALE,
    images: {
      url: `${env.SITE_BASEURL}/og`,
      alt: `${data.name} - ${data.description}`,
    },
  },
  twitter: {
    title: {
      default: env.SITE_NAME,
      template: `%s • ${env.SITE_NAME}`,
    },
    description: data.description,
    creator: `@${data.twitter}`,
    site: `@${data.twitter}`,
    card: "summary_large_image",
    images: {
      url: `${env.SITE_BASEURL}/og`,
      alt: `${data.name} - ${data.description}`,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={merriweatherSans.variable}>
      <body>
        <div className="fixed inset-0 -z-[1] bg-primary/10 bg-gradient-to-b from-primary/10 to-background/60" />
        <ToastContainer
          autoClose={3000}
          limit={3}
          theme="dark"
          style={{ zIndex: 99999 }}
          toastStyle={{
            backdropFilter: "blur(5px)",
            backgroundColor: "hsl(var(--background)/0.5)",
            fontWeight: "500",
            fontFamily: merriweatherSans.style.fontFamily,
          }}
          closeOnClick
          stacked
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
