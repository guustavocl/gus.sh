/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ReactNode, createContext, useContext } from "react";

export function createCustomContext<T>(name: string, useCustomHook?: any) {
  const Context = createContext<T | undefined>(undefined);

  function useCustomContext() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(`use${name} must be used within a ${name}Provider`);
    }
    return context;
  }

  function CustomProvider({ children }: { children: ReactNode }) {
    const data = useCustomHook?.();
    return <Context.Provider value={data}>{children}</Context.Provider>;
  }

  return [CustomProvider, useCustomContext, Context] as const;
}
