/* ======================================
   IMPORTS
====================================== */

import type {
    Background,
    Border,
    Text,
  } from "./surface.types";
  
  /* ======================================
     PRESS
  ====================================== */
  
  export type Press = "move";
  
  /* ======================================
     TRANSITION
  ====================================== */
  
  export type Transition = "fast";
  
  /* ======================================
     HOVER
  ====================================== */
  
  export interface Hover {
    background?: Background;
  
    border?: Border;
  
    text?: Text;
  }