/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import "./section.css";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { SectionHtml, SectionProps } from "./section.types";

/* ======================================
   DEFAULT
====================================== */

const defaultHtml: SectionHtml = "section";

/* ======================================
   SECTION
====================================== */

export function Section<T extends SectionHtml = "section">({
  children,
  as,

  size = "md",

  className,

  ...props
}: SectionProps<T>) {
  const Html = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const sectionLayout: LayoutProps = {
    fill: true,
  };

  const componentClassName = createClassName(layout(sectionLayout), `section--${size}`, className);

  return (
    <Html {...props} className={componentClassName}>
      {children}
    </Html>
  );
}
