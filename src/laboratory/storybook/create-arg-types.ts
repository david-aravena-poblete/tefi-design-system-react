/* ======================================
   IMPORTS
====================================== */

import type { Skill } from "@/laboratory/skill";

/* ======================================
   CREATE ARG TYPES
====================================== */

export function createArgTypes(
  skills: readonly Skill[],
  controls?: Record<
    string,
    readonly string[]
  >,
) {
  const argTypes: Record<string, unknown> = {};

  for (const skill of skills) {
    const allowedControls =
      controls?.[skill.namespace];

    for (const [name, prop] of Object.entries(
      skill.props,
    )) {
      if (
        allowedControls &&
        !allowedControls.includes(name)
      ) {
        continue;
      }

      argTypes[name] = {
        control: prop.type,

        ...(prop.options && {
          options: prop.options,
        }),

        description: prop.description,
      };
    }
  }

  return argTypes;
}