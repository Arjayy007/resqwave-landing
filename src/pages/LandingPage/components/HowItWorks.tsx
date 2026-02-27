import { Waypoints } from "lucide-react";

export function LandingHowItWorks() {
  return (
    <section id="how" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 lg:py-24 relative flex items-center z-20 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        {/* Features Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-[5px] ">
            <Waypoints className="w-4 h-4 text-zinc-300" />
            <span className="text-sm text-zinc-300">Features</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">
          How does ResQWave works?
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Video */}
          <div className="flex items-center justify-center lg:w-[60%]">
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qOzZgv6Ea_c?si=8A4zlW1xejI_izWP"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="flex flex-col lg:w-[40%]">
            {/* Step 01 */}
            <div className="flex flex-col p-6 sm:p-8 border-b border-white border-dashed">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-white text-black font-bold text-lg px-4 py-2 rounded-[5px] flex-shrink-0">
                  01
                </div>
                <h3 className="text-lg sm:text-xl font-semibold pt-2">Community Terminal Setup</h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                A LoRa-powered terminal is placed in each community and managed by a focal person responsible for sending alerts.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col p-6 sm:p-8 border-b border-white border-dashed">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-white text-black font-bold text-lg px-4 py-2 rounded-[5px] flex-shrink-0">
                  02
                </div>
                <h3 className="text-lg sm:text-xl font-semibold pt-2">Sending Emergency Alerts</h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                In times of flood or disaster, the focal person can send quick SOS signals or let the terminal's flood sensor trigger automatic alerts.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-white text-black font-bold text-lg px-4 py-2 rounded-[5px] flex-shrink-0">
                  03
                </div>
                <h3 className="text-lg sm:text-xl font-semibold pt-2">Alerts Reach Officials</h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                The SOS and flood data are transmitted via the LoRa network and received in real-time by local officials, enabling faster response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
