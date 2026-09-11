import { useState } from "react";

import { createClassName } from "@/laboratory/create-class-name";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { interaction } from "@/laboratory/capabilities/interaction";

import { Control } from "@/primitives/control";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { InteractionProps } from "@/laboratory/capabilities/interaction";
import type { SwitchProps } from "./switch.types";

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

  const isControlled = checked !== undefined;

  const isChecked = isControlled
    ? checked
    : internalChecked;

  const sizeMap = {
    sm: { width: "32", height: "16", thumb: "8" },
    md: { width: "40", height: "20", thumb: "12" },
    lg: { width: "48", height: "24", thumb: "16" },
  } as const;

  const currentSize = sizeMap[size];

  const switchLayout: LayoutProps = {
    display: "flex",
    align: "center",
    justify: isChecked ? "end" : "start",
    inside: "xs",
    width: currentSize.width,
    height: currentSize.height,
  };

  const switchSurface: SurfaceProps = {
    background: isChecked ? "blue" : "gray",
    radius: "full",
  };

  const switchInteraction: InteractionProps = {
    transition: "fast",
    disabled: rest.disabled,
  };

  const switchClassName = createClassName(
    layout(switchLayout),
    surface(switchSurface),
    interaction(switchInteraction),
  );

  const thumbLayout: LayoutProps = {
    display: "flex",
    align: "center",
    justify: "center",
    width: currentSize.thumb,
    height: currentSize.thumb,
  };

  const thumbSurface: SurfaceProps = {
    background: "white",
    text: "blue",
    radius: "full",
  };

  const thumbClassName = createClassName(
    layout(thumbLayout),
    surface(thumbSurface),
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }

    rest.onChange?.(event);
  };

  return (
    <Control
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
      className={className}
      renderControl={() => (
        <span className={switchClassName}>
          <span className={thumbClassName}>
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