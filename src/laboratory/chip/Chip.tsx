/* ======================================
   IMPORTS
====================================== */

import { Box } from "../box";
import { Text } from "../text/Text";

import type { ChipProps } from "./chip.types";

/* ======================================
   COMPONENT
====================================== */

export function Chip({
  children,
  size = "md",
  variant = "solid",
  ...props
}: ChipProps) {
  const sizes = {
    sm: {
      insideX: "xs",
      insideY: "xxs",
    },

    md: {
      insideX: "sm",
      insideY: "xs",
    },
  } as const;

  const boxVariants = {
    solid: {
      background: "gray-soft",
      border: "gray",
    },

    outline: {
      background: "transparent",
      border: "blue",
    },
  } as const;

  const textVariants = {
    solid: {
      color: "black",
    },

    outline: {
      color: "blue",
    },
  } as const;

  return (
    <Box
      as="div"
      display="inline-flex"
      direction="row"
      align="center"
      between="xs"
      radius="full"
      {...sizes[size]}
      {...boxVariants[variant]}
      {...props}
    >
      <Text
        size={size}
        {...textVariants[variant]}
      >
        {children}
      </Text>
    </Box>
  );
}