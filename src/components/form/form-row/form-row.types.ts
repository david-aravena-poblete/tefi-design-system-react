/* ======================================
   IMPORTS
====================================== */

import "./form-row.css";

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* ======================================
   FORM ROW PROPS
====================================== */

export interface FormRowProps
  extends HTMLAttributes<HTMLDivElement> {

  children: ReactNode;
}