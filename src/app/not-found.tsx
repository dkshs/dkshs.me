import type { Metadata } from "next";
import { PageError } from "@/components/PageError";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function PageNotFound() {
  const title = "Page not found";
  const description = "The requested page cannot be found.";

  return <PageError title={title} description={description} />;
}
