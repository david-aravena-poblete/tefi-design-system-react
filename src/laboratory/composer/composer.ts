/* ======================================
   COMPOSER
====================================== */

export function composer(
  ...classes: Array<string | undefined>
) {
  return classes
    .filter(Boolean)
    .join(" ");
}