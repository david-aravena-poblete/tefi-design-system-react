import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   PROPS
====================================== */

export interface SidebarFooterProps
  extends HTMLAttributes<HTMLElement> {

  children?: ReactNode;

}