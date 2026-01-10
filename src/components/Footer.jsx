import { Linkedin, Mail } from "lucide-react";
import footerbg from "../assets/Images/Footer.png";

export default function Footer() {
  return (
    <footer
      className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${footerbg})`,
      }}
    >
      {/* Content Wrapper */}
      <div className="w-full h-full px-6 sm:px-10 py-16 sm:py-24 flex flex-col items-center text-center">

        {/* Center Content */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F2]">
            Let’s grow together
          </h3>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#E6E1D9] max-w-md">
            Drop your email and we’ll reach out to you.
          </p>

          {/* Input + Button */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full h-15 px-4 py-2 rounded-full bg-[#FAF7F2] text-black placeholder-gray-500 outline-none text-sm sm:text-base"
  />
  <button className="w-full sm:w-auto bg-black text-[#FAF7F2] h-15 px-5 rounded-full hover:bg-gray-900 transition text-sm sm:text-base flex items-center justify-center">
    Reach Out
  </button>
</div>


          
        </div>

        {/* Bottom Section */}
        <div className="mt-auto w-full flex flex-col sm:flex-row justify-center items-center absolute bottom-0
 gap-4 text-xs sm:text-sm text-[#E6E1D9] px-2 sm:px-6 pb-4">

  <div className="flex items-center gap-1">
    <Mail size={14} />
    <span>hello@get-ryze.ai</span>
  </div>

  <div className="flex items-center gap-1">
    <Linkedin size={14} />
    <span>Reach out on LinkedIn</span>
  </div>

  <p className="opacity-70">
    © {new Date().getFullYear()} Ryze
  </p>
</div>



      </div>
    </footer>
  );
}
