import type {
   InputHTMLAttributes,
   ReactNode,
 } from "react";
 
 /* ======================================
    SWITCH SIZE
 ====================================== */
 
 export type SwitchSize = "sm" | "md" | "lg";
 
 /* ======================================
    SWITCH PROPS
 ====================================== */
 
 export interface SwitchProps
   extends Omit<
     InputHTMLAttributes<HTMLInputElement>,
     "size" | "type"
   > {
   size?: SwitchSize;
 
   thumb?: ReactNode;
 
   children?: ReactNode;
 }