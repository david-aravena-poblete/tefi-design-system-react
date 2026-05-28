/* ======================================
   IMPORTS
====================================== */

import "./switch.css";

import { Control } from "../../../primitives/control";

import type { SwitchProps,} from "./switch.types";

/* ======================================
   SWITCH
====================================== */

export function Switch({
  state = "default",

  size = "md",

  children,

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

          <span className="switch__thumb" />

        </span>
      )}

      {...rest}
    >
      {children}
    </Control>
  );
}