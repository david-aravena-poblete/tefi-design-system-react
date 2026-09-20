/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { interaction } from "@/laboratory/capabilities/interaction";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";

import { Control } from "@/primitives/control";

import { useRadioGroup } from "@/components/selection/radio/radio-group/radio-group.context";

import type { InteractionProps } from "@/laboratory/capabilities/interaction";
import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";

import type { RadioProps } from "./radio.types";


/* ======================================
   RADIO
====================================== */

export function Radio({
  value,

  checked: checkedProp,

  defaultChecked = false,

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

  const group = useRadioGroup();

  /* ======================================
     INTERNAL STATE
  ====================================== */

  const [internalChecked, setInternalChecked] = useState(
    defaultChecked,
  );

  /* ======================================
     CONTROLLED
  ====================================== */

  const isControlled = checkedProp !== undefined;

  /* ======================================
     DERIVED
  ====================================== */

  const checked = group
    ? value !== undefined
      ? group.value === String(value)
      : false
    : isControlled
      ? checkedProp
      : internalChecked;

  const disabled =
    disabledProp ??
    group?.disabled ??
    false;

  /* ======================================
     SIZE
  ====================================== */

  const sizeMap = {
    sm: {
      control: "16",
      dot: "8",
    },

    md: {
      control: "20",
      dot: "10",
    },

    lg: {
      control: "24",
      dot: "12",
    },
  } as const;

  const currentSize = sizeMap[size];

  /* ======================================
     RADIO
  ====================================== */

  const radioLayout: LayoutProps = {
    display: "flex",
    align: "center",
    justify: "center",
    width: currentSize.control,
    height: currentSize.control,
  };

  const radioSurface: SurfaceProps = {
    background: "transparent",
    border: checked
      ? "primary"
      : "default",
    borderWidth: "2",
    borderStyle: "solid",
    radius: "full",
  };

  const radioInteraction: InteractionProps = {
    transition: "fast",
    disabled,
  };

  const radioClassName = createClassName(
    layout(radioLayout),
    surface(radioSurface),
    interaction(radioInteraction),
  );

  /* ======================================
     DOT
  ====================================== */

  const dotLayout: LayoutProps = {
    display: "flex",
    width: currentSize.dot,
    height: currentSize.dot,
  };

  const dotSurface: SurfaceProps = {
    background: "primary",
    radius: "full",
  };

  const dotClassName = createClassName(
    layout(dotLayout),
    surface(dotSurface),
  );

  /* ======================================
     CHANGE
  ====================================== */

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!group && !isControlled) {
      setInternalChecked(event.target.checked);
    }

    if (!group) {
      onChange?.(event);
      return;
    }

    group.onChange?.(String(value));
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Control
      type="radio"
      checked={checked}
      disabled={disabled}
      className={className}
      onChange={handleChange}
      value={value}
      name={group?.name}
      renderControl={() => (
        <span className={radioClassName}>
          {checked && (
            <span className={dotClassName} />
          )}
        </span>
      )}
      {...rest}
    >
      {children}
    </Control>
  );
}