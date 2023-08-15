import { PageError } from "@/components/PageError";

const title = "Erro no servidor";
const description = "Ocorreu um erro no servidor, tente novamente mais tarde.";

export default function ServerSideError() {
  return <PageError title={title} description={description} />;
}
