/* ======================================
   IMPORTS
====================================== */

import { Text } from "../text";

import type { HeadingProps } from "./heading.types";

/* ======================================
   HEADING
====================================== */

export function Heading({
  as = "h1",
  size = "2xl",
  weight = "bold",
  lineHeight = "tight",

  ...props
}: HeadingProps) {
  return (
    <Text
      as={as}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      {...props}
    />
  );
}