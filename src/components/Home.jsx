import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import LogoCarousel from "./LogoCrousel";
import WallOfLove from "./WallOfLove";
import Footer from "./Footer";
import BlockFeaturesSec  from "./BlockFeaturesSec"
import image1 from "../assets/Images/img1.png";
import image2 from "../assets/Images/img2.png";
import image3 from "../assets/Images/img3.png";
function Home() {
  return (
    <>
    

      <Header />
        <Hero/>
        <Features/>
        <WallOfLove
  mainImage={image1}
  secondaryImage={image2}
  avatarImage={image3}
/>
      < BlockFeaturesSec />
      <LogoCarousel/>
      <Footer/>
     
    </>
  );
}

export default Home;
