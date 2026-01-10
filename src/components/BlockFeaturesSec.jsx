import BlockFeaCard from "./Tools/BlockFeaCard";
import data1 from "../assets/Images/data1.png";
import data2 from "../assets/Images/data2.png";
import data3 from "../assets/Images/data3.png";

export default function AiMarketerSection() {
  return (
    <section className="w-full px-6 py-20 bg-background">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-20">
        An <span className="text-orange-500">AI marketer</span> that does it all for you
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <BlockFeaCard title="Set up and launch campaigns" image={data1} />
        <BlockFeaCard title="Suggest what to fix and optimize" image={data2} />
        <BlockFeaCard title="Reports that build themselves" image={data3} />
      </div>

    </section>
  );
}
