/* ======================================
   IMPORTS
====================================== */

import { createClassName } from "@/laboratory/create-class-name";
import { layout } from "@/laboratory/capabilities/layout";
import type { LayoutProps } from "@/laboratory/capabilities/layout";

import { iconRegistry } from "./icons/icons.registry";

import type {
  IconProps,
  IconSize,
} from "./icon.types";

/* ======================================
   ICON DEFAULT
====================================== */

const defaultLayout: LayoutProps = {
  width: "20",
  height: "20",
};

/* ======================================
   ICON SIZES
====================================== */

const layoutBySize = {
  sm: {
    width: "16",
    height: "16",
  },

  md: {},

  lg: {
    width: "24",
    height: "24",
  },
} satisfies Record<IconSize, LayoutProps>;

/* ======================================
   ICON
====================================== */

export function Icon({
  name,
  size = "md",
  ariaHidden = true,
  className,
  children,
  ...props
}: IconProps) {
  const IconComponent = name
    ? iconRegistry[name]
    : undefined;

  const iconLayout = {
    ...defaultLayout,
    ...layoutBySize[size],
  };

  const componentClassName = createClassName(
    layout(iconLayout),
    className,
  );

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (name && !IconComponent) {
    console.warn(
      `Icon "${name}" not found in registry.`,
    );
  }

  if (IconComponent) {
    return (
      <IconComponent
        {...props}
        className={componentClassName}
        aria-hidden={ariaHidden}
      />
    );
  }

  return <>{children}</>;
}