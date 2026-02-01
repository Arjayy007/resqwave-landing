import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function LandingCTA() {
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
          Take part in building safer, more connected communities. As a focal leader, you'll be the bridge between families in need and the responders who can save them.
        </p>
        
        {/* Button */}
        <button className="bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-[5px] hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
          Interested? Contact Us Now!
        </button>
      </div>
    </section>
  );
}
