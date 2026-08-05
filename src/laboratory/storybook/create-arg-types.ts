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
      const visible =
        !allowedControls ||
        allowedControls.includes(name);

      argTypes[name] = visible
        ? {
            control: prop.type,

            ...(prop.options && {
              options: prop.options,
            }),

            description: prop.description,
          }
        : {
            table: {
              disable: true,
            },

            control: false,
          };
    }

    /* ======================================
       HIDE CAPABILITY PROP
    ====================================== */

    if (skill.namespace !== "html") {
      argTypes[skill.namespace] = {
        table: {
          disable: true,
        },

        control: false,
      };
    }
  }

  return argTypes;
}