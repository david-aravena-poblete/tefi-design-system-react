import type { HTMLAttributes, ReactNode } from "react";

/* ======================================
   PROPS
====================================== */

export interface SidebarSectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  heading?: ReactNode;

  children?: ReactNode;
}
