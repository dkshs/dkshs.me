import { Meta } from "@/components/Meta";
import { Sections } from "@/components/Sections";
import data from "../../data.json";

export default function HomePage() {
  const { home, about, projects, contact } = data.sections;

  return (
    <>
      <Meta
        description={data.description}
        path="/"
        twitter={data.twitter}
        image={{
          src: "/og.png",
          alt: "OG Image",
        }}
      />
      <Sections.Home {...home} />
      <Sections.About {...about} />
      <Sections.Projects {...projects} github={data.github} />
      <Sections.Contact {...contact} />
    </>
  );
}
