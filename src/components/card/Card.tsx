/* ======================================
   IMPORTS
====================================== */

import { createClassName } from "@/laboratory/create-class-name";

import { Box } from "@/layouts/box";

import type { InteractionProps } from "@/laboratory/capabilities/interaction";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";

import type {
  CardComponent,
  CardProps,
  CardVariant,
  CardSectionProps,
} from "./card.types";

import "./card.css";


/* ======================================
   CARD DEFAULTS
====================================== */

const defaultLayout = {
  display: "flex",
  direction: "column",
} as const;

const defaultSurface: SurfaceProps = {
  background: "surface-secondary",
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
    background: "surface-secondary",
    border: "default",
    borderWidth: "1",
    borderStyle: "solid",
  },

  elevated: {
    background: "surface-secondary",
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
      border: "subtle",
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
  return (
    <Box
      {...defaultLayout}
      {...defaultSurface}
      {...surfaceByVariant[variant]}
      {...defaultInteraction}
      {...interactionByVariant[variant]}
      {...props}
      className={createClassName(
        "card",
        `card--${size}`,
        className,
      )}
    >
      {children}
    </Box>
  );
}


/* ======================================
   HEADER
====================================== */

function Header({
  children,
  className,
  ...props
}: CardSectionProps) {
  return (
    <div
      {...props}
      className={createClassName(
        "card__header",
        className,
      )}
    >
      {children}
    </div>
  );
}


/* ======================================
   MEDIA
====================================== */

function Media({
  children,
  className,
  ...props
}: CardSectionProps) {
  return (
    <div
      {...props}
      className={createClassName(
        "card__media",
        className,
      )}
    >
      {children}
    </div>
  );
}


/* ======================================
   BODY
====================================== */

function Body({
  children,
  className,
  ...props
}: CardSectionProps) {
  return (
    <div
      {...props}
      className={createClassName(
        "card__body",
        className,
      )}
    >
      {children}
    </div>
  );
}


/* ======================================
   FOOTER
====================================== */

function Footer({
  children,
  className,
  ...props
}: CardSectionProps) {
  return (
    <div
      {...props}
      className={createClassName(
        "card__footer",
        className,
      )}
    >
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