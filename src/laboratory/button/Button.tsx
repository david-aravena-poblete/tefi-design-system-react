/* ======================================
   IMPORTS
====================================== */

import { Box } from "@/laboratory/box";
import { Text } from "@/laboratory/text/Text";

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
  const buttonSizes = {
    sm: {
      insideX: "sm",
      insideY: "xs",
      minHeight: "32",
    },

    md: {
      insideX: "md",
      insideY: "sm",
      minHeight: "40",
    },
  } as const;

  const textSizes = {
    sm: "sm",
    md: "md",
  } as const;

  const buttonVariants = {
    primary: {
      background: "blue",
      hover: {
        background: "blue-soft",
      },
    },

    secondary: {
      background: "gray-soft",
      border: "gray",
      hover: {
        background: "gray",
      },
    },

    danger: {
      background: "red",
      hover: {
        background: "red-strong",
      },
    },

    ghost: {
      background: "transparent",
      hover: {
        background: "soft",
      },
    },

    link: {
      background: "transparent",
      color: "blue",
      insideX: "none",
      insideY: "none",
      outside: "none",
      minHeight: "auto",
      radius: "none",
      hover: {
        color: "blue-soft",
      },
    },
  } as const;

  const textVariants = {
    primary: {
      color: "white",
    },

    secondary: {
      color: "black",
    },

    danger: {
      color: "white",
    },

    ghost: {
      color: "black",
    },

    link: {},
  } as const;

  const boxProps =
    variant === "link"
      ? buttonVariants.link
      : {
          ...buttonSizes[size],
          ...buttonVariants[variant],
        };

  return (
    <Box
      as="button"
      direction="row"
      align="center"
      justify="center"
      radius="md"
      press="move"
      focusRing="blue-transparent"
      transition="fast"
      {...boxProps}
      {...buttonProps}
    >
      <Text
        size={textSizes[size]}
        {...textVariants[variant]}
      >
        {children}
      </Text>
    </Box>
  );
}