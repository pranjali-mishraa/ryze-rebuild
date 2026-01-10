import { useRef, useEffect } from "react";

const slides = [
  "/carousel/slide1.png",
  "/carousel/slide2.png",
  "/carousel/slide3.png",
  "/carousel/slide4.png",
  "/carousel/slide5.png",
];

export default function CenterCarousel() {
  const scrollRef = useRef(null);
  const infiniteSlides = [...slides, ...slides];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 2.2; // adjust if needed

    const scroll = () => {
      container.scrollLeft += speed;

      // Infinite loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full py-20 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-24 overflow-x-hidden items-center"
      >
        {infiniteSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={slide}
              alt="logo"
              className="w-[240px] h-[160px] object-contain rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
