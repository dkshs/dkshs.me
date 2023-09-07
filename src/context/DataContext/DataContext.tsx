import { type DataType, data } from "@/data";
import { type PropsWithChildren, createContext } from "react";

interface DataContextProps {
  data: DataType;
}

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps,
);

export function DataContextProvider(props: PropsWithChildren) {
  return (
    <DataContext.Provider value={{ data }}>
      {props.children}
    </DataContext.Provider>
  );
}
