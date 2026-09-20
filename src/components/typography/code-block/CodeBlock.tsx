import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";
import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";

import type { CodeBlockProps } from "./code-block.types";

const defaultLayout: LayoutProps = {
  inside: "md",
};

const defaultSurface: SurfaceProps = {
  background: "surface-tertiary",
  radius: "md",
};

const defaultTypography: TypographyProps = {
  family: "mono",
  size: "sm",
  lineHeight: "normal",
};

export function CodeBlock({
  children,
  className,
  ...props
}: CodeBlockProps) {
  const Element = html({
    as: "pre",
  }) as ElementType;

  const componentClassName = createClassName(
    layout(defaultLayout),
    surface(defaultSurface),
    typography(defaultTypography),
    className,
  );

  return (
    <Element {...props} className={componentClassName}>
      {children}
    </Element>
  );
}