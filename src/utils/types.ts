import { data } from "@/data";
const { sections } = data;

export type HomeSectionTypes = typeof sections.home;
export type AboutMeSectionTypes = typeof sections.about;
export type ProjectsSectionTypes = typeof sections.projects;
export type ContactSectionTypes = typeof sections.contact;
export type SectionsTypes = typeof sections;
export type ProjectType = {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string | null;
  slug: string | null;
  image: string | null;
  readme: string;
  longDescription: string | null;
};
