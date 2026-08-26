/* ======================================
   IMPORTS
====================================== */

import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";

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
     REF
  ====================================== */

  const imageRef = useRef<HTMLImageElement>(null);

  /* ======================================
     STATE
  ====================================== */

  const [isLoaded, setIsLoaded] = useState(false);

  const [hasError, setHasError] = useState(false);

  /* ======================================
     SOURCE
  ====================================== */

  useEffect(() => {
    setIsLoaded(false);

    setHasError(false);

    const image = imageRef.current;

    if (!image) {
      return;
    }

    if (image.complete) {
      if (image.naturalWidth > 0) {
        setIsLoaded(true);
      } else {
        setHasError(true);
      }
    }
  }, [rest.src]);

  /* ======================================
     HANDLERS
  ====================================== */

  const handleLoad: ComponentProps<"img">["onLoad"] = (event) => {
    setIsLoaded(true);

    setHasError(false);

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
     RENDER
  ====================================== */

  return (
    <div className={wrapperClasses}>
      <div className="image__surface">
        {!isLoaded && !hasError && (
          <Skeleton
            fill
            className="image__skeleton"
          />
        )}

        <img
          {...rest}
          ref={imageRef}
          className={imageClasses}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}