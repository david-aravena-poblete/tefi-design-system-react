/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";

import type { CodeProps } from "./code.types";

/* ======================================
   DEFAULTS
====================================== */

const defaultTypography: TypographyProps = {
  family: "mono",
  size: "sm",
  lineHeight: "tight",
};

const defaultSurface: SurfaceProps = {
  background: "transparent",
  text: "primary",
  border: "subtle",
  borderWidth: "1",
  borderStyle: "solid",
  radius: "sm",
};

const defaultLayout: LayoutProps = {
  insideX: "xs",
  insideY: "xs",
};

/* ======================================
   CODE
====================================== */

export function Code({
  children,
  className,
  ...props
}: CodeProps) {
  const Element = html({
    as: "code",
  }) as ElementType;

  const componentClassName = createClassName(
    layout(defaultLayout),
    surface(defaultSurface),
    typography(defaultTypography),
    className,
  );

  return (
    <Element
      {...props}
      className={componentClassName}
    >
      {children}
    </Element>
  );
}