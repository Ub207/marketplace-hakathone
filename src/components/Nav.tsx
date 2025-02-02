"use client";
import Image from "next/image";
import Link from "next/link";
import {  FaHeart, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductSearch from "./SearchBar";

import { useEffect, useState } from 'react';

export default function Nav() {
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist(); // Get the wishlist items
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; // Server-side rendering ke liye kuch nahi render karein
    }
  return (
    <header className="">
      {/* Top bar */}
      <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image src={"/logo/logo1.png"} alt={""} width={24} height={24} />
        <div>
          <p className="text-black text-sm bg-white">Skip to main content</p>
        </div>
        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="/locate" className="hover:text-gray-800">
            Find Link Store
          </Link>
          <Link href="/help" className="hover:text-gray-800">
            Help
          </Link>
          <Link href="/joinus" className="hover:text-gray-800">
            Join Us
          </Link>
          <Link href="/signup" className="hover:text-gray-800">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image
            src={"/logo/logo2.png"}
            alt="Nike Logo"
            width={35}
            height={35}
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
          <Link href="/product" className="hover:text-black whitespace-nowrap">
            New & Featured
          </Link>
          <Link href="/product" className="hover:text-black whitespace-nowrap">
            Men
          </Link>
          <Link href="/product" className="hover:text-black whitespace-nowrap">
            Women
          </Link>
          <Link href="/product" className="hover:text-black whitespace-nowrap">
            Kids
          </Link>
          <Link href="/product" className="hover:text-black whitespace-nowrap">
            Sale
          </Link>
          <Link href="/snkrs" className="hover:text-black whitespace-nowrap">
            SNKRS
          </Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative md:block">
           <ProductSearch/>
          </div>
            {/* Wishlist Icon */}
      <Link href={'/cart'} className="relative">
        <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-red-500" />
        {wishlistItems.length > 0 && (
          <span className="absolute -top-1 -right-2 w-5 h-5 bg-red-600 rounded-full text-white text-xs flex justify-center items-center">
            {wishlistItems.length}
          </span>
        )}
      </Link>
            <Link href={'/cart'} className="relative">
      {/* Shopping Bag Icon */}
      <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />

      {/* Cart Item Count */}
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-2 w-5 h-5 bg-red-600 rounded-full text-white text-xs flex justify-center items-center">
          {cartCount}
        </span>
      )}
    </Link>
        </div>
      </div>
    
    </header>
  );
}