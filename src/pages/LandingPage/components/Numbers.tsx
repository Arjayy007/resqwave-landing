import { NumberTicker } from "@/components/ui/number-ticker";
import { HeartPulse, House, Timer, Users } from "lucide-react";

export function LandingNumbers() {
  const stats = [
    {
      icon: <House className="w-12 h-12 text-blue-500" />,
      title: "Connected Households",
      value: 125,
      description: "communities equipped with ResQWave terminals",
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Individuals Covered",
      value: 500,
      description: "residents connected and protected",
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-green-500" />,
      title: "Rescues Completed",
      value: 320,
      description: "successful rescues coordinated",
    },
    {
      icon: <Timer className="w-12 h-12 text-red-500" />,
      title: "Average Response Time",
      value: 5,
      description: "minutes from alert to official response",
    },
  ];

  return (
    <section id="impact" className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:w-[45%] xl:w-[40%] text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">By the Numbers</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Behind these numbers are real families, neighbors, and communities made safer through ResQWave,
              where reliable LoRa-powered terminals turn urgent signals into life-saving action.
            </p>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:w-[55%] xl:w-[60%] w-full max-w-2xl lg:max-w-none">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-[5px] p-6 sm:p-8 lg:p-10 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4">{stat.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                    {stat.title}
                  </h3>
                  
                  {/* Value */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                    <NumberTicker value={stat.value} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
