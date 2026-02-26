import { Facebook, Mail } from "lucide-react";
import packetworx_logo from '/packetworx.png';
import resqwave_logo from '/resqwave_logo.png';

export function LandingFooter() {
  return (
    <footer className="w-full bg-[#171717] text-white py-9 sm:py-11 lg:py-13 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Section - Logo and Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={resqwave_logo} alt="ResQWave Logo" className="h-auto w-10" />
              <span className="font-semibold text-xl">ResQWave</span>
            </div>
            <p className="text-gray-400 text-base">Stronger Signals, Safer Communities</p>
            <p className="text-gray-400 text-sm">All Rights Reserved © ResQWave</p>
          </div>

          {/* Middle Section - Special Thanks */}
          <div className="flex flex-col gap-3 md:items-center md:text-right md:ml-100">
            <h3 className="text-base font-normal text-white uppercase tracking-wide">SPECIAL THANKS TO</h3>
            <a 
              href="https://packetworx.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img src={packetworx_logo} alt="Packetworx" className="h-6 w-auto" />
            </a>
          </div>

          {/* Right Section - Contact */}
          <div className="flex flex-col gap-3 md:items-start md:text-left md:ml-12">
            <h3 className="text-base font-normal text-white uppercase tracking-wide">CONTACT US</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.facebook.com/share/17wmEWBG4v/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-base">ResQWave</span>
              </a>
              <a 
                href="mailto:resqwaveinfo@gmail.com" 
                className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="text-base">resqwaveinfo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
