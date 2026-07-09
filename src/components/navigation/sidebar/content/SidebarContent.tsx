/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./sidebar-content.css";

import type {
  SidebarContentProps,
} from "./sidebar-content.types";

/* ======================================
   SIDEBAR CONTENT
====================================== */

export function SidebarContent({
  children,
  className,
  ...props
}: SidebarContentProps) {

  return (

    <div
      className={clsx(
        "sidebar-content",
        className,
      )}
      {...props}
    >

      {children}

    </div>

  );

}