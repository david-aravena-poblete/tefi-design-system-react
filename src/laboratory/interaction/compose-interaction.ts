/* ======================================
   IMPORTS
====================================== */

import type { InteractionProps } from "./interaction.types";

/* ======================================
   CAPABILITIES
====================================== */

const interactionNames = [
  "hover",
  "focusRing",
  "press",
  "transition",
] as const;

/* ======================================
   COMPOSE
====================================== */

export function composeInteraction(
  props: InteractionProps,
) {
  const classes = interactionNames.flatMap((name) => {
    const value = props[name];

    if (!value) {
      return [];
    }

    return [`interaction--${name}-${value}`];
  });

  if (classes.length === 0) {
    return "";
  }

  return [
    "interaction",
    ...classes,
  ].join(" ");
}