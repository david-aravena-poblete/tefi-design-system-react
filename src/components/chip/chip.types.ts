import type {
  HTMLAttributes,
} from "react";

import { SIZES } from "../../shared/constants";

export type ChipSize =
  (typeof SIZES)[number];

export interface ChipProps
  extends HTMLAttributes<HTMLDivElement> {

  size?: ChipSize;

  disabled?: boolean;

  removable?: boolean;

  onRemove?: () => void;

}