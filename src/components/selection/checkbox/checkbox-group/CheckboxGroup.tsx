/* ======================================
   IMPORTS
====================================== */

import "./checkbox-group.css";
import { CheckboxGroupProvider } from "./checkbox-group.context";
import type { CheckboxGroupProps } from "./checkbox-group.types";

/* ======================================
   CHECKBOX GROUP
====================================== */

export function CheckboxGroup({
  value = [],

  onChange,

  disabled = false,

  direction = "column",

  gap = "sm",

  children,
}: CheckboxGroupProps) {
  /* ======================================
     CONTEXT
  ====================================== */

  const contextValue = {
    value,

    onChange,

    disabled,
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <CheckboxGroupProvider value={contextValue}>
      <div
        className={["checkbox-group", `checkbox-group--${direction}`].filter(Boolean).join(" ")}

        data-gap={gap}
      >
        {children}
      </div>
    </CheckboxGroupProvider>
  );
}
