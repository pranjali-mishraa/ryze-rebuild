export default function FeatureCard({ title, description, image }) {
  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-sm 
                 hover:shadow-md transition duration-300
                 border border-black/5"
    >
     
      {/* {image && (
        <div className="mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-contain rounded-lg"
          />
        </div>
      )} */}

      <h3 className="text-xl font-semibold text-heading mb-3">
        {title}
      </h3>

      <p className="text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

