/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { composer } from "@/laboratory/composer";

import { html } from "@/laboratory/capabilities/html";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";

import type { HtmlElement } from "@/laboratory/types";

import type { TextProps } from "./text.types";

/* ======================================
   COMPONENT
====================================== */

export function Text<
  T extends HtmlElement = "span",
>({
  children,
  as,
  typography: typographyProps,
  surface: surfaceProps,
  className,
  ...props
}: TextProps<T>) {
  const Component = html({
    as,
  }) as ElementType;

  const textClassName = composer(
    typographyProps &&
      typography(typographyProps),

    surfaceProps &&
      surface(surfaceProps),

    className,
  );

  return (
    <Component
      {...props}
      className={textClassName}
    >
      {children}
    </Component>
  );
}