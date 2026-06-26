import type { ReactNode } from "react";

import {
  STATES,
} from "../../shared/constants";

/* ======================================
   FIELD STATE
====================================== */

export type FieldState =
  typeof STATES[number];

/* ======================================
   FIELD PROPS
====================================== */

export interface FieldProps {
  children: ReactNode;

  state?: FieldState;

  disabled?: boolean;

  loading?: boolean;

  className?: string;
}