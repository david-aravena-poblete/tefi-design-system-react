/* ======================================
IMPORTS
====================================== */

import {
    useState,
    type CSSProperties,
    } from "react";
    
    import "./read-more.css";
    
    import { Text } from "../text";
    
    import type {
    ReadMoreProps,
    } from "./read-more.types";
    
    /* ======================================
    READ MORE
    ====================================== */
    
    export function ReadMore({
    children,
    
    lines = 4,
    
    expandLabel = "Ver más",
    
    collapseLabel = "Ver menos",
    
    className = "",
    
    ...props
    }: ReadMoreProps) {
    
    const [expanded, setExpanded] =
    useState(false);
    
    const style: CSSProperties =
    !expanded
    ? {
    WebkitLineClamp: lines,
    }
    : {};
    
    return (
    
    <div
      className={[
        "read-more",
    
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
    
      <Text
        className={
          !expanded
            ? "read-more__content--clamp"
            : ""
        }
        style={style}
      >
        {children}
      </Text>
    
      <button
        type="button"
        className="read-more__toggle"
        onClick={() =>
          setExpanded(
            !expanded
          )
        }
      >
        {expanded
          ? collapseLabel
          : expandLabel}
      </button>
    
    </div>
    
    );
    }