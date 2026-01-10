import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoCrousel from "../components/LogoCrousel";
import { useNavigate } from "react-router-dom";

// ================= IMAGES =================
import motifImg from "../assets/Images/motif.jpg";

import sanarImg from "../assets/Images/sanar.jpg";
import ashleyImg from "../assets/Images/ashley.jpg";

// ================= CASE STUDIES DATA =================
const caseStudies = [
  {
    id: 1,
    image: motifImg,
    title: "Motif used Ryze audits to win new retainers",
    desc:
      "Turned audits into a repeatable sales asset—faster audits, clearer proof, and stronger sales conversations.",
    link: "/case-studies/motif",
  },
  {
    id: 2,
    image: sanarImg,
    title: "Sanar AI increased Google Search ROAS to 4.3x in 8 weeks",
    desc:
      "Turned category momentum into predictable growth—without adding headcount or slowing product velocity.",
    link: "/case-studies/sanar",
  },
  {
    id: 3,
    image: ashleyImg,
    title:
      "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
    desc:
      "E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles.",
    link: "/case-studies/ashley",
  },
];

// ================= INSIGHTS DATA =================
const insights = [
  {
    id: 1,
    title: "AdGent — the first AI agent to manage paid ads",
    desc: "Discover how AdGent transforms paid media management.",
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    title: "Account Structure in 2025: Simplify, Don't Complicate",
    desc:
      "The traditional Alpha/Beta account structure is dead. Learn how to restructure for machine learning.",
    date: "2025",
  },
  {
    id: 3,
    title:
      "Ad Creative for AI Search: Earning Clicks When AI Answers First",
    desc:
      "Your creative has to work harder when CTRs are down 40–60%.",
    date: "2025",
  },
];

export default function CaseStudy() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <section className="bg-[#faf7f2] py-32 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-orange-500">TOP BRANDS</span>{" "}
          <span className="text-black">IMPROVE</span>
          <br />
          <span className="text-black">ROAS WITH</span>{" "}
          <span className="text-orange-500">RYZE</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of brands simplifying ad management with AI
        </p>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 outline-none text-gray-700"
            />
            <button className="bg-black text-white px-6 py-4 font-medium hover:bg-gray-900 transition">
              Get started →
            </button>
          </div>
        </div>
      </section>

      {/* ================= LOGO CAROUSEL ================= */}
      <LogoCrousel />

      {/* ================= CASE STUDIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.link)}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-orange-500">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-5xl font-extrabold mb-20">Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {insights.map((item) => (
            <div
              key={item.id}
              className="
                cursor-pointer 
                rounded-2xl p-8 
                transition-all duration-500
                hover:-translate-y-3 
                hover:bg-[#faf7f2] 
                hover:shadow-2xl
              "
            >
              <div className="h-[2px] w-full bg-orange-500 mb-8" />

              <p className="text-xs tracking-widest text-gray-400 font-semibold mb-4">
                LEARN
              </p>

              <h3 className="text-2xl font-bold mb-4 hover:text-orange-500 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  R
                </span>
                <span>Ryze Team</span>
                <span className="mx-2">|</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-orange-500 font-semibold hover:underline">
            See more →
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
