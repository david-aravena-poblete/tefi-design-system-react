import clsx from "clsx";

import "./divider.css";

import type {
  DividerProps,
} from "./divider.types";

/* ======================================
   DIVIDER
====================================== */

export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {

  return (

    <hr
      className={clsx(
        "divider",
        `divider--${orientation}`,
        className,
      )}
      {...props}
    />

  );

}