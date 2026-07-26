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

  return (
    <Box
      html="button"
      direction="row"
      align="center"
      justify="center"
      radius="md"
      background="blue"
      text="white"
      border="none"
      hover="blue-light"
      press= "move"
      focusRing="blue-transparent"
      transition="fast"
      fontWeight="medium"
      {...sizes[size]}
      {...buttonProps}
    >
      {children}
    </Box>
  );
}