/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { html } from "@/laboratory/capabilities/html";
import { layout } from "@/laboratory/capabilities/layout";
import { surface } from "@/laboratory/capabilities/surface";

import type { LayoutProps } from "@/laboratory/capabilities/layout";
import type { SurfaceProps } from "@/laboratory/capabilities/surface";

import type { SpinnerHtml, SpinnerProps, SpinnerSize } from "./spinner.types";

import "./spinner.css";

/* ======================================
   SPINNER DEFAULT
====================================== */

const defaultHtml: SpinnerHtml = "div";

const defaultLayout: LayoutProps = {
  width: "24",
  height: "24",
};

const defaultSurface: SurfaceProps = {
  text: "blue",
  border: "gray",
  borderWidth: "2",
  borderStyle: "solid",
  radius: "full",
};

/* ======================================
   SPINNER SIZES
====================================== */

const layoutBySize = {
  sm: {
    width: "16",
    height: "16",
  },

  md: {},

  lg: {
    width: "32",
    height: "32",
  },
} satisfies Record<SpinnerSize, LayoutProps>;

/* ======================================
   SPINNER
====================================== */

export function Spinner<T extends SpinnerHtml = "div">({
  as,

  size = "md",

  className,
  ...props
}: SpinnerProps<T>) {
  const Element = html({
    as: as ?? defaultHtml,
  }) as ElementType;

  const spinnerLayout = {
    ...defaultLayout,
    ...layoutBySize[size],
  };

  const spinnerSurface = {
    ...defaultSurface,
  };

  const componentClassName = createClassName(
    "tefi-spinner",
    layout(spinnerLayout),
    surface(spinnerSurface),
    className,
  );

  return <Element {...props} className={componentClassName} role="status" aria-label="Loading" />;
}
