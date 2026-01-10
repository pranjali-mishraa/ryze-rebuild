import { useEffect, useState } from "react";

const slides = [
  "/carousel/slide1.png",
  "/carousel/slide2.png",
  "/carousel/slide3.png",
  "/carousel/slide4.png",
  "/carousel/slide5.png",
];

export default function CenterCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // auto-scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-16 overflow-hidden">
      <div className="flex gap-8 items-center transition-transform duration-500">
        {slides.map((slide, index) => {
          const isActive = index === current;

          return (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isActive ? "scale-110" : "scale-90 opacity-70"
              }`}
            >
              <img
                src={slide}
                alt="slide"
                className="w-[240px] h-[160px] object-cover rounded-xl shadow-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
