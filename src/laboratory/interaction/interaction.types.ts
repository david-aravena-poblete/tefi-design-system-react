/* ======================================
   IMPORTS
====================================== */

import type {
   Border,
   Color,
 } from "../tokens";
 
 /* ======================================
    TYPES
 ====================================== */
 
 export type Press = "move";
 export type Transition = "fast";
 
 /* ======================================
    COMPOSITION
 ====================================== */
 
 export interface Composition {
   background?: Color;
   border?: Border;
   text?: Color;
 }
 
 /* ======================================
    INTERACTION PROPS
 ====================================== */
 
 export interface InteractionProps {
   hover?: Composition;
   press?: Press;
   focusRing?: Color;
   transition?: Transition;
 }