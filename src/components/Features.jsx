const features = [
  {
    title: "AI-Powered Automation",
    description:
      "Automate repetitive workflows and focus on what matters most for your business growth.",
  },
  {
    title: "Smart Lead Generation",
    description:
      "Identify, capture, and convert high-quality leads using intelligent AI insights.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Track performance with real-time analytics and make data-driven decisions.",
  },
];

function Features() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Powerful Features to <span className="text-primary">Scale Faster</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Ryze provides everything you need to grow efficiently using AI-driven tools.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
