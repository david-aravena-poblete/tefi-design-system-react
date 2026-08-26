/* ======================================
   IMPORTS
====================================== */

import {
  useEffect,
  useState,
} from "react";

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

  /* ======================================
     RENDER
  ====================================== */

  return (
    <Text {...textProps}>
      <span className="typewriter">
        {displayedText}

        {cursor && (
          <span className="typewriter__cursor">
            |
          </span>
        )}
      </span>
    </Text>
  );
}