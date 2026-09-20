/* ======================================
   IMPORTS
====================================== */

import type {
   Hover,
   Press,
   Transition,
 } from "@/laboratory/types";
 
 
 /* ======================================
    INTERACTION PROPS
 ====================================== */
 
 export interface InteractionProps {
   hover?: Hover;
 
   press?: Press;
 
   transition?: Transition;
 
   disabled?: boolean;
 
   dragScroll?: boolean;
 }