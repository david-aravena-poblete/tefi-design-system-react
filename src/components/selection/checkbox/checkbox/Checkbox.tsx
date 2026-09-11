import { useState } from "react";

import { createClassName } from "@/laboratory/create-class-name";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { interaction } from "@/laboratory/capabilities/interaction";

import { Control } from "@/primitives/control";

import { useCheckboxGroup } from "@/components/selection/checkbox/checkbox-group/checkbox-group.context";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { InteractionProps } from "@/laboratory/capabilities/interaction";
import type { CheckboxProps } from "./checkbox.types";

export function Checkbox({
  value,
  size = "md",
  disabled: disabledProp,
  children,
  className = "",
  onChange,
  ...rest
}: CheckboxProps) {
  const group = useCheckboxGroup();

  const [internalChecked, setInternalChecked] = useState(
    rest.defaultChecked ?? false,
  );

  const isControlled = rest.checked !== undefined;

  const groupValue = Array.isArray(group?.value)
    ? group.value
    : [];

  const checked = group
    ? value !== undefined
      ? groupValue.includes(String(value))
      : false
    : isControlled
      ? rest.checked
      : internalChecked;

  const disabled = disabledProp ?? group?.disabled ?? false;

  const sizeMap = {
    sm: { control: "16", icon: "12" },
    md: { control: "20", icon: "16" },
    lg: { control: "24", icon: "20" },
  } as const;

  const currentSize = sizeMap[size];

  const checkboxLayout: LayoutProps = {
    display: "flex",
    align: "center",
    justify: "center",
    width: currentSize.control,
    height: currentSize.control,
  };

  const checkboxSurface: SurfaceProps = {
    background: checked ? "blue" : "transparent",
    border: checked ? "blue" : "gray",
    borderWidth: "2",
    borderStyle: "solid",
    radius: "md",
  };

  const checkboxInteraction: InteractionProps = {
    transition: "fast",
    disabled,
  };

  const checkboxClassName = createClassName(
    layout(checkboxLayout),
    surface(checkboxSurface),
    interaction(checkboxInteraction),
  );

  const iconLayout: LayoutProps = {
    width: currentSize.icon,
    height: currentSize.icon,
  };

  const iconSurface: SurfaceProps = {
    text: "white",
  };

  const iconClassName = createClassName(
    layout(iconLayout),
    surface(iconSurface),
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!group) {
      if (!isControlled) {
        setInternalChecked(event.target.checked);
      }

      onChange?.(event);
      return;
    }

    if (event.target.checked) {
      group.onChange?.([
        ...groupValue,
        String(value),
      ]);
      return;
    }

    group.onChange?.(
      groupValue.filter(
        (item) => item !== String(value),
      ),
    );
  };

  return (
    <Control
      type="checkbox"
      checked={checked}
      disabled={disabled}
      className={className}
      onChange={handleChange}
      value={value}
      renderControl={() => (
        <span className={checkboxClassName}>
          {checked && (
            <svg
              viewBox="0 0 16 16"
              className={iconClassName}
              aria-hidden="true"
            >
              <path
                d="M3 8L6.5 11.5L13 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      )}
      {...rest}
    >
      {children}
    </Control>
  );
}