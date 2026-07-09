import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   PROPS
====================================== */

export interface SidebarHeaderProps
  extends HTMLAttributes<HTMLElement> {

  children?: ReactNode;

}