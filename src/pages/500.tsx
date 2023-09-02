import { PageError } from "@/components/PageError";

const title = "Server error";
const description = "A server error occurred, please try again later.";

export default function ServerSideError() {
  return <PageError title={title} description={description} />;
}
