/* ======================================
   IMPORTS
====================================== */

import React, {
  useId,
} from "react";

import "./control.css";

import type {
  ControlProps,
} from "./control.types";

/* ======================================
   CONTROL
====================================== */

export function Control({
  id,

  type = "checkbox",

  name,
  value,

  checked,
  defaultChecked,

  onChange,

  disabled = false,

  state = "default",

  shape = "square",

  size = "md",

  renderControl,

  children,

  className = "",
}: ControlProps) {

  /* ======================================
     IDS
  ====================================== */

  const generatedId = useId();

  const inputId =
    id ?? generatedId;

  /* ======================================
     CHANGE
  ====================================== */

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (disabled) return;

    onChange?.(event);
  };

  /* ======================================
     INPUT PROPS
  ====================================== */

  const inputProps:
    React.InputHTMLAttributes<HTMLInputElement> = {

    id: inputId,

    type,

    name,

    value,

    onChange: handleChange,

    disabled,

    className: "control__input",
  };

  /* ======================================
     CONTROLLED
  ====================================== */

  if (checked !== undefined) {
    inputProps.checked = checked;
  }

  /* ======================================
     UNCONTROLLED
  ====================================== */

  if (defaultChecked !== undefined) {
    inputProps.defaultChecked =
      defaultChecked;
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <label
      htmlFor={inputId}

      className={[
        "control",
        className,
      ]
        .filter(Boolean)
        .join(" ")}

      data-state={state}

      data-disabled={
        disabled
          ? "true"
          : undefined
      }

      data-shape={shape}

      data-size={size}
    >

      {/* VISUAL */}

      <span className="control__visual">

        <input {...inputProps} />

        <span className="control__box">
          {renderControl?.()}
        </span>

      </span>

      {/* LABEL */}

      {children && (
        <span className="control__label">
          {children}
        </span>
      )}

    </label>
  );
}