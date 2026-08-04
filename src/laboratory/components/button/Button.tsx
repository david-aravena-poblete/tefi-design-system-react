/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { composer } from "@/laboratory/composer";

import { html } from "@/laboratory/capabilities/html";
import { interaction } from "@/laboratory/capabilities/interaction";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";
import type { InteractionProps } from "@/laboratory/capabilities/interaction";

import type { HtmlElement } from "@/laboratory/types";

import type { ButtonProps } from "./button.types";

/* ======================================
   DEFAULTS
====================================== */

const defaultLayout: LayoutProps = {
  display: "flex",
  direction: "row",
  align: "center",
  justify: "center",
  insideX: "md",
  insideY: "sm",
  minHeight: "40",
};

const defaultTypography: TypographyProps = {
  variant: "body-md",
  weight: "medium",
};

const defaultSurface: SurfaceProps = {
  background: "blue",
  text: "white",
  radius: "md",
};

const defaultInteraction: InteractionProps = {
  press: "move",
  focusRing: "blue",
  transition: "fast",
  hover: {
    background: "blue-soft",
  },
};

/* ======================================
   COMPONENT
====================================== */

export function Button<
  T extends HtmlElement = "button",
>({
  children,
  as,
  layout: layoutProps,
  typography: typographyProps,
  surface: surfaceProps,
  interaction: interactionProps,
  className,
  ...props
}: ButtonProps<T>) {
  const Component = html({
    as,
  }) as ElementType;

  const finalLayout = {
    ...defaultLayout,
    ...layoutProps,
  };

  console.log("Button Layout:", finalLayout);

  const buttonClassName = composer(
    layout(finalLayout),

    typography({
      ...defaultTypography,
      ...typographyProps,
    }),

    surface({
      ...defaultSurface,
      ...surfaceProps,
    }),

    interaction({
      ...defaultInteraction,
      ...interactionProps,
    }),

    className,
  );

  return (
    <Component
      {...props}
      className={buttonClassName}
    >
      {children}
    </Component>
  );
}