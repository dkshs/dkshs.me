import { PageError } from "@/components/PageError";

const title = "Página não encontrada";
const description = "A página solicitada não pode ser encontrada.";

export default function PageNotFound() {
  return <PageError title={title} description={description} />;
}
