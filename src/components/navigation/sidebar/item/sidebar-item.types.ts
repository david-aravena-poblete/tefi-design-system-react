/* ======================================
   IMPORTS
====================================== */

import type {
  ReactNode,
} from "react";

import type {
  ButtonProps,
} from "@/components/button";

/* ======================================
   PROPS
====================================== */

export interface SidebarItemProps {

  children?: ReactNode;

  active?: boolean;

  disabled?: boolean;

  onClick?: ButtonProps["onClick"];

  className?: string;

}