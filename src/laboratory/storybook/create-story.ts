/* ======================================
   IMPORTS
====================================== */

import { createArgTypes } from "./create-arg-types";
import { groupArgs } from "./group-arg";

import type { CreateStoryOptions } from "./create-story.types";

/* ======================================
   CREATE STORY
====================================== */

export function createStory(options: CreateStoryOptions) {
  return {
    args: groupArgs(options.args ?? {}, options.skills),

    argTypes: createArgTypes(options.skills, options.controls),

    transformArgs<T extends object>(args: T) {
      return groupArgs(args as Record<string, unknown>, options.skills);
    },
  };
}
