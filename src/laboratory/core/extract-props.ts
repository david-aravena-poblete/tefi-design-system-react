/* ======================================
   EXTRACT PROPS
====================================== */

export function extractProps<T extends object, K extends string>(props: T, keys: readonly K[]) {
  const consumed = {} as Pick<T, Extract<keyof T, K>>;

  const keySet = new Set<string>(keys);

  keys.forEach((key) => {
    if (key in props) {
      (consumed as Record<string, unknown>)[key] = (props as Record<string, unknown>)[key];
    }
  });

  const remaining = Object.fromEntries(
    Object.entries(props).filter(([key]) => !keySet.has(key)),
  ) as Omit<T, Extract<keyof T, K>>;

  return {
    consumed,
    remaining,
  };
}
