import { useMemo, useState, useEffect } from "react";
import React from "react";

export function useCarousel(children, options = {}) {
  const {
    gap = 32,
    breakpoints = [
      { maxWidth: 768, visibleCount: 2, itemWidth: 90 },
      { maxWidth: 1024, visibleCount: 3, itemWidth: 100 },
      { maxWidth: Infinity, visibleCount: 4, itemWidth: 110 },
    ],
  } = options;

  const items = useMemo(() => React.Children.toArray(children), [children]);
  const total = items.length;

  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(breakpoints[0].visibleCount);
  const [itemWidth, setItemWidth] = useState(breakpoints[0].itemWidth);

  const step = itemWidth + gap;

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;

      const match = breakpoints.find((bp) => w < bp.maxWidth);
      if (!match) return;

      setVisibleCount(match.visibleCount);
      setItemWidth(match.itemWidth);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [breakpoints]);

  const maxIndex = Math.max(0, total - visibleCount);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  const containerWidth = visibleCount * itemWidth + (visibleCount - 1) * gap;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return {
    items,
    total,
    current,
    visibleCount,
    itemWidth,
    gap,
    step,
    maxIndex,
    containerWidth,
    next,
    prev,
    setCurrent, // optional
  };
}
