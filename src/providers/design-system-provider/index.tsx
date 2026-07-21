"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

import { DEFAULT_BRAND, DEFAULT_THEME } from "../../shared/design-system.types";

import type { Brand, Theme } from "../../shared/design-system.types";

interface DesignSystemProviderProps {
  children?: ReactNode;
  theme?: Theme;
  brand?: Brand;
}

export function DesignSystemProvider({
  children,
  theme = DEFAULT_THEME,
  brand = DEFAULT_BRAND,
}: DesignSystemProviderProps) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    document.documentElement.setAttribute("data-brand", brand);
  }, [theme, brand]);

  return <>{children}</>;
}
