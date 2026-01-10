import { useRef, useEffect } from "react";

export default function Crousel({ images = [], speed = 2 }) {
  const scrollRef = useRef(null);
  const infiniteSlides = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;

    const scroll = () => {
      container.scrollLeft += speed;

      // Infinite loop reset
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <div className="w-full py-20 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-24 overflow-x-hidden items-center"
      >
        {infiniteSlides.map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={img}
              alt="carousel"
              className="w-[400px] h-[400px] object-contain rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
