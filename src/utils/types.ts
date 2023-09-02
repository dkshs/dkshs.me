import type { sections } from "../../data.json";

export type HomeSectionProps = { data: typeof sections.home };
export type AboutMeSectionProps = { data: typeof sections.about };
export type ProjectsSectionProps = { data: typeof sections.projects };
export type SectionsProps = typeof sections;
