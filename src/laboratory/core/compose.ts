/* ======================================
   TYPES
====================================== */

type ComposePrimitive =
  | string
  | number
  | boolean;

type ComposeObject = Record<
  string,
  ComposePrimitive | undefined
>;

type ComposeValue =
  | ComposePrimitive
  | ComposeObject
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
const CSS_NAMESPACE = "tefi";

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

    /* ======================================
       OBJECT
    ====================================== */

    if (
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      return Object.entries(value).flatMap(
        ([property, nestedValue]) => {
          if (
            nestedValue === undefined ||
            nestedValue === null ||
            nestedValue === false
          ) {
            return [];
          }

          return [
            `${component}--${String(name)}-${property}-${nestedValue}`,
          ];
        },
      );
    }

    /* ======================================
       PRIMITIVE
    ====================================== */

    return [
      `${component}--${String(name)}-${value}`,
    ];
  });

  return [
    component,
    ...classes,
  ].join(" ");
}