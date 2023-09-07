import type { ProjectType } from "@/utils/types";
import { type DataType, data } from "@/data";
import { type PropsWithChildren, createContext, useCallback } from "react";

interface DataContextProps {
  data: DataType;
  getProjects: () => [string, ProjectType][];
}

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps,
);

export function DataContextProvider(props: PropsWithChildren) {
  const { sections } = data;

  const getProjects = useCallback(() => {
    return Object.entries(sections.projects.content);
  }, [sections]);

  return (
    <DataContext.Provider value={{ data, getProjects }}>
      {props.children}
    </DataContext.Provider>
  );
}
