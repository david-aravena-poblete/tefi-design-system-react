/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./sidebar.css";

import type {
  SidebarComponent,
} from "./sidebar.types";

import { SidebarHeader } from "./header";
import { SidebarContent } from "./content";
import { SidebarSection } from "./section";
import { SidebarGroup } from "./group";
import { SidebarFooter } from "./footer";
import { SidebarItem } from "./item";

/* ======================================
   SIDEBAR
====================================== */

export const Sidebar: SidebarComponent = ({
  children,
  className,
  ...props
}) => {

  return (

    <aside
      className={clsx(
        "sidebar",
        className,
      )}
      {...props}
    >

      {children}

    </aside>

  );

};

Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.Section = SidebarSection;
Sidebar.Group = SidebarGroup;
Sidebar.Footer = SidebarFooter;
Sidebar.Item = SidebarItem;