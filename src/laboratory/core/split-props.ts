/* ======================================
   TYPES
====================================== */

type Props = Record<string, unknown>;

/* ======================================
   SPLIT PROPS
====================================== */

export function splitProps<
  T extends Props,
  K extends keyof T,
>(
  props: T,
  capabilityKeys: readonly K[],
) {
  const capabilityKeySet = new Set<string>(
    capabilityKeys.map(String),
  );

  const capabilityProps = {} as Pick<T, K>;
  const htmlProps = {} as Omit<T, K>;

  for (const [key, value] of Object.entries(props)) {
    if (capabilityKeySet.has(key)) {
      (capabilityProps as Record<string, unknown>)[key] =
        value;
    } else {
      (htmlProps as Record<string, unknown>)[key] =
        value;
    }
  }

  return {
    capabilityProps,
    htmlProps,
  };
}