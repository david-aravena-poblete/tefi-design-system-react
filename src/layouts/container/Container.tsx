/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { ContainerHtml, ContainerProps, ContainerSize } from "./container.types";

/* ======================================
   DEFAULT
====================================== */

const defaultHtml: ContainerHtml = "div";

/* ======================================
   LAYOUT
====================================== */

const layoutBySize = {
  sm: {
    maxWidth: "md",
  },

  md: {
    maxWidth: "lg",
  },

  lg: {
    maxWidth: "xl",
  },

  xl: {
    maxWidth: "2xl",
  },

  full: {},
} satisfies Record<ContainerSize, LayoutProps>;

/* ======================================
   CONTAINER
====================================== */

export function Container<T extends ContainerHtml = "div">({
  children,
  as,

  size = "md",

  className,

  ...props
}: ContainerProps<T>) {
  const Html = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const containerLayout: LayoutProps = {
    fill: true,
    insideX: "lg",
    outsideX: "auto",

    ...layoutBySize[size],
  };

  const componentClassName = createClassName(layout(containerLayout), className);

  return (
    <Html {...props} className={componentClassName}>
      {children}
    </Html>
  );
}
