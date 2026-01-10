export default function ImageRightCard({ image, title, description }) {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-10 
                   bg-backgroundbackdrop-blur-md p-8 rounded-2xl 
                    shadow-lg hover:shadow-2xl transition-shadow duration-300">
      
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-64 object-contain scale-110"
      />

      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
