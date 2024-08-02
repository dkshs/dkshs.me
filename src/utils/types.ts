import type { Project } from "contentlayer/generated";
import type { data } from "@/data";

type Sections = typeof data.sections;

export type HomeSectionTypes = Sections["home"];
export type AboutMeSectionTypes = Sections["about"];
export type ProjectsSectionTypes = Sections["projects"];
export type ContactSectionTypes = Sections["contact"];
export type SectionsTypes = Sections;
export type ProjectType = Project;
