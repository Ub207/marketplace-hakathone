import Image from "next/image";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi"; // Icons for search, favorites, and cart

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Image
          src="/logo-1.png" // Jordan logo image (replace with actual image path)
          alt="Jordan Logo"
          width={30}
          height={30}
        />
        <Image
          src="/nike-logo.png" // Nike logo (replace with your image path)
          alt="Nike Logo"
          width={50}
          height={20}
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-800 hover:text-gray-500 font-medium"
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        <FiSearch size={20} className="cursor-pointer hover:text-gray-500" />
        <FiHeart size={20} className="cursor-pointer hover:text-gray-500" />
        <FiShoppingBag size={20} className="cursor-pointer hover:text-gray-500" />
      </div>
    </nav>
  );
};

export default Navbar;
