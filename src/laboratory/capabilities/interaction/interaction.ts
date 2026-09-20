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
  "transition",
  "disabled",
  "dragScroll",
] as const;


/* ======================================
   INTERACTION
====================================== */

export function interaction(props: InteractionProps) {
  return compose(
    "interaction",
    interactionCapabilities,
    props,
  );
}