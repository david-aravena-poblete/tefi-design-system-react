/* ======================================
   IMPORTS
====================================== */

import { createContext, useContext, } from "react";
import type { FormFieldState } from "./form-field.types";
  
  /* ======================================
     CONTEXT TYPES
  ====================================== */
  
  interface FormFieldContextValue {
    id?: string;
  
    helperTextId?: string;
  
    errorMessageId?: string;
  
    describedBy?: string;
  
    state?: FormFieldState;
  
    disabled?: boolean;
  }
  
  /* ======================================
     CONTEXT
  ====================================== */
  
  const FormFieldContext =
    createContext<
      FormFieldContextValue | null
    >(null);
  
  /* ======================================
     HOOK
  ====================================== */
  
  export function useFormField() {
    return useContext(
      FormFieldContext
    );
  }
  
  /* ======================================
     PROVIDER
  ====================================== */
  
  export const FormFieldProvider =
    FormFieldContext.Provider;