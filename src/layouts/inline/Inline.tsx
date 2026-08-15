/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { InlineHtml, InlineProps } from "./inline.types";

/* ======================================
   DEFAULT
====================================== */

const defaultHtml: InlineHtml = "div";

/* ======================================
   INLINE
====================================== */

export function Inline<T extends InlineHtml = "div">({
  children,
  as,

  gap = "md",

  className,

  ...props
}: InlineProps<T>) {
  const Html = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const inlineLayout: LayoutProps = {
    display: "flex",
    direction: "row",
    between: gap,
  };

  const componentClassName = createClassName(layout(inlineLayout), className);

  return (
    <Html {...props} className={componentClassName}>
      {children}
    </Html>
  );
}
