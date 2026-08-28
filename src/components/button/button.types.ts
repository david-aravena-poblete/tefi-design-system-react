/* ======================================
   IMPORTS
====================================== */

import type {
   ComponentPropsWithoutRef,
   ReactNode,
 } from "react";
 
 import type { Radius } from "@/laboratory/types";
 
 /* ======================================
    TYPES
 ====================================== */
 
 export type ButtonVariant =
   | "primary"
   | "secondary"
   | "ghost"
   | "link"
   | "danger"
   | "overlay";
 
 export type ButtonSize = "sm" | "md";
 
 /* ======================================
    BUTTON PROPS
 ====================================== */
 
 export type ButtonProps = {
   variant?: ButtonVariant;
 
   size?: ButtonSize;
 
   radius?: Radius;
 
   fullWidth?: boolean;
 
   loading?: boolean;
 
   skeleton?: boolean;
 
   startIcon?: ReactNode;
 
   endIcon?: ReactNode;
 } & ComponentPropsWithoutRef<"button">;