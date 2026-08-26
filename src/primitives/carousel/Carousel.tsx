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
};

/* ======================================
   CAROUSEL
====================================== */

export function Carousel({
  children,
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
     CLASS NAME
  ====================================== */

  const componentClassName = createClassName(
    "carousel",
    layout(defaultLayout),
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
     RENDER
  ====================================== */

  return (
    <div className={componentClassName}>
      <div className="carousel__viewport">
        <div key={currentIndex}>
          {currentItem}
        </div>

        {totalItems > 1 && (
          <div className="carousel__controls">
            <Button
              variant="secondary"
              onClick={previous}
              aria-label="Anterior"
            >
              <Icon
                name="arrowLeft"
                size="sm"
              />
            </Button>

            <Button
              variant="secondary"
              onClick={next}
              aria-label="Siguiente"
            >
              <Icon
                name="arrowRight"
                size="sm"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}