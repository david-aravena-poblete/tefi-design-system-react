"use client";

/* ======================================
   IMPORTS
====================================== */

import {
  Children,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactElement,
} from "react";

import { createClassName } from "@/laboratory/create-class-name";

import { layout } from "@/laboratory/capabilities/layout";

import { Button } from "@/components/button";
import { Dots } from "@/components/dots";

import { Icon } from "@/primitives/icon";

import type { LayoutProps } from "@/laboratory/capabilities/layout";

import type { CarouselProps } from "./carousel.types";

import "./carousel.css";

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
     KEYBOARD
  ====================================== */

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      event.target instanceof HTMLSelectElement
    ) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  /* ======================================
     SWIPE
  ====================================== */

  const pointerStartX = useRef<number | null>(null);

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    event.currentTarget.setPointerCapture(
      event.pointerId,
    );

    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (pointerStartX.current === null) {
      return;
    }

    const distance =
      event.clientX - pointerStartX.current;

    pointerStartX.current = null;

    const swipeThreshold = 50;

    if (Math.abs(distance) < swipeThreshold) {
      return;
    }

    if (distance < 0) {
      next();
    } else {
      previous();
    }
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
    controls === "outside"
      ? "carousel--controls-outside"
      : "carousel--controls-overlay",
  );

  const stageClassName = createClassName(
    "carousel__stage",
    layout(stageLayout),
  );

  const previousClassName = createClassName(
    "carousel__previous",
    layout(previousLayout),
  );

  const nextClassName = createClassName(
    "carousel__next",
    layout(nextLayout),
  );

  const viewportClassName = createClassName(
    "carousel__viewport",
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
    <div
      className={viewportClassName}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {currentItem}
    </div>
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div
      className={componentClassName}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
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