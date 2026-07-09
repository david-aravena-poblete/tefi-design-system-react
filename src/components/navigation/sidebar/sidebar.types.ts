/* ======================================
   IMPORTS
====================================== */

import type {
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";

import type {
  SidebarHeaderProps,
} from "./header";

import type {
  SidebarContentProps,
} from "./content";

import type {
  SidebarSectionProps,
} from "./section";

import type {
  SidebarGroupProps,
} from "./group";

import type {
  SidebarFooterProps,
} from "./footer";

import type {
  SidebarItemProps,
} from "./item";

/* ======================================
   PROPS
====================================== */

export interface SidebarProps
  extends HTMLAttributes<HTMLElement> {

  children?: ReactNode;

}

/* ======================================
   COMPONENT
====================================== */

export interface SidebarComponent
  extends FC<SidebarProps> {

  Header: FC<SidebarHeaderProps>;

  Content: FC<SidebarContentProps>;

  Section: FC<SidebarSectionProps>;

  Group: FC<SidebarGroupProps>;

  Footer: FC<SidebarFooterProps>;

  Item: FC<SidebarItemProps>;

}