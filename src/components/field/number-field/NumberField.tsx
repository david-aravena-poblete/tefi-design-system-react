/* ======================================
   IMPORTS
====================================== */

import "./number-field.css";

import { Input }
  from "../input";

import type {
  NumberFieldProps,
} from "./number-field.types";

/* ======================================
   NUMBER FIELD
====================================== */

export function NumberField({
  allowWheel = false,

  ...rest
}: NumberFieldProps) {

  /* ======================================
     WHEEL
  ====================================== */

  const handleWheel = (
    event:
      React.WheelEvent<HTMLInputElement>
  ) => {

    if (allowWheel) return;

    event.currentTarget.blur();
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Input
      type="number"

      onWheel={handleWheel}

      {...rest}
    />
  );
}