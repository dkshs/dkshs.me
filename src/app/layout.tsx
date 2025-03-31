import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { data } from "@/data";
import { env } from "@/env";

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

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={merriweatherSans.variable}>
        <ThemeProvider attribute="class">
          <ToastContainer
            autoClose={3000}
            limit={3}
            theme="dark"
            className="z-[99999] bg-background font-merriweatherSans text-foreground"
            toastClassName="bg-background font-merriweatherSans font-medium text-foreground backdrop-blur-sm"
            closeOnClick
            stacked
          />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
