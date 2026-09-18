/* ======================================
   IMPORTS
====================================== */

import { compose } from "@/laboratory/core/compose";

import type { InteractionProps } from "./interaction.types";

/* ======================================
   CAPABILITIES
====================================== */

export const interactionCapabilities = [
  "hover",
  "press",
  "focusRing",
  "transition",
  "disabled",
  "dragScroll",
] as const;

/* ======================================
   INTERACTION
====================================== */

export function interaction(props: InteractionProps) {
  const classes = compose(
    "interaction",
    interactionCapabilities,
    props,
  );

  const defaultFocusRing =
  props.focusRing !== false
    ? "tefi-interaction--focusRing-default"
    : "";

  return [classes, defaultFocusRing]
    .filter(Boolean)
    .join(" ");
}