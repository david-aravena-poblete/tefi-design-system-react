import type { BoxProps } from "./box/box.types";

const capabilityNames = [
  "direction",
  "between",
  "align",
  "justify",
  "inside",
  "insideX",
  "insideY",
  "outside",
  "radius",
  "maxWidth",
  "minHeight",
  "surface",
  "background",
  "text",
  "fontSize",
  "fontWeight",
  "shadow",
  "border",
] as const;

export function compose(
  props: BoxProps,
) {
  const classes = capabilityNames.flatMap((name) => {
    const value = props[name];

    if (!value) {
      return [];
    }

    return [`box--${name}-${value}`];
  });

  return [
    "box",
    ...classes,
  ].join(" ");
}