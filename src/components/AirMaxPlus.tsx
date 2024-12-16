import Image from "next/image";

const AirMaxPulse = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Top Header */}
      <div className="bg-gray-50 w-full py-2 text-sm text-gray-500">
        Hello Nike App <br />
        Download the app to access everything Nike, Start Your Order.
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/hero-image.png" 
          alt="Nike Air Max Pulse"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-gray-500 uppercase text-sm mb-2">First Look</h3>
        <h1 className="text-4xl font-bold mb-4">NIKE AIR MAX PULSE</h1>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          — designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 border border-black rounded-md hover:bg-gray-200">
            Notify Me
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirMaxPulse;
