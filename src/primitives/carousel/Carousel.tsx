/* ======================================
   IMPORTS
====================================== */

import {
  Children,
  useState,
  type ReactElement,
} from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { layout } from "@/laboratory/capabilities/layout";

import { Button } from "@/components/button";
import { Dots } from "@/components/dots";

import { Icon } from "@/primitives/icon";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { CarouselProps } from "./carousel.types";

/* ======================================
   DEFAULTS
====================================== */

const defaultLayout: LayoutProps = {
  display: "flex",
  direction: "column",
  fill: true,
  between: "md",
};

const overlayStageLayout: LayoutProps = {
  position: "relative",
  fill: true,
};

const outsideStageLayout: LayoutProps = {
  display: "flex",
  direction: "row",
  align: "center",
  fill: true,
  between: "sm",
};

const overlayPreviousLayout: LayoutProps = {
  display: "flex",
  align: "center",
  justify: "center",

  position: "absolute",
  top: "none",
  bottom: "none",
  left: "sm",
};

const overlayNextLayout: LayoutProps = {
  display: "flex",
  align: "center",
  justify: "center",

  position: "absolute",
  top: "none",
  bottom: "none",
  right: "sm",
};

const outsidePreviousLayout: LayoutProps = {
  display: "flex",
  align: "center",
  justify: "center",
};

const outsideNextLayout: LayoutProps = {
  display: "flex",
  align: "center",
  justify: "center",
};

const viewportLayout: LayoutProps = {
  fill: true,
};

/* ======================================
   CAROUSEL
====================================== */

export function Carousel({
  children,
  controls = "overlay",
}: CarouselProps): ReactElement {
  /* ======================================
     CHILDREN
  ====================================== */

  const items = Children.toArray(children);

  const totalItems = items.length;

  /* ======================================
     STATE
  ====================================== */

  const [currentIndex, setCurrentIndex] = useState(0);

  /* ======================================
     NAVIGATION
  ====================================== */

  const next = () => {
    if (totalItems <= 1) {
      return;
    }

    setCurrentIndex((current) => {
      return (current + 1) % totalItems;
    });
  };

  const previous = () => {
    if (totalItems <= 1) {
      return;
    }

    setCurrentIndex((current) => {
      return (current - 1 + totalItems) % totalItems;
    });
  };

  /* ======================================
     LAYOUT
  ====================================== */

  const stageLayout =
    controls === "outside"
      ? outsideStageLayout
      : overlayStageLayout;

  const previousLayout =
    controls === "outside"
      ? outsidePreviousLayout
      : overlayPreviousLayout;

  const nextLayout =
    controls === "outside"
      ? outsideNextLayout
      : overlayNextLayout;

  /* ======================================
     CLASS NAMES
  ====================================== */

  const componentClassName = createClassName(
    "carousel",
    layout(defaultLayout),
  );

  const stageClassName = createClassName(
    layout(stageLayout),
  );

  const previousClassName = createClassName(
    layout(previousLayout),
  );

  const nextClassName = createClassName(
    layout(nextLayout),
  );

  const viewportClassName = createClassName(
    layout(viewportLayout),
  );

  /* ======================================
     EMPTY
  ====================================== */

  if (totalItems === 0) {
    return (
      <div className={componentClassName} />
    );
  }

  /* ======================================
     CURRENT ITEM
  ====================================== */

  const currentItem = items[currentIndex];

  /* ======================================
     PREVIOUS CONTROL
  ====================================== */

  const previousControl = (
    <div className={previousClassName}>
      <Button
        variant={
          controls === "outside"
            ? "secondary"
            : "overlay"
        }
        radius="full"
        onClick={previous}
        aria-label="Anterior"
        startIcon={
          <Icon
            name="chevronLeft"
            size="sm"
          />
        }
      />
    </div>
  );

  /* ======================================
     NEXT CONTROL
  ====================================== */

  const nextControl = (
    <div className={nextClassName}>
      <Button
        variant={
          controls === "outside"
            ? "secondary"
            : "overlay"
        }
        radius="full"
        onClick={next}
        aria-label="Siguiente"
        startIcon={
          <Icon
            name="chevronRight"
            size="sm"
          />
        }
      />
    </div>
  );

  /* ======================================
     CONTENT
  ====================================== */

  const content = (
    <div className={viewportClassName}>
      {currentItem}
    </div>
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className={componentClassName}>
      <div className={stageClassName}>

        {controls === "outside" ? (
          <>
            {totalItems > 1 && previousControl}

            {content}

            {totalItems > 1 && nextControl}
          </>
        ) : (
          <>
            {content}

            {totalItems > 1 && previousControl}

            {totalItems > 1 && nextControl}
          </>
        )}

      </div>

      {/* ======================================
         DOTS
      ====================================== */}

      {totalItems > 1 && (
        <Dots
          count={totalItems}
          active={currentIndex}
          onChange={setCurrentIndex}
        />
      )}
    </div>
  );
}