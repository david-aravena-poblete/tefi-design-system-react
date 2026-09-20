/* ======================================
   IMPORTS
====================================== */

import type { ReactElement } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { focus } from "@/laboratory/capabilities/focus";
import { interaction } from "@/laboratory/capabilities/interaction";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { typography } from "@/laboratory/capabilities/typography";

import { Skeleton } from "@/primitives/skeleton";
import { Spinner } from "@/primitives/spinner";

import type { FocusProps } from "@/laboratory/capabilities/focus";
import type { InteractionProps } from "@/laboratory/capabilities/interaction";
import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";

import type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./button.types";


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
  background: "primary",
  text: "inverse",
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
    background: "primary-hover",
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
    background: "surface-secondary",
    border: "default",
    text: "primary",
    borderWidth: "1",
    borderStyle: "solid",
  },

  danger: {
    background: "danger",
  },

  ghost: {
    background: "transparent",
    text: "primary",
  },

  link: {
    background: "transparent",
    text: "link",
    radius: "none",
  },

  overlay: {
    background: "overlay",
    text: "inverse",
  },
} satisfies Record<ButtonVariant, SurfaceProps>;


/* ======================================
   BUTTON INTERACTION BY VARIANT
====================================== */

const interactionByVariant = {
  primary: {},

  secondary: {
    hover: {
      background: "surface-tertiary",
    },
  },

  ghost: {
    hover: {
      background: "surface-tertiary",
    },
  },

  link: {
    hover: {
      background: "transparent",
      text: "link",
    },
  },

  danger: {
    hover: {
      background: "danger-hover",
    },
  },

  overlay: {
    hover: {
      background: "primary",
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

  focusRing,

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

  const buttonTypography: TypographyProps = {
    ...defaultTypography,
    ...typographyBySize[size],
  };

  /* ======================================
     INTERACTION
  ====================================== */

  const isDisabled =
    disabled ||
    loading;

  const buttonInteraction: InteractionProps = {
    ...defaultInteraction,
    ...interactionByVariant[variant],

    disabled: isDisabled,
  };

  /* ======================================
     FOCUS
  ====================================== */

  const buttonFocus: FocusProps = {
    focusRing,
  };

  /* ======================================
     CLASS NAME
  ====================================== */

  const componentClassName = createClassName(
    layout(buttonLayout),
    surface(buttonSurface),
    typography(buttonTypography),
    focus(buttonFocus),
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