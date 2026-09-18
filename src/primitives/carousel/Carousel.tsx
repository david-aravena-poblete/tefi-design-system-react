"use client";

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
import type { LayoutProps } from "@/laboratory/capabilities/layout";

import { Button } from "@/components/button";
import { Dots } from "@/components/dots";
import { Icon } from "@/primitives/icon";

import type { CarouselProps } from "./carousel.types";

import "./carousel.css";

/* ======================================
   DEFAULTS
====================================== */

const defaultLayout: LayoutProps = {
  display: "grid",
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
  align: "stretch",
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
   STAGE
====================================== */

interface StageProps {
  children: ReactElement | ReactElement[];
  className: string;
}

function Stage({
  children,
  className,
}: StageProps): ReactElement {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ======================================
   VIEWPORT
====================================== */

interface ViewportProps {
  children: ReactElement;
  className: string;
}

function Viewport({
  children,
  className,
}: ViewportProps): ReactElement {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ======================================
   TRACK
====================================== */

interface TrackProps {
  children: ReactElement[];
}

function Track({
  children,
}: TrackProps): ReactElement {
  return (
    <div className="carousel__track">
      {children}
    </div>
  );
}

/* ======================================
   SLIDE
====================================== */

interface SlideProps {
  children: ReactElement;
  active: boolean;
}

function Slide({
  children,
  active,
}: SlideProps): ReactElement {
  return (
    <div
      className={createClassName(
        "carousel__slide",
        active
          ? "carousel__slide--active"
          : "carousel__slide--inactive",
      )}
      aria-hidden={!active}
    >
      {children}
    </div>
  );
}

/* ======================================
   CAROUSEL
====================================== */

export function Carousel({
  children,
  controls = "overlay",
  maxHeight,
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
      return (
        (current - 1 + totalItems) % totalItems
      );
    });
  };

  /* ======================================
     LAYOUT
  ====================================== */

  const stageLayout = {
    ...(controls === "outside"
      ? outsideStageLayout
      : overlayStageLayout),
    maxHeight,
  };

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
     CONTROLS
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
     SLIDES
  ====================================== */

  const slides = items.map((item, index) => (
    <Slide
      key={index}
      active={index === currentIndex}
    >
      {item as ReactElement}
    </Slide>
  ));

  /* ======================================
     CONTENT
  ====================================== */

  const content = (
    <Viewport
      className={viewportClassName}
    >
      <Track>{slides}</Track>
    </Viewport>
  );

  /* ======================================
     RENDER
  ====================================== */

  return (
    <div className={componentClassName}>
      <Stage className={stageClassName}>
        {controls === "outside" ? (
          <>
            {totalItems > 1 && previousControl}

            {content}

            {totalItems > 1 && nextControl}
          </>
        ) : (
          <>
            {totalItems > 1 && previousControl}

            {content}

            {totalItems > 1 && nextControl}
          </>
        )}
      </Stage>

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