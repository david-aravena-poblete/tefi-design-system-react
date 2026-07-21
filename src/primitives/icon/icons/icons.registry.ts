/* ======================================
   IMPORTS
====================================== */

import { Search, Plus, X, Sun, Moon, User } from "lucide-react";

/* ======================================
   ICON REGISTRY
====================================== */

export const iconRegistry = {
  search: Search,

  plus: Plus,

  close: X,

  sun: Sun,

  moon: Moon,

  user: User,
};

/* ======================================
   TYPES
====================================== */

export type IconName = keyof typeof iconRegistry;

/* ======================================
   CONSTANTS
====================================== */

export const ICON_NAMES = Object.keys(iconRegistry) as IconName[];
