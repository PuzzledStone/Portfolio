import { useRef } from 'react';

export function SkillCarousel({ children }) {
    const ref = useRef(null);
    const scroll = (dir = 1) => {
        if (!ref.current) return;
        const amount = Math.round(ref.current.offsetWidth * 0.7) * dir;
        ref.current.scrollBy({ left: amount, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-end gap-2 mb-2">
                <button onClick={() => scroll(-1)} aria-label="Previous" className="text-white bg-gray-800/50 hover:bg-gray-700 px-3 py-1 rounded">
                    ‹
                </button>
                <button onClick={() => scroll(1)} aria-label="Next" className="text-white bg-gray-800/50 hover:bg-gray-700 px-3 py-1 rounded">
                    ›
                </button>
            </div>
            <div ref={ref} className="flex gap-8 overflow-x-auto scroll-smooth py-2 no-scrollbar">
                {children}
            </div>
        </div>
    );
}
  