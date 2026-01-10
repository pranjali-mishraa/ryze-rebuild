import ImageLeftCard from "../Tools/ImgLeftCard";
import ImageRightCard from "../Tools/ImgRightCard";
import Header from "../Header";
import img1 from "../../assets/Images/img1.png";
import img2 from "../../assets/Images/img2.png";
import img3 from "../../assets/Images/img3.png";
import img4 from "../../assets/Images/img4.png";
import img5 from "../../assets/Images/img4.png";
import img6 from "../../assets/Images/img4.png";
import img7 from "../../assets/Images/img4.png";
import img8 from "../../assets/Images/img4.png";
import Footer from "../Footer";
import Crousel from "../Tools/Crousel";

const images = [img1, img2, img3,img4,img5,img6,img7,img8];
export default function AboutUs() {
  return (
    <>
      <Header />

      {/* Constrained content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        {/* OUR STORY */}
        <p className="text-red-500 text-xl font-semibold mb-12 text-left">
          OUR STORY
        </p>

        <div className="space-y-28">
          <ImageLeftCard
            image={img1}
            description={`We've run ads at Google, DTC brands, big companies, small agencies.
Late nights. Tight budgets. Impossible targets.

We know the truth: most ads lose money. 
Not because people are bad at marketing.
Because the work is too manual, too slow, too scattered.`}
          />

          <ImageRightCard
            image={img2}
            description={`So we moved to San Francisco and built Ryze.

Worked with the best agencies. Learned what actually moves the needle.
Then built AI to do exactly that.`}
          />

          <ImageLeftCard
            image={img3}
            description={`It watches your campaigns, fixes what's broken, scales what's working. Every day. Without you.

Not magic.  
Just the boring stuff done faster and better than any human can.`}
          />
        </div>
      </div>
        
                <Crousel images={images} speed={1.2}/>
                
      {/* Full width footer */}
      <Footer />
    </>
  );
}
