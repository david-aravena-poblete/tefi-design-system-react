/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   FLATTEN ARGS
====================================== */

export function flattenArgs(args: Record<string, unknown>, skills: readonly Skill[]) {
  const result: Record<string, unknown> = {
    ...args,
  };

  for (const skill of skills) {
    const values = args[skill.namespace] as Record<string, unknown> | undefined;

    if (!values) {
      continue;
    }

    delete result[skill.namespace];

    Object.assign(result, values);
  }

  return result;
}
