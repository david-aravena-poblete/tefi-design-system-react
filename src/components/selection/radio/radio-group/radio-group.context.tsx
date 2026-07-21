import { createContext, useContext } from "react";

import type { RadioGroupContextValue } from "./radio-group.types";

/* ======================================
     CONTEXT
  ====================================== */

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

/* ======================================
     PROVIDER
  ====================================== */

export function RadioGroupProvider({
  value,
  children,
}: {
  value: RadioGroupContextValue;

  children: React.ReactNode;
}) {
  return <RadioGroupContext.Provider value={value}>{children}</RadioGroupContext.Provider>;
}

/* ======================================
     HOOK
  ====================================== */

export function useRadioGroup() {
  return useContext(RadioGroupContext);
}
