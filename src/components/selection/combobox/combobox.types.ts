/* ======================================
   VARIANT
====================================== */

export type ComboboxVariant = "single" | "multiple";

/* ======================================
   OPTION
====================================== */

export interface ComboboxOption {
  label: string;

  value: string;
}

/* ======================================
   VALUE
====================================== */

export type ComboboxValue = string | string[];

/* ======================================
   PROPS
====================================== */

export interface ComboboxProps {
  /* ======================================
     DATA
  ====================================== */

  options?: ComboboxOption[];

  value?: ComboboxValue;

  defaultValue?: ComboboxValue;

  /* ======================================
     CONFIG
  ====================================== */

  placeholder?: string;

  variant?: ComboboxVariant;

  inputSize?: "sm" | "md" | "lg";

  state?: "default" | "error" | "success" | "warning";

  disabled?: boolean;

  clearable?: boolean;

  /* ======================================
     EVENTS
  ====================================== */

  onChange?: (value: ComboboxValue) => void;

  /* ======================================
     STYLES
  ====================================== */

  className?: string;
}
