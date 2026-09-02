"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetween?: number;
}

export function TypingText({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseBetween = 1300
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseBetween);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseBetween]);

  return (
    <span className="inline-flex items-center gap-1 text-cyan-300">
      <span>{words[index].substring(0, subIndex)}</span>
      <span className="h-5 w-[2px] animate-pulse bg-cyan-300" />
    </span>
  );
}

