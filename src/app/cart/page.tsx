import { FaCartPlus } from "react-icons/fa6";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="container mx-auto mt-12 p-4 flex flex-col md:flex-row items-center gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/nike-air-force.png"
          alt="Nike Air Force Logo"
          width={653}
          height={653}
          objectFit="cover"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text and Add-to-Cart Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 p-4">
        <h1 className="font-bold text-2xl md:text-3xl">
          Nike Air Force 1 PLT.AF.ORM
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. 
          Its "inside out"-inspired construction, including unique layering and 
          exposed foam accents, ups the ante on this timeless Jordan Brand 
          silhouette. Details like the deco stitching on the Swoosh add coveted 
          appeal, while the unexpected shading, rich mixture of materials, and 
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <p className="font-medium text-lg md:text-xl font-poppins">
          ₹ 8,695.00
        </p>

        {/* Add to Cart Button */}
        <button className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-3xl text-sm md:text-base hover:bg-gray-800">
          <FaCartPlus className="text-lg" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
