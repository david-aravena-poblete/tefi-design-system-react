/* ======================================
   IMPORTS
====================================== */

import { compose } from "@/laboratory/core/compose";
import type { FocusProps } from "./focus.types";


/* ======================================
   FOCUS CAPABILITIES
====================================== */

export const focusCapabilities = [
  "focusRing",
] as const;


/* ======================================
   FOCUS
====================================== */

export function focus(props: FocusProps) {
  const classes = compose(
    "focus",
    focusCapabilities,
    props,
  );

  const defaultFocusRing =
    props.focusRing !== false
      ? "tefi-focus--ring-default"
      : "";

  return [classes, defaultFocusRing]
    .filter(Boolean)
    .join(" ");
}