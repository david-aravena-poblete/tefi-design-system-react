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
  size: "md",
  weight: "medium",
  lineHeight: "normal",
};

const defaultInteraction: InteractionProps = {
  press: "move",
  transition: "fast",

  hover: {
    background: "blue-soft",
  },
};

/* ======================================
   BUTTON VARIANTS
====================================== */

const layoutByVariant = {
  primary: {},

  secondary: {},

  danger: {},

  ghost: {},

  link: {
    insideX: "none",
    insideY: "none",
  },

  overlay: {},
} satisfies Record<ButtonVariant, LayoutProps>;

const surfaceByVariant = {
  primary: {},

  secondary: {
    background: "gray",
    border: "gray",
    text:"primary",
    borderWidth: "1",
    borderStyle: "solid",
  },

  danger: {
    background: "red",
  },

  ghost: {
    background: "transparent",
    text: "primary",
  },

  link: {
    background: "transparent",
    text: "blue",
    radius: "none",
  },

  overlay: {
    background: "overlay",
    text: "white",
  },
} satisfies Record<ButtonVariant, SurfaceProps>;

/* ======================================
   BUTTON INTERACTION BY VARIANT
====================================== */

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

  overlay: {
    hover: {
      background: "blue",
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
    size: "sm",
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
  radius,

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
  const iconOnly =
    children === undefined ||
    children === null;

  /* ======================================
     LAYOUT
  ====================================== */

  const buttonLayout: LayoutProps = {
    ...defaultLayout,
    ...layoutByVariant[variant],
    ...layoutBySize[size],

    fill: fullWidth,
  };

  /*
   * Link buttons behave like text actions.
   * They do not need the minimum height
   * inherited from the regular button.
   */

  if (variant === "link") {
    buttonLayout.minHeight = undefined;
  }

  /* ======================================
     ICON ONLY
  ====================================== */

  if (iconOnly) {
    buttonLayout.insideX = "none";

    buttonLayout.minWidth =
      size === "sm"
        ? "32"
        : "40";
  }

  /* ======================================
     SURFACE
  ====================================== */

  const buttonSurface: SurfaceProps = {
    ...defaultSurface,
    ...surfaceByVariant[variant],
  
    ...(iconOnly && {
      radius: "full",
    }),
  
    ...(radius !== undefined && {
      radius,
    }),
  };

  /* ======================================
     TYPOGRAPHY
  ====================================== */

  const buttonTypography = {
    ...defaultTypography,
    ...typographyBySize[size],
  };

  /* ======================================
     INTERACTION
  ====================================== */

  const isDisabled =
    disabled ||
    loading;

  const buttonInteraction = {
    ...defaultInteraction,
    ...interactionByVariant[variant],

    disabled: isDisabled,
  };

  /* ======================================
     CLASS NAME
  ====================================== */

  const componentClassName = createClassName(
    layout(buttonLayout),
    surface(buttonSurface),
    typography(buttonTypography),
    interaction(buttonInteraction),
    className,
  );

  /* ======================================
     BUTTON ELEMENT
  ====================================== */

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
        {loading ? (
          <Spinner size="sm" />
        ) : (
          startIcon
        )}

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
      <Skeleton
        fill={fullWidth}
        radius={buttonSurface.radius}
      >
        {button}
      </Skeleton>
    );
  }

  return button;
}