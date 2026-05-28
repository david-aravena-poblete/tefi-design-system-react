import type { TextareaHTMLAttributes } from "react";
  
  import type { FieldState } from "../../../primitives/field"; 
  import { FIELD_SIZES } from "../../../shared/field.constants";
  
  /* ======================================
     TEXTAREA SIZE
  ====================================== */
  
  export type TextareaSize =
    typeof FIELD_SIZES[number];
  
  /* ======================================
     TEXTAREA PROPS
  ====================================== */
  
  export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  
    textareaSize?: TextareaSize;
  
    state?: FieldState;
  
    loading?: boolean;
  }