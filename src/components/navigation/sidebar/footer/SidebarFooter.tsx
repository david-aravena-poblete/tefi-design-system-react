import clsx from "clsx";

import "./sidebar-footer.css";

import type { SidebarFooterProps } from "./sidebar-footer.types";

/* ======================================
   SIDEBAR FOOTER
====================================== */

export function SidebarFooter({ children, className, ...props }: SidebarFooterProps) {
  return (
    <footer className={clsx("sidebar-footer", className)} {...props}>
      {children}
    </footer>
  );
}
