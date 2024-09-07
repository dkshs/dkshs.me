import { Sections } from "@/components/Sections";
import { data } from "@/data";

export default function HomePage() {
  const { home, about, projects, contact } = data.sections;

  return (
    <>
      <Sections.Home {...home} />
      <Sections.About {...about} />
      <Sections.Projects {...projects} />
      <Sections.Contact {...contact} />
    </>
  );
}
