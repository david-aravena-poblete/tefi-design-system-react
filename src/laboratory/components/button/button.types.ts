/* ======================================
   IMPORTS
====================================== */

import type {
    ComponentPropsWithoutRef,
    ReactNode,
  } from "react";
  
  import type { HtmlProps } from "@/laboratory/capabilities/html";
  import type { InteractionProps } from "@/laboratory/capabilities/interaction";
  import type { LayoutProps } from "@/laboratory/capabilities/layout";
  import type { SurfaceProps } from "@/laboratory/capabilities/surface";
  import type { TypographyProps } from "@/laboratory/capabilities/typography";
  
  import type { HtmlElement } from "@/laboratory/types";
  
  /* ======================================
     BUTTON PROPS
  ====================================== */
  
  export type ButtonProps<
    T extends HtmlElement = "button",
  > = {
    children?: ReactNode;
  
    layout?: LayoutProps;
  
    typography?: TypographyProps;
  
    surface?: SurfaceProps;
  
    interaction?: InteractionProps;
  } & HtmlProps &
    Omit<
      ComponentPropsWithoutRef<T>,
      "children" | "as"
    >;