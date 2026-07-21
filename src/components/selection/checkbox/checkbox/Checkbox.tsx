/* ======================================
   IMPORTS
====================================== */

import "./checkbox.css";
import { Control } from "@/primitives/control";
import { useCheckboxGroup } from "@/components/selection/checkbox/checkbox-group/checkbox-group.context";
import type { CheckboxProps } from "./checkbox.types";

/* ======================================
   CHECKBOX
====================================== */

export function Checkbox({
  value,

  state = "default",

  size = "md",

  disabled: disabledProp,

  children,

  className = "",

  onChange,

  ...rest
}: CheckboxProps) {
  /* ======================================
     GROUP CONTEXT
  ====================================== */

  const group = useCheckboxGroup();

  /* ======================================
     GROUP VALUE
  ====================================== */

  const groupValue = Array.isArray(group?.value) ? group.value : [];

  /* ======================================
     DERIVED
  ====================================== */

  const checked = value !== undefined ? groupValue.includes(String(value)) : undefined;

  const disabled = disabledProp ?? group?.disabled ?? false;

  /* ======================================
     CHANGE
  ====================================== */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!group) {
      onChange?.(event);
      return;
    }

    if (event.target.checked) {
      group.onChange?.([...groupValue, String(value)]);

      return;
    }

    group.onChange?.(groupValue.filter((item) => item !== String(value)));
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Control
      type="checkbox"

      state={state}

      size={size}

      shape="square"

      checked={checked}

      disabled={disabled}

      className={className}

      onChange={handleChange}

      renderControl={() => (
        <span className="checkbox">
          <svg viewBox="0 0 16 16" className="checkbox__icon">
            <path d="M3 8L6.5 11.5L13 5" />
          </svg>
        </span>
      )}

      value={value}

      {...rest}
    >
      {children}
    </Control>
  );
}
