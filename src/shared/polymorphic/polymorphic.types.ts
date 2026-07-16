/* ======================================
   IMPORTS
====================================== */

import type {
    ComponentPropsWithoutRef,
    ElementType,
  } from "react";
  
  /* ======================================
     AS PROP
  ====================================== */
  
  export interface AsProp<
    T extends ElementType,
  > {
  
    as?: T;
  
  }
  
  /* ======================================
     POLYMORPHIC PROPS
  ====================================== */
  
  export type PolymorphicProps<
    T extends ElementType,
    Props = {},
  > =
    Props &
    AsProp<T> &
    Omit<
      ComponentPropsWithoutRef<T>,
      keyof Props | "as"
    >;