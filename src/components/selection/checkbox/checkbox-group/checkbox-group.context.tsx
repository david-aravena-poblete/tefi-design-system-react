import { createContext, useContext } from "react";

import type { CheckboxGroupContextValue } from "./checkbox-group.types";

/* ======================================
     CONTEXT
  ====================================== */

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

/* ======================================
     PROVIDER
  ====================================== */

export function CheckboxGroupProvider({
  value,
  children,
}: {
  value: CheckboxGroupContextValue;

  children: React.ReactNode;
}) {
  return <CheckboxGroupContext.Provider value={value}>{children}</CheckboxGroupContext.Provider>;
}

/* ======================================
     HOOK
  ====================================== */

export function useCheckboxGroup() {
  return useContext(CheckboxGroupContext);
}
