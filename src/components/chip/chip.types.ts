import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { SIZES } from "../../shared/constants";

export type ChipSize =
  (typeof SIZES)[number];

export interface ChipProps
  extends HTMLAttributes<HTMLDivElement> {

  children?: ReactNode;

  startIcon?: ReactNode;

  endIcon?: ReactNode;

  size?: ChipSize;

  disabled?: boolean;

  removable?: boolean;

  onRemove?: () => void;

}