/* ======================================
   IMPORTS
====================================== */

import type {
  TextHtml,
  TextProps,
} from "@/components/typography/text";

import type {
  IconName,
} from "@/primitives/icon";

/* ======================================
   TYPEWRITER PROPS
====================================== */

export type TypewriterProps<T extends TextHtml = "p"> =
  Omit<TextProps<T>, "children"> & {
    text: string;

    speed?: number;

    cursor?: boolean;

    icon?: IconName;
  };