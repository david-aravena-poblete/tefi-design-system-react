import "./card.css";

import type {
  CardProps,
  CardSectionProps,
} from "./card.types";

/* ======================================
   CARD
====================================== */

export function Card({
  children,
  variant = "outlined",
  size = "md",
  className = "",
  ...props
}: CardProps) {

  const classes = [
    "card",
    `card--${variant}`,
    `card--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
}

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
      className={[
        "card__header",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
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
      className={[
        "card__body",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
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
      className={[
        "card__footer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

/* ======================================
   COMPOUND COMPONENTS
====================================== */

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;