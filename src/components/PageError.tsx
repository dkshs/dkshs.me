import { SITE_NAME } from "@/utils/constants";

import Head from "next/head";
import NextLink from "next/link";
import { Link } from "./ui/link";

interface PageErrorProps {
  title: string;
  description: string;
}

export function PageError({ title, description }: PageErrorProps) {
  const pageTitle = `${title} · ${SITE_NAME}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-2 pt-10 text-2xl">{title}</h1>
        <p className="mt-2 text-lg">{description}</p>
        <p className="mt-2 text-base">
          Volte para a{" "}
          <Link asChild>
            <NextLink href="/">página inicial</NextLink>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
