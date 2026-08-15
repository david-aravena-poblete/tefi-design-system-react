/* ======================================
   IMPORTS
====================================== */

import type { ReactElement } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";
import { interaction } from "@/laboratory/capabilities/interaction";

import { Skeleton } from "@/primitives/skeleton";
import { Spinner } from "@/primitives/spinner";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";
import type { InteractionProps } from "@/laboratory/capabilities/interaction";

import type { ButtonProps, ButtonSize, ButtonVariant } from "./button.types";

/* ======================================
   BUTTON DEFAULT
====================================== */

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

export function Button({
  children,

  variant = "primary",
  size = "md",

  fullWidth,

  loading,
  skeleton,
  disabled,

  startIcon,
  endIcon,

  className,
  onClick,

  ...props
}: ButtonProps): ReactElement {
  const iconOnly = children === undefined || children === null;

  const buttonLayout: LayoutProps = {
    ...defaultLayout,
    ...layoutBySize[size],

    fill: fullWidth,
  };

  if (iconOnly) {
    buttonLayout.insideX = "none";

    buttonLayout.minWidth = size === "sm" ? "32" : "40";
  }

  const buttonSurface = {
    ...defaultSurface,
    ...surfaceByVariant[variant],
  };

  const buttonTypography = {
    ...defaultTypography,
    ...typographyBySize[size],
  };

  const isDisabled = disabled || loading;

  const buttonInteraction = {
    ...defaultInteraction,
    ...interactionByVariant[variant],

    disabled: isDisabled,
  };

  const componentClassName = createClassName(
    layout(buttonLayout),
    surface(buttonSurface),
    typography(buttonTypography),
    interaction(buttonInteraction),
    className,
  );

  const button = (
    <button
      {...props}
      disabled={isDisabled}
      onClick={
        onClick
          ? (event) => {
              if (isDisabled) {
                event.preventDefault();

                return;
              }

              onClick(event);
            }
          : undefined
      }
      className={componentClassName}
    >
      <>
        {loading ? <Spinner size="sm" /> : startIcon}

        {children}

        {!loading && endIcon}
      </>
    </button>
  );

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (skeleton) {
    return (
      <Skeleton fill={fullWidth} radius={buttonSurface.radius}>
        {button}
      </Skeleton>
    );
  }

  return button;
}
