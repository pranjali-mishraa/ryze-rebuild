import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import LogoCarousel from "./LogoCrousel";
import WallOfLove from "./WallOfLove";
function Home() {
  return (
    <>
      <Header />
        <Hero/>
        <Features/>
        <WallOfLove/>
      <LogoCarousel/>
      
    </>
  );
}

export default Home;
