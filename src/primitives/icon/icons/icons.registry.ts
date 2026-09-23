/* ======================================
   IMPORTS
====================================== */

import {
   ArrowLeft,
   ArrowRight,
   Bot,
   ChevronLeft,
   ChevronRight,
   File,
   FileCode,
   Moon,
   Plus,
   Search,
   Sun,
   User,
   X,
 } from "lucide-react";
 
 /* ======================================
    ICON REGISTRY
 ====================================== */
 
 export const iconRegistry = {
   search: Search,
   plus: Plus,
   close: X,
   sun: Sun,
   moon: Moon,
   user: User,
   bot: Bot,
 
   file: File,
   fileCode: FileCode,
 
   arrowLeft: ArrowLeft,
   arrowRight: ArrowRight,
 
   chevronLeft: ChevronLeft,
   chevronRight: ChevronRight,
 };
 
 /* ======================================
    TYPES
 ====================================== */
 
 export type IconName = keyof typeof iconRegistry;
 
 /* ======================================
    CONSTANTS
 ====================================== */
 
 export const ICON_NAMES =
   Object.keys(iconRegistry) as IconName[];