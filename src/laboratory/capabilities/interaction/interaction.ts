/* ======================================
   IMPORTS
====================================== */

import { compose } from "@/laboratory/core/compose";

import type { InteractionProps } from "./interaction.types";

/* ======================================
   CAPABILITIES
====================================== */

const interactionCapabilities = ["hover", "press", "focusRing", "transition", "disabled"] as const;

/* ======================================
   INTERACTION
====================================== */

export function interaction(props: InteractionProps) {
  return compose("interaction", interactionCapabilities, props);
}
