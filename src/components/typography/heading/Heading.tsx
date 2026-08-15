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
  size = "md",

  ...props
}: HeadingProps) {
  return <Text as={as} size={size} {...props} />;
}
