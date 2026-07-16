/* ======================================
   IMPORTS
====================================== */

import clsx from "clsx";

import "./label.css";

import type {
  LabelProps,
} from "./label.types";

/* ======================================
   LABEL
====================================== */

export function Label({

  /* ======================================
     TEFI PROPS
  ====================================== */

  size = "md",

  required = false,

  /* ======================================
     REACT PROPS
  ====================================== */

  children,

  className,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest

}: LabelProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = clsx(

    "label",

    `label--${size}`,

    className,

  );

  /* ======================================
     RENDER
  ====================================== */

  return (

    <label
      className={classes}
      {...rest}
    >

      <span className="label__text">

        {children}

      </span>

      {required && (

        <span
          className="label__required"
          aria-hidden="true"
        >

          *

        </span>

      )}

    </label>

  );

}