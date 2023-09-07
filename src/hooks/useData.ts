import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    console.warn("DataContext is undefined in useData()");
    throw new Error(`useData must be used within a DataContextProvider.`);
  }
  return context;
};
