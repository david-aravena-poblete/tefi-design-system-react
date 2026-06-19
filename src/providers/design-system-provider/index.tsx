"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

type Theme =
  | "light"
  | "dark";

type Brand =
  | "default"
  | "daravena";

interface DesignSystemProviderProps {
  children: ReactNode;
  theme?: Theme;
  brand?: Brand;
}

export function DesignSystemProvider({
  children,
  theme = "light",
  brand = "default",
}: DesignSystemProviderProps) {

  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    document.documentElement.setAttribute(
      "data-brand",
      brand
    );

  }, [theme, brand]);

  return <>{children}</>;
}