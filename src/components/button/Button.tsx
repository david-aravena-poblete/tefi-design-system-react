/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { interaction } from "@/laboratory/capabilities/interaction";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";

import type { InteractionProps } from "@/laboratory/capabilities/interaction";
import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";

import type {
  ButtonHtml,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./button.types";

/* ======================================
   BUTTON DEFAULT
====================================== */

const defaultHtml: ButtonHtml = "button";

const defaultLayout: LayoutProps = {
  display: "flex",
  direction: "row",
  align: "center",
  justify: "center",

  between: "xs",

  insideX: "md",
  insideY: "sm",
  minHeight: "40",
};

const defaultSurface: SurfaceProps = {
  background: "blue",
  text: "white",
  radius: "md",
};

const defaultTypography: TypographyProps = {
  variant: "body-md",
  weight: "medium",
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
   BUTTON VARIANTS
====================================== */

const surfaceByVariant = {
  primary: {},

  secondary: {
    background: "gray",
    text: "black",
    border: "gray",
    borderWidth: "1",
    borderStyle: "solid",
  },

  danger: {
    background: "red",
  },

  ghost: {
    background: "transparent",
    text: "black",
  },

  link: {
    background: "transparent",
    text: "blue",
  },
} satisfies Record<ButtonVariant, SurfaceProps>;

const interactionByVariant = {
  primary: {},

  secondary: {
    hover: {
      background: "gray-soft",
    },
  },

  ghost: {
    hover: {
      background: "gray-soft",
    },
  },

  link: {
    hover: {
      background: "transparent",
      text: "blue-soft",
    },
  },

  danger: {
    hover: {
      background: "red-strong",
    },
  },
} satisfies Record<ButtonVariant, InteractionProps>;

/* ======================================
   BUTTON SIZES
====================================== */

const layoutBySize = {
  sm: {
    insideX: "sm",
    insideY: "xs",
    minHeight: "32",
  },

  md: {},
} satisfies Record<ButtonSize, LayoutProps>;

const typographyBySize = {
  sm: {
    variant: "body-sm",
  },

  md: {},
} satisfies Record<ButtonSize, TypographyProps>;

/* ======================================
   BUTTON
====================================== */

export function Button<
  T extends ButtonHtml = "button",
>({
  children,
  as,
  variant = "primary",
  size = "md",

  startIcon,
  endIcon,

  className,
  ...props
}: ButtonProps<T>) {
  
  const Element = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const buttonLayout = {
    ...defaultLayout,
    ...layoutBySize[size],
  };

  const buttonSurface = {
    ...defaultSurface,
    ...surfaceByVariant[variant],
  };

  const buttonTypography = {
    ...defaultTypography,
    ...typographyBySize[size],
  };

  const buttonInteraction = {
    ...defaultInteraction,
    ...interactionByVariant[variant],
  };

  const componentClassName = createClassName(
    layout(buttonLayout),
    surface(buttonSurface),
    typography(buttonTypography),
    interaction(buttonInteraction),
    className,
  );

  return (
    <Element
      {...props}
      className={componentClassName}
    >
      {startIcon}
  
      {children}
  
      {endIcon}
    </Element>
  );
}