export default function BlockFeaCard({ title, image }) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
      
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-contain mb-6 scale-110"
      />

      <h3 className="text-xl md:text-2xl font-semibold">
        {title}
      </h3>
    </div>
  );
}
