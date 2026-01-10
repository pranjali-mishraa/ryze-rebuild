export default function WallOfLove() {
  return (
    <section className="px-6 pt-12 pb-28 bg-background">

      <div className="max-w-7xl mx-auto">

       
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Loved by growth-focused teams
          </h2>
          <p className="mt-4 text-lg text-muted">
            Real stories from people who use Ryze to scale faster and smarter.
          </p>
        </div>

       
        <div className="grid gap-8 md:grid-cols-3 auto-rows-[1fr]">

       
          <div className="rounded-2xl overflow-hidden shadow-sm bg-white md:row-span-2">
            <img
              src="/wall/image1.jpg"
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-black text-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg font-semibold">
              “Ryze’s AI-driven ads outperform human optimization by a huge margin.”
            </p>
            <p className="mt-4 text-sm opacity-70">
              — Mathilde Biggs, CEO, Motif Digital
            </p>
          </div>

        
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-heading">+63%</h3>
            <p className="mt-2 text-muted">
              Better ROAS after switching to AI agents
            </p>
          </div>

         
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-muted">
              “We were drowning with 7 people. Got back so many hours each week from reporting.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="/avatars/user1.jpg"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div>
                <p className="font-medium text-heading">Roger Dunn</p>
                <p className="text-sm text-muted">Global Performance Lead</p>
              </div>
            </div>
          </div>

         
          <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
            <img
              src="/wall/image2.jpg"
              alt="Conference"
              className="w-full h-full object-cover"
            />
          </div>

         
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <img src="/icons/linkedin.svg" className="w-6" />
              <span className="text-sm text-muted">Verified Review</span>
            </div>
            <p className="mt-4 text-muted">
              “Broke down performance by assets. CTR basically doubled.”
            </p>
            <p className="mt-4 font-medium text-heading">
              Daniel Amezquita
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
