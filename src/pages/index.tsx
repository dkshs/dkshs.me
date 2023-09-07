import { useData } from "@/hooks/useData";

import { Meta } from "@/components/Meta";
import { Sections } from "@/components/Sections";

export default function HomePage() {
  const { data } = useData();
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
      <Sections.Projects {...projects} />
      <Sections.Contact {...contact} />
    </>
  );
}
