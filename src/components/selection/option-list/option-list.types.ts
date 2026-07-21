/* ======================================
   IMPORTS
====================================== */

import type { HTMLAttributes, ReactNode } from "react";

import type { OptionItemProps } from "../option-item";

/* ======================================
   OPTION
====================================== */

export interface Option {
  label: string;

  value: string;

  disabled?: boolean;
}

/* ======================================
   OPTION LIST PROPS
====================================== */

export interface OptionListProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  options?: Option[];

  value?: string | null;

  initialActiveIndex?: number;

  disabled?: boolean;

  embedded?: boolean;

  onChange?: (value: string) => void;

  renderOption?: (option: Option, props: Omit<OptionItemProps, "children">) => ReactNode;
}
