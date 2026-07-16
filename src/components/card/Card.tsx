/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./card.css";

import type {
  CardComponent,
  CardProps,
  CardSectionProps,
} from "./card.types";

/* ======================================
   CARD
====================================== */

function CardBase({

  /* ======================================
     TEFI PROPS
  ====================================== */

  variant = "outlined",

  size = "md",

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  children,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest

}: CardProps) {

  const classes = clsx(

    "card",

    `card--${variant}`,

    `card--${size}`,

    className,

  );

  return (

    <div
      className={classes}
      {...rest}
    >

      {children}

    </div>

  );

}

/* ======================================
   SECTION
====================================== */

function Section({

  children,

  className,

  section,

  ...rest

}: CardSectionProps & {

  section: string;

}) {

  return (

    <div
      className={clsx(
        section,
        className,
      )}
      {...rest}
    >

      {children}

    </div>

  );

}

/* ======================================
   HEADER
====================================== */

function Header(
  props: CardSectionProps
) {

  return (
    <Section
      section="card__header"
      {...props}
    />
  );

}

/* ======================================
   MEDIA
====================================== */

function Media(
  props: CardSectionProps
) {

  return (
    <Section
      section="card__media"
      {...props}
    />
  );

}

/* ======================================
   BODY
====================================== */

function Body(
  props: CardSectionProps
) {

  return (
    <Section
      section="card__body"
      {...props}
    />
  );

}

/* ======================================
   FOOTER
====================================== */

function Footer(
  props: CardSectionProps
) {

  return (
    <Section
      section="card__footer"
      {...props}
    />
  );

}

/* ======================================
   COMPOUND COMPONENT
====================================== */

export const Card =
  CardBase as CardComponent;

Card.Header = Header;

Card.Media = Media;

Card.Body = Body;

Card.Footer = Footer;