/* ======================================
   IMPORTS
====================================== */

import type { ComponentProps } from "react";

import type { Aspect } from "../../foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type ImageFit = "cover" | "contain";

export type ImageSourceProps = ComponentProps<"img">;

/* ======================================
   IMAGE PROPS
====================================== */

export interface ImageProps extends ImageSourceProps {
  fit?: ImageFit;

  aspect?: Aspect;

  skeleton?: boolean;
}
