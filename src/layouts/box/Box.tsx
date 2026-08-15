/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";

import type { BoxHtml, BoxProps } from "./box.types";

/* ======================================
   DEFAULT
====================================== */

const defaultHtml: BoxHtml = "div";

/* ======================================
   BOX
====================================== */

export function Box<T extends BoxHtml = "div">({
  children,
  as,

  className,

  ...props
}: BoxProps<T>) {
  const Html = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const componentClassName = createClassName(
    layout(props),
    surface(props),
    className,
  );

  return (
    <Html {...props} className={componentClassName}>
      {children}
    </Html>
  );
}