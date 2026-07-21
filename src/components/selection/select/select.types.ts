/* ======================================
   IMPORTS
====================================== */

import type { HTMLAttributes } from "react";

import type { Option } from "../option-list";

/* ======================================
   SELECT PROPS
====================================== */

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  options?: Option[];

  value?: string | null;

  placeholder?: string;

  disabled?: boolean;

  onChange?: (value: string) => void;
}
