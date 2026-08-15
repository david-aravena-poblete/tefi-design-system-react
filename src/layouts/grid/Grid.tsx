/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import "./grid.css";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { GridHtml, GridProps } from "./grid.types";

/* ======================================
   DEFAULT
====================================== */

const defaultHtml: GridHtml = "div";

/* ======================================
   GRID
====================================== */

export function Grid<T extends GridHtml = "div">({
  children,
  as,

  gap = "lg",
  columns,

  className,

  ...props
}: GridProps<T>) {
  const Html = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const gridLayout: LayoutProps = {
    display: "grid",
    between: gap,
  };

  const componentClassName = createClassName(
    layout(gridLayout),

    columns ? `grid--cols-${columns}` : "grid--auto",

    className,
  );

  return (
    <Html {...props} className={componentClassName}>
      {children}
    </Html>
  );
}
