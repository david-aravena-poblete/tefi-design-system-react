/* ======================================
   IMPORTS
====================================== */

import { useRef, type PointerEvent } from "react";

/* ======================================
   CONSTANTS
====================================== */

const DRAG_THRESHOLD = 4;

/* ======================================
   TYPES
====================================== */

interface DragState {
  active: boolean;
  dragging: boolean;
  pointerId: number | null;
  startX: number;
  startY: number;
  startScrollLeft: number;
  startScrollTop: number;
}

/* ======================================
   HOOK
====================================== */

export function useDragScroll(enabled = false) {
  const state = useRef<DragState>({
    active: false,
    dragging: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startScrollLeft: 0,
    startScrollTop: 0,
  });

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (!enabled || event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    const element = event.currentTarget;

    const canScrollX = element.scrollWidth > element.clientWidth;
    const canScrollY = element.scrollHeight > element.clientHeight;

    if (!canScrollX && !canScrollY) {
      return;
    }

    state.current = {
      active: true,
      dragging: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startScrollLeft: element.scrollLeft,
      startScrollTop: element.scrollTop,
    };

    element.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const current = state.current;

    if (
      !current.active ||
      current.pointerId !== event.pointerId
    ) {
      return;
    }

    const element = event.currentTarget;

    const deltaX = event.clientX - current.startX;
    const deltaY = event.clientY - current.startY;

    if (
      !current.dragging &&
      Math.abs(deltaX) < DRAG_THRESHOLD &&
      Math.abs(deltaY) < DRAG_THRESHOLD
    ) {
      return;
    }

    if (!current.dragging) {
      current.dragging = true;

      element.classList.add("tefi-interaction--dragging");

      document.getSelection()?.removeAllRanges();
    }

    event.preventDefault();

    element.scrollLeft = current.startScrollLeft - deltaX;
    element.scrollTop = current.startScrollTop - deltaY;
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    const element = event.currentTarget;

    if (
      currentPointerMatches(event.pointerId) &&
      element.hasPointerCapture(event.pointerId)
    ) {
      element.releasePointerCapture(event.pointerId);
    }

    element.classList.remove("tefi-interaction--dragging");

    state.current.active = false;
    state.current.dragging = false;
    state.current.pointerId = null;
  };

  const handlePointerCancel = (event: PointerEvent<HTMLElement>) => {
    const element = event.currentTarget;

    if (
      currentPointerMatches(event.pointerId) &&
      element.hasPointerCapture(event.pointerId)
    ) {
      element.releasePointerCapture(event.pointerId);
    }

    element.classList.remove("tefi-interaction--dragging");

    state.current.active = false;
    state.current.dragging = false;
    state.current.pointerId = null;
  };

  const currentPointerMatches = (pointerId: number) =>
    state.current.pointerId === pointerId;

  return {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerCancel,
  };
}