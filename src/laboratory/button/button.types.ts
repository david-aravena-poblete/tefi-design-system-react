/* ======================================
   IMPORTS
====================================== */

import type {
   ComponentPropsWithoutRef,
 } from "react";
 
 /* ======================================
    TYPES
 ====================================== */
 
 export type ButtonSize =
   | "sm"
   | "md"
   | "lg";
 
 /* ======================================
    PROPS
 ====================================== */
 
 export interface ButtonProps
   extends ComponentPropsWithoutRef<"button"> {
 
   size?: ButtonSize;
 }