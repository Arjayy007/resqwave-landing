import packetworx_logo from "/packetworx.png";
import resqwave_logo from "/resqwave_logo.png";

export function LandingFooter() {
  return (
    <footer className="w-full bg-[#171717] text-white py-9 sm:py-11 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Section - Logo and Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={resqwave_logo}
                  alt="ResQWave Logo"
                  className="h-auto w-7"
                />
                <span className="font-semibold text-xl">ResQWave</span>
              </div>
              <p className="text-white text-base">
                Stronger Signals, Safer Communities
              </p>
            </div>
            <p className="text-gray-400 text-xs">
              All Rights Reserved © ResQWave
            </p>
          </div>

          {/* Middle Section - Special Thanks */}
          <div className="flex flex-col gap-3 md:items-start md:text-left md:ml-100">
            <h3 className="text-base font-normal text-white uppercase tracking-wide">
              SPECIAL THANKS TO
            </h3>
            <a
              href="https://packetworx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src={packetworx_logo}
                alt="Packetworx"
                className="h-6 w-auto"
              />
            </a>
          </div>

          {/* Right Section - Contact */}
          <div className="flex flex-col gap-3 md:items-start md:text-left md:ml-12">
            <h3 className="text-base font-normal text-white uppercase tracking-wider">
              CONTACT US
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.facebook.com/share/17wmEWBG4v/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2.5"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm">ResQWave</span>
              </a>
              <a
                href="mailto:resqwaveinfo@gmail.com"
                className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2.5"
                aria-label="Email"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-sm">resqwaveinfo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
