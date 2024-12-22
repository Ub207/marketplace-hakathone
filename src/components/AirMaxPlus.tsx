
import Image from "next/image";

const AirMaxPulse = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Top Header */}
      <div className="bg-gray-50 w-full py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-gray-500">
        Hello Nike App <br />
        Download the app to access everything Nike, Start Your Order.
      </div>

      {/* Main Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src="/hero-image.png" 
          alt="Nike Air Max Pulse"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-b-lg"
        />
      </div>

      {/* Text Content */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">
        <h3 className="text-gray-500 uppercase text-xs sm:text-sm mb-1 sm:mb-2">First Look</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          — designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <button className="w-full sm:w-auto px-4 py-2 border border-black rounded-md hover:bg-gray-200 transition">
            Notify Me
          </button>
          <button className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirMaxPulse;
