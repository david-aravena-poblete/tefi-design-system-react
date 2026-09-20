/* ======================================
   IMPORTS
====================================== */

import type {
   ComponentPropsWithoutRef,
   JSX,
 } from "react";
 
 
 /* ======================================
    TYPES
 ====================================== */
 
 export type CardVariant =
   | "outlined"
   | "elevated"
   | "flat";
 
 export type CardSize =
   | "sm"
   | "md"
   | "lg";
 
 export type CardSectionProps =
   ComponentPropsWithoutRef<"div">;
 
 
 /* ======================================
    PROPS
 ====================================== */
 
 export interface CardProps
   extends ComponentPropsWithoutRef<"div"> {
   variant?: CardVariant;
 
   size?: CardSize;
 }
 
 
 /* ======================================
    COMPOUND COMPONENT
 ====================================== */
 
 export interface CardComponent {
   (
     props: CardProps
   ): JSX.Element;
 
   Header: (
     props: CardSectionProps
   ) => JSX.Element;
 
   Media: (
     props: CardSectionProps
   ) => JSX.Element;
 
   Body: (
     props: CardSectionProps
   ) => JSX.Element;
 
   Footer: (
     props: CardSectionProps
   ) => JSX.Element;
 }