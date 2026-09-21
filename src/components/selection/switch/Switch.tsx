/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { interaction } from "@/laboratory/capabilities/interaction";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";

import { Control } from "@/primitives/control";

import type { InteractionProps } from "@/laboratory/capabilities/interaction";
import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";

import type { SwitchProps } from "./switch.types";


/* ======================================
   SWITCH
====================================== */

export function Switch({
  checked,
  size = "md",
  thumb,
  children,
  className = "",
  ...rest
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(
    rest.defaultChecked ?? false,
  );

  const isControlled =
    checked !== undefined;

  const isChecked = isControlled
    ? checked
    : internalChecked;

  const sizeMap = {
    sm: {
      width: "32",
      height: "16",
      thumb: "8",
    },

    md: {
      width: "40",
      height: "20",
      thumb: "12",
    },

    lg: {
      width: "48",
      height: "24",
      thumb: "16",
    },
  } as const;

  const currentSize = sizeMap[size];

  /* ======================================
     SWITCH LAYOUT
  ====================================== */

  const switchLayout: LayoutProps = {
    display: "flex",
    align: "center",
    justify: isChecked
      ? "end"
      : "start",
    inside: "xs",
    width: currentSize.width,
    height: currentSize.height,
  };

  /* ======================================
     SWITCH SURFACE
  ====================================== */

  const switchSurface: SurfaceProps = {
    background: isChecked
      ? "primary"
      : "surface-tertiary",
    radius: "full",
  };

  /* ======================================
     SWITCH INTERACTION
  ====================================== */

  const switchInteraction: InteractionProps = {
    transition: "fast",
    disabled: rest.disabled,
  };

  const switchClassName = createClassName(
    layout(switchLayout),
    surface(switchSurface),
    interaction(switchInteraction),
  );

  /* ======================================
     THUMB LAYOUT
  ====================================== */

  const thumbLayout: LayoutProps = {
    display: "flex",
    align: "center",
    justify: "center",
    width: currentSize.thumb,
    height: currentSize.thumb,
  };

  /* ======================================
     THUMB SURFACE
  ====================================== */

  const thumbSurface: SurfaceProps = {
    text: "link",
    radius: "full",
  };

  const thumbClassName = createClassName(
    layout(thumbLayout),
    surface(thumbSurface),
  );

  /* ======================================
     CHANGE
  ====================================== */

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!isControlled) {
      setInternalChecked(
        event.target.checked,
      );
    }

    rest.onChange?.(event);
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Control
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
      className={className}
      renderControl={() => (
        <span className={switchClassName}>
          <span
            className={thumbClassName}
            style={{
              backgroundColor: "var(--color-white)",
            }}
          >
            {thumb}
          </span>
        </span>
      )}
      {...rest}
    >
      {children}
    </Control>
  );
}