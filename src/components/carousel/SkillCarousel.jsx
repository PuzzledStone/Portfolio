import React from "react";
import { useCarousel } from "../../hooks/useCarousel.js";

export function SkillCarousel({ children }) {
  const {
    items,
    current,
    gap,
    step,
    itemWidth,
    containerWidth,
    next,
    prev,
  } = useCarousel(children);

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={prev}
        aria-label="Previous"
        className="text-white bg-gray-800/50 hover:bg-gray-700 px-3 py-1 rounded transition-colors"
      >
        ‹
      </button>

      <div className="overflow-hidden" style={{ width: `${containerWidth}px` }}>
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${current * step}px)`,
            transition: "transform 350ms ease",
            width: "fit-content",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ width: `${itemWidth}px` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        aria-label="Next"
        className="text-white bg-gray-800/50 hover:bg-gray-700 px-3 py-1 rounded transition-colors"
      >
        ›
      </button>
    </div>
  );
}
