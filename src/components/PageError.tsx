import { SITE_NAME } from "@/utils/constants";

import Head from "next/head";
import Link from "next/link";

interface PageErrorProps {
  title: string;
  description: string;
}

export function PageError({ title, description }: PageErrorProps) {
  return (
    <>
      <Head>
        <title>
          {title} · {SITE_NAME}
        </title>
      </Head>
      <main className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-2 pt-10 text-2xl">{title}</h1>
        <p className="mt-2 text-lg">{description}</p>
        <p className="mt-2 text-base">
          Voltar para a{" "}
          <Link
            href="/"
            className="text-blue-600 underline-offset-2 hover:text-blue-800 hover:underline active:opacity-70"
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
