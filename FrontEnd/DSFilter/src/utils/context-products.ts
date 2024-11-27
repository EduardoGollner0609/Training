import { createContext } from "react";

export type ContextProductCountType = {
  contextProductCount: number;
  setContextCartCount: (contextProductCount: number) => void;
};

export const ContextProductCount = createContext<ContextProductCountType>({
  contextProductCount: 0,
  setContextCartCount: () => {}
});
