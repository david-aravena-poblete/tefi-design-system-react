/* ======================================
   CREATE CLASS NAME
====================================== */

export function createClassName(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}
