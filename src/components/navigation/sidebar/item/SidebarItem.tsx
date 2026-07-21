/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./sidebar-item.css";

import { Button } from "@/components/button";

import type { SidebarItemProps } from "./sidebar-item.types";

/* ======================================
   SIDEBAR ITEM
====================================== */

export function SidebarItem({
  children,
  active = false,
  disabled = false,
  className = "",
  onClick,
}: SidebarItemProps) {
  return (
    <div className={clsx("sidebar-item", className)} data-active={active}>
      <Button variant="ghost" fullWidth disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
}
