// src/hooks/useTypewriter.js
import { useEffect, useRef, useState } from "react";

export default function useTypewriter(
  words = [],
  { typeSpeed = 60, deleteSpeed = 40, delayBetween = 1000, loop = true } = {}
) {
  const isSSR = typeof window === "undefined";
  const [text, setText] = useState(() => (isSSR ? words[0] || "" : ""));
  const wordIndex = useRef(0);
  const deleting = useRef(false);
  const timeoutRef = useRef(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!words || words.length === 0) {
      setText("");
      return;
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex.current % words.length];

    const tick = () => {
      if (!mounted.current) return;

      if (!deleting.current) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);

        if (next === currentWord) {
          timeoutRef.current = setTimeout(() => {
            if (!mounted.current) return;
            deleting.current = true;
            tick();
          }, delayBetween);
        } else {
          timeoutRef.current = setTimeout(tick, typeSpeed);
        }
      } else {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);

        if (next === "") {
          deleting.current = false;
          wordIndex.current = wordIndex.current + 1;
          if (!loop && wordIndex.current >= words.length) {
            setText(words[words.length - 1]);
            return;
          }
          timeoutRef.current = setTimeout(tick, typeSpeed);
        } else {
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 120);

    return () => clearTimeout(timeoutRef.current);
  }, [text, words, typeSpeed, deleteSpeed, delayBetween, loop]);

  return text;
}
