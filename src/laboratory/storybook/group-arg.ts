/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   GROUP ARGS
====================================== */

export function groupArgs(
  args: Record<string, unknown>,
  skills: readonly Skill[],
) {
  const result: Record<string, unknown> = {
    ...args,
  };

  for (const skill of skills) {
    const values: Record<string, unknown> = {};

    for (const name of Object.keys(skill.props)) {
      if (name in args) {
        values[name] = args[name];

        delete result[name];
      }
    }

    if (Object.keys(values).length === 0) {
      continue;
    }

    /* ======================================
       HTML
    ====================================== */

    if (skill.namespace === "html") {
      Object.assign(result, values);

      continue;
    }

    /* ======================================
       CAPABILITY
    ====================================== */

    result[skill.namespace] = values;
  }

  return result;
}