export default function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-4 rounded-xl border hover:bg-white transition flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
