import { Linkedin, Twitter, Github } from "lucide-react";


function Hero() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-heading">
            Grow your business <br />
            with <span className="text-primary">AI-powered growth</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl">
            Ryze helps teams automate workflows, generate quality leads,
            and scale faster using intelligent AI solutions.
          </p>

          <button className="mt-10 bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex md:justify-end gap-6">
          <a
            href="#"
            className="p-4 rounded-xl border hover:bg-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={26} className="text-heading" />
          </a>

          <a
            href="#"
            className="p-4 rounded-xl border hover:bg-white transition"
            aria-label="Twitter"
          >
            <Twitter size={26} className="text-heading" />
          </a>

          <a
            href="#"
            className="p-4 rounded-xl border hover:bg-white transition"
            aria-label="GitHub"
          >
            <Github size={26} className="text-heading" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
