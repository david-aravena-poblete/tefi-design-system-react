/* ======================================
   TYPES
====================================== */

type ComposeProps = Record<
  string,
  string | number | boolean | undefined
>;

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

export function compose(
  prefix: string,
  capabilities: readonly string[],
  props: ComposeProps,
) {
  const component = CSS_NAMESPACE
    ? `${CSS_NAMESPACE}-${prefix}`
    : prefix;

  const classes = capabilities.flatMap((name) => {
    const value = props[name];

    if (
      value === undefined ||
      value === null ||
      value === false
    ) {
      return [];
    }

    return [`${component}--${name}-${value}`];
  });

  return [
    component,
    ...classes,
  ].join(" ");
}