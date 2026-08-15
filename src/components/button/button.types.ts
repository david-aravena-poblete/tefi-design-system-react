/* ======================================
   IMPORTS
====================================== */

import type {
   ComponentPropsWithoutRef,
   ReactNode,
 } from "react";
 
 /* ======================================
    TYPES
 ====================================== */
 
 export type ButtonVariant =
   | "primary"
   | "secondary"
   | "ghost"
   | "link"
   | "danger";
 
 export type ButtonSize =
   | "sm"
   | "md";
 
 /* ======================================
    BUTTON PROPS
 ====================================== */
 
 export type ButtonProps = {
   variant?: ButtonVariant;
 
   size?: ButtonSize;
 
   fullWidth?: boolean;
 
   loading?: boolean;
 
   skeleton?: boolean;
 
   startIcon?: ReactNode;
 
   endIcon?: ReactNode;
 } & ComponentPropsWithoutRef<"button">;