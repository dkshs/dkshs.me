import { useData } from "@/hooks/useData";

import { Meta } from "@/components/Meta";
import { Sections } from "@/components/Sections";

export default function HomePage() {
  const { data } = useData();
  const { home, about, projects, contact } = data.sections;

  return (
    <>
      <Meta
        path="/"
        description={data.description}
        twitter={data.twitter}
        image={{
          src: "/api/og",
          alt: `${data.name} - ${data.description}`,
        }}
      />
      <Sections.Home {...home} />
      <Sections.About {...about} />
      <Sections.Projects {...projects} />
      <Sections.Contact {...contact} />
    </>
  );
}
