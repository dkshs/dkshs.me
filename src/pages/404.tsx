import { PageError } from "@/components/PageError";

const title = "Page not found";
const description = "The requested page cannot be found.";

export default function PageNotFound() {
  return <PageError title={title} description={description} />;
}
