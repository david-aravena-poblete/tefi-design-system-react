/* ======================================
   IMPORTS
====================================== */

import type {
  HTMLAttributes,
  ReactNode,
  JSX,
} from "react";

/* ======================================
   CARD
====================================== */

export type CardVariant =
  | "outlined"
  | "elevated"
  | "flat";

export type CardSize =
  | "sm"
  | "md"
  | "lg";

/* ======================================
   PROPS
====================================== */

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {

  children?: ReactNode;

  variant?: CardVariant;

  size?: CardSize;

}

export interface CardSectionProps
  extends HTMLAttributes<HTMLDivElement> {

  children?: ReactNode;

}

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