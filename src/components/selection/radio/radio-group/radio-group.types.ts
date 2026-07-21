import type { ReactNode } from "react";

/* ======================================
     DIRECTION
  ====================================== */

export type RadioGroupDirection = "row" | "column";

/* ======================================
     GAP
  ====================================== */

export type RadioGroupGap = "xs" | "sm" | "md" | "lg";

/* ======================================
     CONTEXT VALUE
  ====================================== */

export interface RadioGroupContextValue {
  value?: string;

  onChange?: (value: string) => void;

  disabled?: boolean;

  name?: string;
}

/* ======================================
     PROPS
  ====================================== */

export interface RadioGroupProps {
  value?: string;

  onChange?: (value: string) => void;

  disabled?: boolean;

  direction?: RadioGroupDirection;

  gap?: RadioGroupGap;

  children?: ReactNode;
}
