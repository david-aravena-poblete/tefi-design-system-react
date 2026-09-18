/* ======================================
   IMPORTS
====================================== */

import type { ReactElement } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";
import { interaction } from "@/laboratory/capabilities/interaction";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { InteractionProps } from "@/laboratory/capabilities/interaction";

import type { DotsProps } from "./dots.types";

/* ======================================
   DEFAULTS
====================================== */

const defaultLayout: LayoutProps = {
  display: "flex",
  align: "center",
  justify: "center",
  between: "sm",
};

const defaultDotLayout: LayoutProps = {
  display: "flex",
  align: "center",
  justify: "center",
  width: "8",
  height: "8",
};

const defaultDotSurface: SurfaceProps = {
  background: "gray-soft",
  radius: "full",
};

const activeDotSurface: SurfaceProps = {
  background: "blue",
  radius: "full",
};

const defaultDotInteraction: InteractionProps = {
  press: "move",
  transition: "fast",
};

/* ======================================
   DOTS
====================================== */

export function Dots({
  count,
  active,
  onChange,

  className,

  ...props
}: DotsProps): ReactElement {
  /* ======================================
     CLASS NAME
  ====================================== */

  const componentClassName = createClassName(
    "dots",
    layout(defaultLayout),
    className,
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      {...props}
      className={componentClassName}
    >
      {Array.from({ length: count }, (_, index) => {
        const isActive = index === active;

        const dotSurface = isActive
          ? activeDotSurface
          : defaultDotSurface;

        const dotClassName = createClassName(
          layout(defaultDotLayout),
          surface(dotSurface),
          interaction(defaultDotInteraction),
        );

        return (
          <button
            key={index}
            type="button"
            aria-label={`Ir al elemento ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => {
              onChange(index);
            }}
            className={dotClassName}
          />
        );
      })}
    </div>
  );
}