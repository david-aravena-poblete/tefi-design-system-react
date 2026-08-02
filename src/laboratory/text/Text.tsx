/* ======================================
   STYLES
====================================== */

import "./text.css";

/* ======================================
   IMPORTS
====================================== */

import { Box } from "@/laboratory/box";
import { compose } from "@/laboratory/core/compose";

import type { TextProps } from "./text.types";

/* ======================================
   CAPABILITIES
====================================== */

const textCapabilities = [
  "size",
  "weight",
  "align",
  "truncate",
] as const;

/* ======================================
   COMPONENT
====================================== */

export function Text({
  as = "span",
  size,
  weight,
  color,
  align,
  truncate,
  className,
  ...props
}: TextProps) {
  const capabilityClassName = compose(
    "text",
    textCapabilities,
    {
      size,
      weight,
      align,
      truncate,
    },
  );

  const textClassName = [
    capabilityClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Box
      as={as}
      color={color}
      className={textClassName}
      {...props}
    />
  );
}