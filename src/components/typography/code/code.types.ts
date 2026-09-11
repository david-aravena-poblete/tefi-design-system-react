/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import type { HtmlProps } from "@/laboratory/capabilities/html";

/* ======================================
   CODE PROPS
====================================== */

export type CodeProps = {
  children?: ReactNode;
} & HtmlProps<"code"> &
  Omit<
    ComponentPropsWithoutRef<"code">,
    "children" | "as"
  >;