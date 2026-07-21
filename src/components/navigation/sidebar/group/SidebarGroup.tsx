import clsx from "clsx";

import "./sidebar-group.css";

import { Text } from "@/components/typography/text";

import type { SidebarGroupProps } from "./sidebar-group.types";

/* ======================================
   SIDEBAR GROUP
====================================== */

export function SidebarGroup({ heading, children, className, ...props }: SidebarGroupProps) {
  return (
    <div className={clsx("sidebar-group", className)} {...props}>
      {heading && (
        <Text size="sm" variant="secondary" className="sidebar-group__heading">
          {heading}
        </Text>
      )}

      <div className="sidebar-group__content">{children}</div>
    </div>
  );
}
