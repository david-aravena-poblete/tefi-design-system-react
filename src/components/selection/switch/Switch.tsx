/* ======================================
   IMPORTS
====================================== */

import "./switch.css";

import { Control } from "@/primitives/control";

import type {
  SwitchProps,
} from "./switch.types";

/* ======================================
   SWITCH
====================================== */

export function Switch({
  state = "default",

  size = "md",

  children,

  icon,

  className = "",

  ...rest
}: SwitchProps) {

  return (
    <Control
      type="checkbox"

      state={state}

      size={size}

      shape="pill"

      className={className}

      renderControl={() => (

        <span className="switch">

          <span className="switch__thumb">

            {icon}

          </span>

        </span>

      )}

      {...rest}
    >
      {children}
    </Control>
  );
}