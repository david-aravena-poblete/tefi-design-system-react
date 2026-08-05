/* ======================================
   IMPORTS
====================================== */

import type {
   ComponentPropsWithoutRef,
   ReactNode,
 } from "react";
 
 import type { HtmlProps } from "@/laboratory/capabilities/html";
 
 /* ======================================
    TYPES
 ====================================== */
 
 export type ButtonHtml =
   | "button"
   | "a";
 
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
 
 export type ButtonProps<
   T extends ButtonHtml = "button",
 > = {
   children?: ReactNode;
 
   variant?: ButtonVariant;
 
   size?: ButtonSize;
 
   fullWidth?: boolean;
 
   loading?: boolean;
 
   skeleton?: boolean;
 
   startIcon?: ReactNode;
 
   endIcon?: ReactNode;
 } & HtmlProps<T> &
   Omit<
     ComponentPropsWithoutRef<T>,
     "children" | "as"
   >;