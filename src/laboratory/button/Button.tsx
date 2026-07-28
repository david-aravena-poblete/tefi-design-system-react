/* ======================================
   IMPORTS
====================================== */

import { Box } from "@/laboratory/box";

import type { ButtonProps } from "./button.types";

/* ======================================
   COMPONENT
====================================== */

export function Button({
  children,
  size = "md",
  variant = "primary",
  ...buttonProps
}: ButtonProps) {
  const sizes = {
    sm: {
      insideX: "sm",
      insideY: "xs",
      fontSize: "sm",
      minHeight: "32",
    },
    md: {
      insideX: "md",
      insideY: "sm",
      fontSize: "md",
      minHeight: "40",
    },
    lg: {
      insideX: "lg",
      insideY: "md",
      fontSize: "lg",
      minHeight: "48",
    },
  } as const;

  const variants = {
    primary: {
      background: "blue",
      text: "white",
      border: "none",
      hover: {
        background: "blue-soft",
      },
    },
  
    secondary: {
      background: "gray-soft",
      text: "black",
      border: "primary",
      hover: {
        background: "gray",
        border: "secondary",
      },
    },
  
    danger: {
      background: "red",
      text: "white",
      border: "none",
      hover: {
        background: "red-strong",
      },
    },
  
    ghost: {
      background: "transparent",
      text: "black",
      border: "none",
      hover: {
        background: "soft",
      },
    },
  
    link: {
      background: "transparent",
      text: "blue",
      border: "none",
      insideX: "none",
      insideY: "none",
      minHeight: "auto",
      radius: "none",
      hover: {
        text: "blue-soft",
      },
    },
  } as const;

  return (
    <Box
      html="button"
      direction="row"
      align="center"
      justify="center"
      radius="md"
      press="move"
      focusRing="blue-transparent"
      transition="fast"
      fontWeight="medium"
      {...sizes[size]}
      {...variants[variant]}
      {...buttonProps}
    >
      {children}
    </Box>
  );
}