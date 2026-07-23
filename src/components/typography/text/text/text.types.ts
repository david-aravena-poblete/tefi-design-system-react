/* ======================================
   IMPORTS
====================================== */

import type { FontSize } from "@/foundations/design-system.types";

import type { As, PolymorphicProps } from "@/foundations/contracts/polymorphic.contract";

/* ======================================
   TYPES
====================================== */

export type TextVariant = "default" | "secondary" | "muted" | "inverse";

/* ======================================
   PROPS
====================================== */

export interface TextOwnProps {
   size?: FontSize;
 
   variant?: TextVariant;
 
   skeleton?: boolean;
 
   expandable?: boolean;
 
   lines?: number;
 
   expandLabel?: string;
 
   collapseLabel?: string;
 }
 
 export type TextProps<T extends As = "p"> = PolymorphicProps<T, TextOwnProps>;