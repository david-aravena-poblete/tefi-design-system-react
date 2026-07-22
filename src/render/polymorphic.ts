/* ======================================
   IMPORTS
====================================== */

import {
    createElement,
    type ComponentPropsWithoutRef,
    type ElementType,
    type ReactElement,
  } from "react";
  
  /* ======================================
     RENDER
  ====================================== */
  
  export function renderPolymorphic<
    T extends ElementType,
  >(
    component: T,
    props: ComponentPropsWithoutRef<T>,
  ): ReactElement {
    return createElement(
      component,
      props,
    );
  }