/* ======================================
IMPORTS
====================================== */

import {
    useState,
    type CSSProperties,
    } from "react";
    
    import "./expandable-text.css";
    
    import { Text } from "../text";
    
    import type {
    ExpandableTextProps,
    } from "./expandable-text.types";
    
    /* ======================================
    EXPANDABLE TEXT
    ====================================== */
    
    export function ExpandableText({
    children,
    
    lines = 4,
    
    expandLabel = "Ver más",
    
    collapseLabel = "Ver menos",
    
    className = "",
    
    ...props
    }: ExpandableTextProps) {
    
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
        "expandable-text",
    
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
    
      <Text
        className={
          !expanded
            ? "expandable-text__content--clamp"
            : ""
        }
        style={style}
      >
        {children}
      </Text>
    
      <button
        type="button"
        className="expandable-text__toggle"
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