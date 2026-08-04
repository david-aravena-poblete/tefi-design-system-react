/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   CREATE STORY OPTIONS
====================================== */

export interface CreateStoryOptions {
  skills: readonly Skill[];

  controls?: Record<
    string,
    readonly string[]
  >;

  args?: Record<string, unknown>;
}