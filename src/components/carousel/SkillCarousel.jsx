import React, { useMemo, useState } from "react";

export function SkillCarousel({ children }) {
  const items = useMemo(() => React.Children.toArray(children), [children]);

  const visibleCount = 5; // how many show at once
  const total = items.length;

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0); // translateX
  const [animating, setAnimating] = useState(false);

  const itemWidth = 120; // adjust to match SkillItem width
  const gap = 32;
  const step = itemWidth + gap;

  const next = () => {
    if (animating || total <= 1) return;
    setAnimating(true);
    setOffset(-step);

    setTimeout(() => {
      setAnimating(false);
      setOffset(0);
      setIndex((prev) => (prev + 1) % total);
    }, 350);
  };

  const prev = () => {
    if (animating || total <= 1) return;
    setAnimating(true);
    setOffset(step);

    setTimeout(() => {
      setAnimating(false);
      setOffset(0);
      setIndex((prev) => (prev - 1 + total) % total);
    }, 350);
  };

  // Build visible items (wrap around)
  const visibleItems = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(items[(index + i) % total]);
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={prev}
        aria-label="Previous"
        className="text-white bg-gray-800/50 hover:bg-gray-700 px-3 py-1 rounded transition-colors disabled:opacity-40"
        disabled={animating}
      >
        ‹
      </button>

      <div className="overflow-hidden" style={{ width: "600px" }}>
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(${offset}px)`,
            transition: animating ? "transform 350ms ease" : "none",
          }}
        >
          {visibleItems.map((item, i) => (
            <div key={i} className="shrink-0" style={{ width: `${itemWidth}px` }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        aria-label="Next"
        className="text-white bg-gray-800/50 hover:bg-gray-700 px-3 py-1 rounded transition-colors disabled:opacity-40"
        disabled={animating}
      >
        ›
      </button>
    </div>
  );
}
