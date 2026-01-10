import BlockFeaCard from "./Tools/BlockFeaCard";

export default function AiMarketerSection() {
  return (
    <section className="w-full px-6 py-20 bg-background">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
        An <span className="text-orange-500">AI marketer</span> that does it all for you
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <BlockFeaCard title="Set up and launch campaigns" />
        <BlockFeaCard title="Suggest what to fix and optimize" />
        <BlockFeaCard title="Reports that build themselves" />
      </div>

      </div>
    </section>
  );
}
