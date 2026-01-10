export default function FeatureCard({ title, children }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="bg-white rounded-xl p-4 h-60 flex items-center justify-center text-gray-400">
        {children || "UI Preview Here"}
      </div>
    </div>
  );
}
