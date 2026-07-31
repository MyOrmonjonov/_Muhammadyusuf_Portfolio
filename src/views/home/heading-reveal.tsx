"use client";

import { easings } from "@react-spring/web";
import TextEngine from "spring-text-engine";

interface HeadingRevealProps {
  tag: "h1" | "h2";
  id?: string;
  className: string;
  children: string;
}

/**
 * Line-reveal heading built on TextEngine. Kept as its own client leaf
 * because `@react-spring/web` ships without a "use client" boundary of its
 * own — importing `easings` (or anything else from it) inside a Server
 * Component file drags React-context code into the server bundle and
 * breaks SSR. See obsidian/frontend/text-engine.md.
 */
export const HeadingReveal = ({
  tag,
  id,
  className,
  children,
}: HeadingRevealProps) => {
  return (
    <TextEngine
      tag={tag}
      id={id}
      mode="once"
      overflow
      className={className}
      lineIn={{ y: "0%", opacity: 1 }}
      lineOut={{ y: "100%", opacity: 0 }}
      lineStagger={100}
      lineConfig={{ duration: 900, easing: easings.easeOutCubic }}
    >
      {children}
    </TextEngine>
  );
};
