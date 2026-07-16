/* ======================================
   IMPORTS
====================================== */

import type {
  ComponentProps,
  JSX,
} from "react";

import type {
  Size,
} from "../../foundations/design-system.types";

/* ======================================
   TYPES
====================================== */

export type CardVariant =
  | "outlined"
  | "elevated"
  | "flat";

/* ======================================
   PROPS
====================================== */

export interface CardProps
  extends ComponentProps<"div"> {

  variant?: CardVariant;

  size?: Size;

}

export interface CardSectionProps
  extends ComponentProps<"div"> {}

/* ======================================
   COMPOUND COMPONENT
====================================== */

export interface CardComponent {

  (
    props: CardProps
  ): JSX.Element;

  Header: (
    props: CardSectionProps
  ) => JSX.Element;

  Media: (
    props: CardSectionProps
  ) => JSX.Element;

  Body: (
    props: CardSectionProps
  ) => JSX.Element;

  Footer: (
    props: CardSectionProps
  ) => JSX.Element;

}