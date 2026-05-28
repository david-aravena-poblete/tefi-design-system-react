/* ======================================
   IMPORTS
====================================== */

import { useId } from "react";
import "./radio-group.css";
import { RadioGroupProvider } from "./radio-group.context";
import type { RadioGroupProps } from "./radio-group.types";
  
  /* ======================================
     RADIO GROUP
  ====================================== */
  
  export function RadioGroup({
    value,
  
    onChange,
  
    disabled = false,
  
    direction = "column",
  
    gap = "sm",
  
    children,
  }: RadioGroupProps) {
  
    /* ======================================
       IDS
    ====================================== */
  
    const generatedId = useId();
  
    /* ======================================
       CONTEXT
    ====================================== */
  
    const contextValue = {
      value,
  
      onChange,
  
      disabled,
  
      name: generatedId,
    };
  
    /* ======================================
       RENDER
    ====================================== */
  
    return (
      <RadioGroupProvider
        value={contextValue}
      >
        <div
          className={[
            "radio-group",
  
            `radio-group--${direction}`,
          ]
            .filter(Boolean)
            .join(" ")}
  
          data-gap={gap}
        >
          {children}
        </div>
      </RadioGroupProvider>
    );
  }