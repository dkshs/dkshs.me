import type { Project } from "contentlayer/generated";
import { data } from "@/data";
const { sections } = data;

export type HomeSectionTypes = typeof sections.home;
export type AboutMeSectionTypes = typeof sections.about;
export type ProjectsSectionTypes = typeof sections.projects;
export type ContactSectionTypes = typeof sections.contact;
export type SectionsTypes = typeof sections;
export type ProjectType = Project;
