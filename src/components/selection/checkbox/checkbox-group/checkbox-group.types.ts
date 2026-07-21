import type { ReactNode } from "react";

/* ======================================
     DIRECTION
  ====================================== */

export type CheckboxGroupDirection = "row" | "column";

/* ======================================
     GAP
  ====================================== */

export type CheckboxGroupGap = "xs" | "sm" | "md" | "lg";

/* ======================================
     CONTEXT VALUE
  ====================================== */

export interface CheckboxGroupContextValue {
  value: string[];

  onChange?: (value: string[]) => void;

  disabled?: boolean;
}

/* ======================================
     PROPS
  ====================================== */

export interface CheckboxGroupProps {
  value?: string[];

  onChange?: (value: string[]) => void;

  disabled?: boolean;

  direction?: CheckboxGroupDirection;

  gap?: CheckboxGroupGap;

  children?: ReactNode;
}
