/* ======================================
   IMPORTS
====================================== */

import {
  useEffect,
  useState,
} from "react";

import { Icon } from "@/primitives/icon";

import { Text } from "@/components/typography/text";

import type {
  TextHtml,
  TextProps,
} from "@/components/typography/text";

import type { TypewriterProps } from "./typewriter.types";

import "./typewriter.css";

/* ======================================
   TYPEWRITER
====================================== */

export function Typewriter<T extends TextHtml = "p">({
  text,

  speed = 50,

  cursor = true,

  icon,

  ...props
}: TypewriterProps<T>) {
  /* ======================================
     STATE
  ====================================== */

  const [displayedText, setDisplayedText] = useState("");

  /* ======================================
     EFFECT
  ====================================== */

  useEffect(() => {
    let index = 0;

    setDisplayedText("");

    const interval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);

  /* ======================================
     TEXT PROPS
  ====================================== */

  const textProps = props as TextProps<T>;

  const isComplete =
    displayedText.length === text.length;

  /* ======================================
     RENDER
  ====================================== */

  const showCursor =
    cursor && Boolean(displayedText);

  const showIcon =
    Boolean(icon) && Boolean(displayedText);

  const showIndicator =
    showCursor || showIcon;

  return (
    <Text {...textProps}>
      <span className="typewriter">
        {displayedText}

        {showIndicator && (
          <span
            className={
              isComplete
                ? "typewriter__cursor typewriter__cursor--blink"
                : "typewriter__cursor"
            }
          >
            {showCursor && "|"}

            {showIcon && (
              <Icon
                name={icon}
                size="sm"
              />
            )}
          </span>
        )}
      </span>
    </Text>
  );
}