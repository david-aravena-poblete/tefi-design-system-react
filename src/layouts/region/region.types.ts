import type {
    ComponentPropsWithoutRef,
    ReactNode,
  } from "react";
  
  /* ======================================
      PUBLIC PROPS
  ====================================== */
  
  export interface RegionProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
  }