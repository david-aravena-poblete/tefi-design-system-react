import type { HTMLAttributes, ReactNode } from "react";

/* ======================================
   NAVBAR
====================================== */

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/* ======================================
   NAVBAR SECTION
====================================== */

export interface NavbarSectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
