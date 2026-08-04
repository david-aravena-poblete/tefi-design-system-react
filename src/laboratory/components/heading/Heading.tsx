/* ======================================
   IMPORTS
====================================== */

import { Text } from "../text";

import type { HeadingProps } from "./heading.types";

/* ======================================
   COMPONENT
====================================== */

export function Heading({
  as = "h2",
  typography,
  ...props
}: HeadingProps) {
  return (
    <Text
      as={as}
      typography={{
        variant: "heading-md",
        ...typography,
      }}
      {...props}
    />
  );
}