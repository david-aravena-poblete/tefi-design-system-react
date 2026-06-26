import { SIZES } from "../../shared/constants";

const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "ghost",
  "link",
  "danger",
] as const;

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[number];

export type ButtonSize =
  (typeof SIZES)[number];