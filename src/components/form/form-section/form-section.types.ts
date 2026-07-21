/* ======================================
   IMPORTS
====================================== */

import type { ReactNode } from "react";

/* ======================================
     FORM SECTION PROPS
  ====================================== */

export interface FormSectionProps {
  title?: ReactNode;

  description?: ReactNode;

  children: ReactNode;

  className?: string;
}
