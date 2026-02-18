import { FlickeringGrid } from "@/components/ui/flickering-grid";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Ripple } from "@/components/ui/ripple";
import { useState } from "react";
import logo from '/resqwave_logo.png';

export function LandingCTA() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "afa586b9-8344-41e8-9417-e5f4c13cfd92");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
      // Clear all form fields
      const inputs = event.currentTarget.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
          input.value = '';
        }
      });
      setTimeout(() => {
        setOpen(false);
        setResult("");
      }, 2000);
    } else {
      setResult("Error submitting form. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(59, 130, 246)"
          maxOpacity={0.3}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10 bg-[#171717]/10 p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg backdrop-blur-sm">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Lead the Wave of Safety.
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          Take part in building safer, more connected communities. As a focal
          leader, you'll be the bridge between families in need and the
          responders who can save them.
        </p>

        {/* Button with Popover */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-[5px] hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
              Interested? Contact Us Now!
            </button>
          </PopoverTrigger>
          <PopoverContent 
            className="w-[90vw] max-w-[800px] bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-gray-700/50 shadow-2xl p-0 overflow-hidden"
            sideOffset={-140}
            align="center"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Logo with Ripple Background */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-8 flex items-center justify-center border-r border-gray-700/30 relative overflow-hidden">
                {/* Ripple Background with Blue Shades */}
                <div 
                  className="absolute inset-0 -translate-y-9"
                  style={{
                    ['--foreground' as string]: '59 130 246',
                  }}
                >
                  <style>{`
                    .blue-ripple .animate-ripple {
                      background: rgba(59, 130, 246, 0.15);
                      border-color: rgba(96, 165, 250, 0.3);
                    }
                  `}</style>
                  <Ripple
                    mainCircleSize={150}
                    mainCircleOpacity={0.3}
                    numCircles={6}
                    className="blue-ripple"
                  />
                </div>
                
                {/* Logo Content */}
                <div className="text-center relative z-10">
                  <img
                    src={logo}
                    alt="ResQwave Logo"
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 drop-shadow-2xl"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    ResQwave
                  </h3>
                  <p className="text-sm text-gray-300">
                    Join the Wave of Safety
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:w-3/5 p-6 md:p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-700/50 rounded-full"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Get in Touch
                  </h3>
                  <p className="text-sm text-gray-400">
                    Fill out the form and we'll get back to you soon.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-200 mb-2"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a]/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:bg-[#2a2a2a]/70"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-200 mb-2"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a]/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:bg-[#2a2a2a]/70"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-200 mb-2"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-[#2a2a2a]/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:bg-[#2a2a2a]/70 resize-none"
                      placeholder="Tell us about your interest..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={result === "Sending..."}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {result === "Sending..." ? "Sending..." : "Send Message"}
                  </button>

                  {result && result !== "Sending..." && (
                    <div
                      className={`p-3 rounded-lg text-sm text-center font-medium ${
                        result.includes("Success")
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {result}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}
