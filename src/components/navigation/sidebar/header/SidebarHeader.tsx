import clsx from "clsx";

import "./sidebar-header.css";

import type {
  SidebarHeaderProps,
} from "./sidebar-header.types";

/* ======================================
   SIDEBAR HEADER
====================================== */

export function SidebarHeader({
  children,
  className,
  ...props
}: SidebarHeaderProps) {

  return (

    <header
      className={clsx(
        "sidebar-header",
        className,
      )}
      {...props}
    >

      {children}

    </header>

  );

}