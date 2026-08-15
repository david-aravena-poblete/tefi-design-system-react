/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { interaction } from "@/laboratory/capabilities/interaction";

import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { InteractionProps } from "@/laboratory/capabilities/interaction";

import type { CardComponent, CardProps, CardVariant, CardSectionProps } from "./card.types";

import "./card.css";

/* ======================================
   CARD DEFAULTS
====================================== */

const defaultLayout = {
  display: "flex",
  direction: "column",
} as const;

const defaultSurface: SurfaceProps = {
  background: "gray-soft",
  radius: "md",
};

const defaultInteraction: InteractionProps = {
  transition: "fast",
};

/* ======================================
   CARD VARIANTS
====================================== */

const surfaceByVariant = {
  outlined: {
    background: "gray-soft",
    border: "gray-soft",
    borderWidth: "1",
    borderStyle: "solid",
  },

  elevated: {
    background: "gray-soft",
    shadow: "sm",
  },

  flat: {
    background: "transparent",
  },
} satisfies Record<CardVariant, SurfaceProps>;

/* ======================================
   CARD INTERACTIONS
====================================== */

const interactionByVariant = {
  outlined: {
    hover: {
      border: "gray",
    },
  },

  elevated: {
    hover: {
      shadow: "md",
    },
  },

  flat: {},
} satisfies Record<CardVariant, InteractionProps>;

/* ======================================
   CARD
====================================== */

function CardBase({
  variant = "outlined",

  size = "md",

  className,

  children,

  ...props
}: CardProps) {
  const Html = html({
    as: "div",
  }) as ElementType;

  const componentClassName = createClassName(
    "card",
    `card--${size}`,

    layout(defaultLayout),

    surface({
      ...defaultSurface,
      ...surfaceByVariant[variant],
    }),

    interaction({
      ...defaultInteraction,
      ...interactionByVariant[variant],
    }),

    className,
  );

  return (
    <Html {...props} className={componentClassName}>
      {children}
    </Html>
  );
}

/* ======================================
   HEADER
====================================== */

function Header({ children, className, ...props }: CardSectionProps) {
  return (
    <div {...props} className={createClassName("card__header", className)}>
      {children}
    </div>
  );
}

/* ======================================
   MEDIA
====================================== */

function Media({ children, className, ...props }: CardSectionProps) {
  return (
    <div {...props} className={createClassName("card__media", className)}>
      {children}
    </div>
  );
}

/* ======================================
   BODY
====================================== */

function Body({ children, className, ...props }: CardSectionProps) {
  return (
    <div {...props} className={createClassName("card__body", className)}>
      {children}
    </div>
  );
}

/* ======================================
   FOOTER
====================================== */

function Footer({ children, className, ...props }: CardSectionProps) {
  return (
    <div {...props} className={createClassName("card__footer", className)}>
      {children}
    </div>
  );
}

/* ======================================
   COMPOUND COMPONENT
====================================== */

export const Card = CardBase as CardComponent;

Card.Header = Header;

Card.Media = Media;

Card.Body = Body;

Card.Footer = Footer;
