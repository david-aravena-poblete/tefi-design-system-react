import type { ReactNode } from "react";

import {
  FIELD_STATES,
} from "../../shared/field.constants";

/* ======================================
   FIELD STATE
====================================== */

export type FieldState =
  typeof FIELD_STATES[number];

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