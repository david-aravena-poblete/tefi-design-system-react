import clsx from "clsx";

import "./sidebar-section.css";

import { Text } from "@/components/typography/text";

import type {
  SidebarSectionProps,
} from "./sidebar-section.types";

/* ======================================
   SIDEBAR SECTION
====================================== */

export function SidebarSection({
  heading,
  children,
  className,
  ...props
}: SidebarSectionProps) {

  return (

    <section
      className={clsx(
        "sidebar-section",
        className,
      )}
      {...props}
    >

      {heading && (

        <Text
          size="xs"
          variant="secondary"
          className="sidebar-section__heading"
        >

          {heading}

        </Text>

      )}

      <div className="sidebar-section__content">

        {children}

      </div>

    </section>

  );

}