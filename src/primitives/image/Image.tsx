/* ======================================
   IMPORTS
====================================== */

import { useState, type ComponentProps } from "react";

import clsx from "clsx";

import "./image.css";

import { Skeleton } from "../../primitives/skeleton";

import type { ImageProps } from "./image.types";

/* ======================================
   IMAGE
====================================== */

export function Image({
  /* ======================================
     TEFI PROPS
  ====================================== */

  fit = "cover",

  aspect = "16:9",

  skeleton = false,

  /* ======================================
     REACT PROPS
  ====================================== */

  className,

  alt,

  onLoad,

  onError,

  /* ======================================
     REST PROPS
  ====================================== */

  ...rest
}: ImageProps) {
  /* ======================================
     STATE
  ====================================== */

  const [isLoaded, setIsLoaded] = useState(false);

  const [hasError, setHasError] = useState(false);

  /* ======================================
     HANDLERS
  ====================================== */

  const handleLoad: ComponentProps<"img">["onLoad"] = (event) => {
    setIsLoaded(true);

    onLoad?.(event);
  };

  const handleError: ComponentProps<"img">["onError"] = (event) => {
    setHasError(true);

    setIsLoaded(false);

    onError?.(event);
  };

  /* ======================================
     CLASSES
  ====================================== */

  const wrapperClasses = clsx(
    "image",

    `image--${aspect.replace(":", "-")}`,

    className,
  );

  const imageClasses = clsx(
    "image__content",

    `image__content--${fit}`,

    {
      "image__content--loaded": isLoaded,
    },
  );

  /* ======================================
     MANUAL SKELETON
  ====================================== */

  if (skeleton) {
    return (
      <div className={wrapperClasses}>
        <div className="image__surface">
          <Skeleton fill className="image__skeleton" />
        </div>
      </div>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className={wrapperClasses}>
      <div className="image__surface">
        {!isLoaded && !hasError && <Skeleton fill className="image__skeleton" />}

        <img
          {...rest}
          className={imageClasses}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}
