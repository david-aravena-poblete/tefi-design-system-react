import { useEffect, useState } from "react";

import "./typewriter.css";

import type { TypewriterProps } from "./typewriter.types";

/* ======================================
     TYPEWRITER
  ====================================== */

export function Typewriter({
  text,

  speed = 50,

  cursor = true,
}: TypewriterProps) {
  /* ======================================
       STATE
    ====================================== */

  const [displayedText, setDisplayedText] = useState("");

  /* ======================================
       EFFECT
    ====================================== */

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  /* ======================================
       RENDER
    ====================================== */

  return (
    <span className="typewriter">
      {displayedText}

      {cursor && <span className="typewriter__cursor">|</span>}
    </span>
  );
}
