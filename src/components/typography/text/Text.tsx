/* ======================================
IMPORTS
====================================== */

import type {
  ElementType,
  } from "react";
  
  import "./text.css";
  
  import type {
  TextProps,
  } from "./text.types";
  
  /* ======================================
  TEXT
  ====================================== */
  
  export function Text({
  children,
  
  as = "p",
  
  size = "md",
  
  variant = "default",
  
  className = "",
  
  ...props
  }: TextProps) {
  
  const Tag =
  as as ElementType;
  
  const classes = [
  "text",
  
  `text--${size}`,
  
  `text--${variant}`,
  
  className,
  
  ]
  .filter(Boolean)
  .join(" ");
  
  return (
  
  <Tag
    className={classes}
    {...props}
  >
    {children}
  </Tag>
  
  );
  }