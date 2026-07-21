/* ======================================
   IMPORTS
====================================== */

import type { WheelEvent } from "react";

import "./number-field.css";

import { Input } from "@/components/input";

import type { NumberFieldProps } from "./number-field.types";

/* ======================================
   NUMBER FIELD
====================================== */

export function NumberField({
  /* ======================================
     TEFI PROPS
  ====================================== */

  allowWheel = false,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: NumberFieldProps) {
  /* ======================================
     EVENTS
  ====================================== */

  const handleWheel = (event: WheelEvent<HTMLInputElement>) => {
    if (allowWheel) {
      return;
    }

    event.currentTarget.blur();
  };

  /* ======================================
     RENDER
  ====================================== */

  return <Input type="number" onWheel={handleWheel} {...rest} />;
}
