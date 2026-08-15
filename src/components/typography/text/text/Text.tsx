/* ======================================
   IMPORTS
====================================== */

import type { ElementType } from "react";

import { createClassName } from "@/laboratory/create-class-name";
import { extractProps } from "@/laboratory/core/extract-props";

import { html } from "@/laboratory/capabilities/html";

import { surface, surfaceCapabilities } from "@/laboratory/capabilities/surface";

import { typography } from "@/laboratory/capabilities/typography";

import { ExpandableText } from "@/components/typography/text/expandable-text";
import { Skeleton } from "@/primitives/skeleton";

import type { SurfaceProps } from "@/laboratory/capabilities/surface";
import type { TypographyProps } from "@/laboratory/capabilities/typography";

import type { TextHtml, TextProps, TextSize } from "./text.types";

/* ======================================
   TEXT DEFAULT
====================================== */

const defaultHtml: TextHtml = "span";

const defaultSurface: SurfaceProps = {
  text: "black",
};

const defaultTypography: TypographyProps = {
  variant: "body-md",
  weight: "regular",
};

/* ======================================
   SIZE → VARIANT
====================================== */

const bodyVariantBySize = {
  sm: "body-sm",
  md: "body-md",
  lg: "body-lg",
  caption: "caption",
} as const;

const headingVariantBySize = {
  sm: "heading-sm",
  md: "heading-md",
  lg: "heading-lg",
} as const;

/* ======================================
   HEADING ELEMENTS
====================================== */

const headingElements = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

/* ======================================
   VARIANT
====================================== */

function getTypographyVariant(as: TextHtml, size: TextSize) {
  if (headingElements.includes(as as (typeof headingElements)[number])) {
    if (size === "caption") {
      return "heading-md";
    }

    return headingVariantBySize[size];
  }

  return bodyVariantBySize[size];
}

/* ======================================
   TEXT
====================================== */

export function Text<T extends TextHtml = "span">({
  children,

  as,

  size = "md",

  color,

  weight,

  align,

  case: textCase,

  decoration,

  noWrap = false,

  truncate = false,

  skeleton = false,

  expandable = false,

  lines = 4,

  expandLabel = "Ver más",

  collapseLabel = "Ver menos",

  className,

  ...props
}: TextProps<T>) {
  const elementAs = as ?? defaultHtml;

  const Element = html({
    as: elementAs,
  }) as ElementType;

  /* ======================================
     SURFACE PROPS
  ====================================== */

  const { consumed: surfaceProps, remaining: htmlProps } = extractProps(props, surfaceCapabilities);

  const textSurface: SurfaceProps = {
    ...defaultSurface,
    ...surfaceProps,

    ...(color
      ? {
          text: color,
        }
      : {}),
  };

  /* ======================================
     TYPOGRAPHY
  ====================================== */

  const textTypography: TypographyProps = {
    ...defaultTypography,

    variant: getTypographyVariant(elementAs, size),

    ...(weight
      ? {
          weight,
        }
      : {}),

    ...(align
      ? {
          align,
        }
      : {}),

    ...(textCase
      ? {
          transform: textCase,
        }
      : {}),

    ...(decoration
      ? {
          decoration,
        }
      : {}),

    ...(noWrap
      ? {
          wrap: "nowrap",
        }
      : {}),

    ...(truncate
      ? {
          truncate: true,
        }
      : {}),
  };

  /* ======================================
     CLASS NAME
  ====================================== */

  const componentClassName = createClassName(
    surface(textSurface),
    typography(textTypography),
    className,
  );

  /* ======================================
     CONTENT
  ====================================== */

  const text = (
    <Element {...htmlProps} className={componentClassName}>
      {children}
    </Element>
  );

  /* ======================================
     CONDITIONAL RENDER
  ====================================== */

  if (expandable) {
    return (
      <ExpandableText
        skeleton={skeleton}
        lines={lines}
        expandLabel={expandLabel}
        collapseLabel={collapseLabel}
      >
        {text}
      </ExpandableText>
    );
  }

  if (skeleton) {
    return <Skeleton>{text}</Skeleton>;
  }

  return text;
}
