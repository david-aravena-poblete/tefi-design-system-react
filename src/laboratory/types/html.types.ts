/* ======================================
   HTML ELEMENT
====================================== */

export type HtmlElement =
  /* Content */
  | "a"
  | "code"
  | "pre"

  /* Text */
  | "span"
  | "p"
  | "strong"
  | "small"
  | "em"
  | "label"

  /* Headings */
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"

  /* Lists */
  | "ul"
  | "ol"
  | "li"

  /* Layout / Structure */
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "main"
  | "nav"
  | "aside"

  /* Interactive */
  | "button";