
import FeatureCard from "./Tools/FeatureCard";
import { useRef, useEffect } from "react";


// import optimizeImg from "../assets/optimize.png";
// import creativeImg from "../assets/creative.png";
// import scaleImg from "../assets/scale.png";

export default function Features() {
  const scrollRef = useRef(null);

   useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let animationFrameId;

  const scroll = () => {
    // Pause on hover
    if (!container.getAttribute("data-pause")) {
      container.scrollLeft += 0.5;

      // Seamless loop reset
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }
    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrameId);
}, []);




  const features = [
    {
      title: "AI Optimization",
      description:
        "Identify underperforming areas and unlock hidden opportunities .",
    //   image: optimizeImg,
    },
    {
      title: "Creative Intelligence",
      description:
        "Analyze creatives, messaging, and formats before scaling your campaigns.",
    //   image: creativeImg,
    },
    {
      title: "Smart Scaling",
      description:
        "Automatically reallocate budgets to channels and strategies that convert.",
    //   image: scaleImg,
    },
    {
      title: "Performance Monitoring",
      description:
        "Track KPIs and performance trends in real time across channels.",
    },
    {
      title: "Audience Insights",
      description:
        "Understand user behavior and intent with AI-powered audience analysis.",
    },
  ];

  const infiniteFeatures = [...features, ...features];


  return (
    <section className="px-6 py-8 bg-background">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            How Ryze drives real growth
          </h2>
          <p className="mt-4 text-lg text-muted">
            From optimization to execution, Ryze helps teams make smarter decisions using AI.
          </p>
        </div>

       
        <div
  ref={scrollRef}
  className="flex gap-8 overflow-x-hidden pb-4"
  onMouseEnter={() =>
    scrollRef.current?.setAttribute("data-pause", "true")
  }
  onMouseLeave={() =>
    scrollRef.current?.removeAttribute("data-pause")
  }
>
  {infiniteFeatures.map((feature, index) => (
    <div
      key={index}
      className="min-w-[300px] md:min-w-[360px] flex-shrink-0"
    >
      <FeatureCard {...feature} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
