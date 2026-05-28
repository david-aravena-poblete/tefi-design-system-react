/* ======================================
   IMPORTS
====================================== */

import "./radio.css";
import { Control } from "../../../../primitives/control";
import { useRadioGroup } from "../radio-group/radio-group.context";
import type { RadioProps } from "./radio.types";

/* ======================================
   RADIO
====================================== */

export function Radio({
  value,

  state = "default",

  size = "md",

  disabled: disabledProp,

  children,

  className = "",

  onChange,

  ...rest
}: RadioProps) {

  /* ======================================
     GROUP CONTEXT
  ====================================== */

  const group =
    useRadioGroup();

  /* ======================================
     DERIVED
  ====================================== */

  const checked =
    value !== undefined
      ? group?.value === String(value)
      : undefined;

  const disabled =
    disabledProp ??
    group?.disabled ??
    false;

  /* ======================================
     CHANGE
  ====================================== */

  const handleChange = (
    event:
      React.ChangeEvent<HTMLInputElement>
  ) => {

    if (!group) {
      onChange?.(event);
      return;
    }

    group.onChange?.(
      String(value)
    );
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Control
      type="radio"

      state={state}

      size={size}

      shape="circle"

      checked={checked}

      disabled={disabled}

      className={className}

      onChange={handleChange}

      value={value}

      name={group?.name}

      renderControl={() => (
        <span className="radio">

          <span className="radio__dot" />

        </span>
      )}

      {...rest}
    >
      {children}
    </Control>
  );
}