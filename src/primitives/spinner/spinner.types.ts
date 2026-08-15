/* ======================================
   IMPORTS
====================================== */

import type { ComponentPropsWithoutRef } from "react";
import type { HtmlElement } from "@/laboratory/types";
import type { HtmlProps } from "@/laboratory/capabilities/html";

/* ======================================
   TYPES
====================================== */

export type SpinnerHtml = Extract<HtmlElement, "div">;

export type SpinnerSize = "sm" | "md" | "lg";

/* ======================================
   SPINNER PROPS
====================================== */

export type SpinnerProps<T extends SpinnerHtml = "div"> = {
  size?: SpinnerSize;
} & HtmlProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "as">;
