/* ======================================
   IMPORTS
====================================== */

import type { InputProps } from "../input";

/* ======================================
   SEARCH FIELD PROPS
====================================== */

export interface SearchFieldProps extends InputProps {
  clearable?: boolean;

  onClear?: () => void;
}
