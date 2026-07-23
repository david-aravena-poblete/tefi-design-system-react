import type {
    ComponentPropsWithoutRef,
    ReactNode,
  } from "react";
  
  import type {
    Align,
    Justify,
    Spacing,
  } from "@/foundations/design-system.types";
  
  export interface BarProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
    direction?: "horizontal" | "vertical";
    justify?: Justify;
    align?: Align;
    gap?: Spacing;
  }