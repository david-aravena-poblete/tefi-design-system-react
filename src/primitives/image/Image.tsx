/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";
import clsx from "clsx";
import "./image.css";
import { Skeleton } from "../../primitives/skeleton";

import type { ImageProps } from "./image.types";

/* ======================================
   IMAGE
====================================== */

export function Image({
  fit = "cover",
  ratio = "16:9",
  skeleton = false,
  className,
  alt,
  onLoad,
  ...props
}: ImageProps) {

  /* ======================================
     STATE
  ====================================== */

  const [loaded, setLoaded] = useState(false);

  /* ======================================
     CLASSES
  ====================================== */

  const wrapperClasses = clsx(
    "image",
    `image--${ratio.replace(":", "-")}`,
    className
  );

  const imageClasses = clsx(
    "image__content",
    `image__content--${fit}`,
    // Añadimos la clase de opacidad solo cuando ya cargó
    loaded && "image__content--loaded"
  );

  /* ======================================
     MANUAL SKELETON
  ====================================== */

  if (skeleton) {
    return (
      <div className={wrapperClasses}>
        <Skeleton
          fill
          ratio={ratio}
          className="image__skeleton"
        />
      </div>
    );
  }

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className={wrapperClasses}>

      {/* Mantenemos el skeleton interno mientras no esté cargada */}
      {!loaded && (
        <Skeleton
          fill
          ratio={ratio}
          className="image__skeleton"
        />
      )}

      {/* La imagen descarga de fondo invisible (opacity: 0 por CSS) 
          hasta que dispara el onLoad */}
      <img
        className={imageClasses}
        alt={alt}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        {...props}
      />

    </div>
  );
}