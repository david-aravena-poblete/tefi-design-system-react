/* ======================================
   IMPORTS
====================================== */

import type {
    ElementType,
  } from "react";
  
  import "./heading.css";
  
  import type {
    HeadingProps,
  } from "./heading.types";
  
  /* ======================================
     HEADING
  ====================================== */
  
  export function Heading({
    children,
  
    level = 1,
  
    className = "",
  
    ...props
  }: HeadingProps) {
  
    /* ======================================
       SAFE LEVEL
    ====================================== */
  
    const safeLevel =
      level >= 1 &&
      level <= 6
        ? level
        : 1;
  
    /* ======================================
       TAG
    ====================================== */
  
    const Tag =
      `h${safeLevel}` as ElementType;
  
    /* ======================================
       CLASSES
    ====================================== */
  
    const classes = [
      "heading",
  
      `heading-${safeLevel}`,
  
      className,
    ]
      .filter(Boolean)
      .join(" ");
  
    /* ======================================
       RENDER
    ====================================== */
  
    return (
      <Tag
        className={classes}
  
        {...props}
      >
        {children}
      </Tag>
    );
  }