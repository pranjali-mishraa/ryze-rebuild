import { Linkedin, Twitter, Github } from "lucide-react";
import Button from "./Tools/Button";
import HeroSecSoMedia from "./Tools/HeroSecSoMedia";
function Hero() {
  return (
    <section className="px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2 items-center">
        
      
        <div className="flex flex-col gap-8 max-w-xl">
  <h1 className="text-4xl md:text-5xl font-bold leading-snug text-heading">
    Grow your business <br />
    with <span className="text-primary">AI-powered growth</span>
  </h1>

  <p className="text-lg text-muted leading-relaxed">
    Ryze helps teams automate workflows, generate quality leads,
    and scale faster using intelligent AI solutions.
  </p>

  <div className="pt-4">
    <Button>Get Started</Button>
  </div>
</div>


      
        <div className="flex md:justify-end gap-6">
          <HeroSecSoMedia href="https://linkedin.com" label="LinkedIn">
  <Linkedin size={26} className="text-heading" />
</HeroSecSoMedia>

<HeroSecSoMedia href="https://twitter.com" label="Twitter">
  <Twitter size={26} className="text-heading" />
</HeroSecSoMedia>

<HeroSecSoMedia href="https://github.com" label="GitHub">
  <Github size={26} className="text-heading" />
</HeroSecSoMedia>

        </div>

      </div>
    </section>
  );
}

export default Hero;
