/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";

import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";

import type {
  TextHtml,
  TextProps,
} from "./text.types";

/* ======================================
   TEXT DEFAULT
====================================== */

const defaultHtml: TextHtml = "span";
const defaultSurface: SurfaceProps = { text: "black",};
const defaultTypography: TypographyProps = {variant: "body-md", weight: "regular"};

/* ======================================
   TEXT
====================================== */

export function Text<
  T extends TextHtml = "span",
>({
  children,
  as,
  surface: surfaceProps,
  typography: typographyProps,
  className,
  ...props
}: TextProps<T>) {
  const HTML = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const textSurface = {
    ...defaultSurface,
    ...surfaceProps,
  };

  const textTypography = {
    ...defaultTypography,
    ...typographyProps,
  };

  const componentClassName = createClassName(
    typography(textTypography),
    surface(textSurface),
    className,
  );

  return (
    <HTML
      {...props}
      className={componentClassName}
    >
      {children}
    </HTML>
  );
}