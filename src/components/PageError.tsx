import { SITE_NAME } from "@/utils/constants";

import Head from "next/head";
import Link from "next/link";

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
          Voltar para a{" "}
          <Link
            href="/"
            className="text-blue-500 underline-offset-2 hover:text-blue-400 hover:underline active:opacity-80"
          >
            {" "}
            página inicial
          </Link>
          .
        </p>
      </main>
    </>
  );
}
