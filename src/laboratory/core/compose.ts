/* ======================================
   TYPES
====================================== */

type ComposeValue =
  | string
  | number
  | boolean
  | undefined;

/* ======================================
   CONSTANTS
====================================== */

/**
 * Temporary namespace while Laboratory
 * coexists with the legacy Design System.
 *
 * Remove once the migration is complete.
 */
const CSS_NAMESPACE = "laboratory";

/* ======================================
   COMPOSE
====================================== */

export function compose<T extends object>(
  prefix: string,
  capabilities: readonly (keyof T)[],
  props: T,
) {
  const component = CSS_NAMESPACE
    ? `${CSS_NAMESPACE}-${prefix}`
    : prefix;

  const classes = capabilities.flatMap((name) => {
    const value = props[name] as ComposeValue;

    if (
      value === undefined ||
      value === null ||
      value === false
    ) {
      return [];
    }

    return [`${component}--${String(name)}-${value}`];
  });

  return [
    component,
    ...classes,
  ].join(" ");
}