import type { TextareaHTMLAttributes } from "react";
  
  import type { FieldState } from "../../../primitives/field"; 
  import { SIZES } from "../../../shared/constants";
  
  /* ======================================
     TEXTAREA SIZE
  ====================================== */
  
  export type TextareaSize =
    typeof SIZES[number];
  
  /* ======================================
     TEXTAREA PROPS
  ====================================== */
  
  export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  
    textareaSize?: TextareaSize;
  
    state?: FieldState;
  
    loading?: boolean;
  }