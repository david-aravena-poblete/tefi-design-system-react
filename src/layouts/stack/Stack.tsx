/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { StackHtml, StackProps } from "./stack.types";

/* ======================================
   DEFAULT
====================================== */

const defaultHtml: StackHtml = "div";

/* ======================================
   STACK
====================================== */

export function Stack<T extends StackHtml = "div">({
  children,
  as,

  gap = "md",

  className,

  ...props
}: StackProps<T>) {
  const Html = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const stackLayout: LayoutProps = {
    display: "flex",
    direction: "column",
    between: gap,
  };

  const componentClassName = createClassName(layout(stackLayout), className);

  return (
    <Html {...props} className={componentClassName}>
      {children}
    </Html>
  );
}
