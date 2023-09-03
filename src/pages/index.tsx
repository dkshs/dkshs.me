import { Meta } from "@/components/Meta";
import { Sections } from "@/components/Sections";
import data from "../../data.json";

export default function HomePage() {
  const { home, about, projects, contact } = data.sections;

  return (
    <>
      <Meta description="Bridge to my projects." path="/" />
      <Sections.Home {...home} />
      <Sections.About {...about} />
      <Sections.Projects {...projects} github={data.github} />
      <Sections.Contact {...contact} />
    </>
  );
}
