import QRCode from "@/assets/QR.png";
import androidIcon from "@/assets/android.png";
import { Ripple } from "@/components/ui/ripple";
import { useNavigate } from "react-router-dom";
import resqwave_logo from "/resqwave_logo.png";

export function DownloadApp() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white flex flex-col bg-[#171717] relative overflow-x-hidden w-full">
      {/* Global Radial Gradient Backgrounds */}
      <div
        className="fixed z-0 rounded-full pointer-events-none blur-[100px] w-[clamp(300px,45vw,500px)] h-[clamp(300px,45vw,500px)] -right-[10%] top-[85%] lg:top-[90%]"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 30, 90, 0.28) 0%, rgba(0, 50, 150, 0.28) 50%, rgba(23, 23, 23, 0.1) 100%)",
        }}
      />
      <div
        className="fixed z-0 rounded-full pointer-events-none blur-[100px] w-[clamp(350px,50vw,550px)] h-[clamp(350px,50vw,550px)] -left-[15%] lg:-left-[10%] -top-[30%] lg:-top-[35%]"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 30, 90, 0.28) 0%, rgba(0, 50, 150, 0.28) 40%, rgba(23, 23, 23, 0.1) 100%)",
        }}
      />
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50 flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors duration-200 p-1 sm:p-2 rounded-lg hover:bg-blue-600/10"
        aria-label="Go back to landing page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span className="text-xs sm:text-sm md:text-base font-medium">Back</span>
      </button>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-2 sm:px-3 md:px-4 py-4 sm:py-5 md:py-6">
        <div className="w-full max-w-5xl flex items-center justify-center flex-1">
          {/* Main Card Container */}
          <div className="w-full bg-gradient-to-br from-[#1a1a2e]/5 via-[#16213e]/5 to-[#0f3460]/5 rounded-2xl shadow-lg overflow-hidden backdrop-blur-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[450px]">
              {/* Left Side - Hero Section */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center bg-[#171717]/95 backdrop-blur-lg">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 w-fit mb-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/40">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-xs sm:text-sm font-semibold text-blue-300">Available Now</span>
                </div>

                {/* Content */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-2.5 leading-tight">
                  <span className="text-blue-400">Download</span> <span className="text-white">ResQWave</span>
                </h1>
                
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-2.5 font-light">
                  Get instant access to emergency response and stay connected during critical moments.
                </p>

                {/* Features List */}
                <div className="mb-2 sm:mb-3">
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    ResQWave empowers you with real-time emergency response capabilities, secure communication with first responders, and military-grade encryption to keep your information protected when it matters most.
                  </p>
                </div>

                <p className="text-gray-400 text-xs italic">
                   Scan the QR code to get started
                </p>
              </div>

              {/* Right Side - QR Code with Ripple Background */}
              <div className="p-2 sm:p-2.5 md:p-3 lg:p-4 flex flex-col items-center justify-center bg-[#171717]/95 backdrop-blur-lg relative overflow-hidden">
                {/* Ripple Background */}
                <div 
                  className="absolute inset-0"
                  style={{
                    ['--foreground' as string]: '96 165 250',
                  }}
                >
                  <style>{`
                    .qr-ripple div {
                      background: rgba(96, 165, 250, 0.15) !important;
                      border-color: rgba(96, 165, 250, 0.6) !important;
                    }
                  `}</style>
                  <Ripple
                    mainCircleSize={200}
                    mainCircleOpacity={0.25}
                    numCircles={5}
                    className="qr-ripple"
                  />
                </div>

                {/* QR Content */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full gap-2 sm:gap-3 md:gap-4">
                  {/* Logo and Title at Top */}
                  <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                    <div>
                      <img
                        src={resqwave_logo}
                        alt="ResQWave Logo"
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                        ResQWave Mobile
                      </h2>
                      <p className="text-xs text-gray-400">Emergency Response</p>
                    </div>
                  </div>
                  
                  {/* QR Code in Middle with Container */}
                  <div className="p-0 sm:p-0.5 md:p-1 bg-white rounded-lg shadow-lg">
                    <img
                      src={QRCode}
                      alt="QR Code"
                      className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 aspect-square object-contain"
                    />
                  </div>

                  {/* Android at Bottom */}
                  <div className="w-full px-2 sm:px-0">
                    <button disabled className="w-full flex flex-row items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-gray-400 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base cursor-not-allowed">
                      <img
                        src={androidIcon}
                        alt="Android"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      />
                      <span>Download on Android</span>
                    </button>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="w-full mt-4 sm:mt-5 text-center pb-2 sm:pb-3">
          <p className="text-gray-500 text-xs sm:text-sm">
            Available on Android • Requires Android 8.0 or higher
          </p>
        </div>
      </main>
    </div>
  );
}
