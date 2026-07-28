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
 
 export type ButtonVariant =
   | "primary"
   | "secondary"
   | "danger"
   | "ghost"
   | "link";

 /* ======================================
    PROPS
 ====================================== */
 
 export interface ButtonProps
   extends ComponentPropsWithoutRef<"button"> {
 
   size?: ButtonSize;
   variant?: ButtonVariant;
 }