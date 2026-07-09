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

const CardBase = ({
  children,
  variant = "outlined",
  size = "md",
  className = "",
  ...props
}: CardProps) => {

  const classes = clsx(
    "card",

    `card--${variant}`,

    `card--${size}`,

    className,
  );

  return (

    <div
      className={classes}
      {...props}
    >

      {children}

    </div>

  );

};

/* ======================================
   HEADER
====================================== */

function Header({
  children,
  className = "",
  ...props
}: CardSectionProps) {

  return (

    <div
      className={clsx(
        "card__header",

        className,
      )}
      {...props}
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
  className = "",
  ...props
}: CardSectionProps) {

  return (

    <div
      className={clsx(
        "card__media",

        className,
      )}
      {...props}
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
  className = "",
  ...props
}: CardSectionProps) {

  return (

    <div
      className={clsx(
        "card__body",

        className,
      )}
      {...props}
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
  className = "",
  ...props
}: CardSectionProps) {

  return (

    <div
      className={clsx(
        "card__footer",

        className,
      )}
      {...props}
    >

      {children}

    </div>

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