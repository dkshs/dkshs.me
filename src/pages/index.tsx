import { Meta } from "@/components/Meta";
import { Sections } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <Meta description="Bridge to my projects." path="/" />
      <Sections.Home />
      <Sections.About />
      <Sections.Projects />
    </>
  );
}
