/* ======================================
   IMPORTS
====================================== */

import type { ReactNode } from "react";

/* ======================================
   PROPS
====================================== */

export interface ExpandableTextProps {
  children: ReactNode;

  skeleton?: boolean;

  lines?: number;

  expandLabel?: string;

  collapseLabel?: string;
}
