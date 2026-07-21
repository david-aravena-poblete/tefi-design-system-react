import type { HTMLAttributes, ReactNode } from "react";

/* ======================================
   PROPS
====================================== */

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;

  children?: ReactNode;
}
