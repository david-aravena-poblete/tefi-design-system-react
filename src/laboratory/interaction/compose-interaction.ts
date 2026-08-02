/* ======================================
   IMPORTS
====================================== */

import type { InteractionProps } from "./interaction.types";

/* ======================================
   CAPABILITIES
====================================== */

const interactionNames = [
  "focusRing",
  "press",
  "transition",
] as const;

const compositionNames = [
  "background",
  "border",
  "color",
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

  const hoverClasses = compositionNames.flatMap((name) => {
    const value = props.hover?.[name];

    if (!value) {
      return [];
    }

    return [`interaction--hover-${name}-${value}`];
  });

  const interactionClasses = [
    ...classes,
    ...hoverClasses,
  ];

  if (interactionClasses.length === 0) {
    return "";
  }

  return [
    "interaction",
    ...interactionClasses,
  ].join(" ");
}