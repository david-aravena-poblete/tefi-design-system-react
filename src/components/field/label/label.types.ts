import type { LabelHTMLAttributes, ReactNode,} from "react";
  
  /* ======================================
     LABEL SIZE
  ====================================== */
  
  export type LabelSize =
    | "sm"
    | "md"
    | "lg";
  
  /* ======================================
     LABEL PROPS
  ====================================== */
  
  export interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement> {
  
    size?: LabelSize;
  
    required?: boolean;
  
    children?: ReactNode;
  }