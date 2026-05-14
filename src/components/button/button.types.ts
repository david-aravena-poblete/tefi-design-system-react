import type {
    BUTTON_VARIANTS,
    BUTTON_SIZES,
  } from "./button.constants";
  
  export type ButtonVariant =
    (typeof BUTTON_VARIANTS)[number];
  
  export type ButtonSize =
    (typeof BUTTON_SIZES)[number];