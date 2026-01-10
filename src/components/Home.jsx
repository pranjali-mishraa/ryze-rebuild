import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import LogoCarousel from "./LogoCrousel";
import WallOfLove from "./WallOfLove";
import Footer from "./Footer";
import BlockFeaturesSec  from "./BlockFeaturesSec"
function Home() {
  return (
    <>
      <Header />
        <Hero/>
        <Features/>
        <WallOfLove/>
      < BlockFeaturesSec />
      <LogoCarousel/>
      <Footer/>
    </>
  );
}

export default Home;
