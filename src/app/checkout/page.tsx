"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("card");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Form */}
        <div className="flex-1 space-y-8">
          {/* How are items delivered */}
          <section>
            <h2 className="text-xl font-semibold mb-4">How are items delivered?</h2>
            <div className="border border-black rounded-lg p-4 flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              </div>
              <span className="font-medium text-sm">Standard Delivery</span>
              <span className="ml-auto text-sm text-gray-500">Free</span>
            </div>
          </section>

          {/* Shipping Address */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black md:col-span-2"
              />
              <input
                type="text"
                placeholder="Address Line 2 (Optional)"
                className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black md:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black"
              />
              <select className="border border-gray-300 rounded-md p-3 w-full text-sm text-gray-500 bg-white focus:outline-none focus:border-black md:col-span-2">
                <option value="">Country/Region</option>
                <option value="PK">Pakistan</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="AE">UAE</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black md:col-span-2"
              />
            </div>
            <label className="flex items-center gap-2 mt-4 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              Save this address to my profile
            </label>
          </section>

          {/* Payment */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <div className="space-y-3">
              <div
                onClick={() => setPaymentMethod("card")}
                className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer ${
                  paymentMethod === "card" ? "border-black" : "border-gray-300"
                }`}
              >
                <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                  {paymentMethod === "card" && (
                    <div className="w-2.5 h-2.5 rounded-full bg-black" />
                  )}
                </div>
                <span className="font-medium text-sm">Credit / Debit Card</span>
              </div>
              {paymentMethod === "card" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black md:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="border border-gray-300 rounded-md p-3 w-full text-sm focus:outline-none focus:border-black md:col-span-2"
                  />
                </div>
              )}
              <div
                onClick={() => setPaymentMethod("cod")}
                className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer ${
                  paymentMethod === "cod" ? "border-black" : "border-gray-300"
                }`}
              >
                <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                  {paymentMethod === "cod" && (
                    <div className="w-2.5 h-2.5 rounded-full bg-black" />
                  )}
                </div>
                <span className="font-medium text-sm">Cash on Delivery</span>
              </div>
            </div>
          </section>

          <Button className="w-full rounded-full py-4 text-base font-semibold">
            Review Order
          </Button>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:w-[380px] space-y-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-500">
                No items in cart.{" "}
                <Link href="/product" className="underline">
                  Shop now
                </Link>
              </p>
            ) : (
              cartItems.map((item) => (
                <div key={item.product._id} className="flex gap-4">
                  <Image
                    src={item.product.image}
                    alt={item.product.productName}
                    width={80}
                    height={80}
                    className="bg-gray-100 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.product.productName}</p>
                    <p className="text-sm text-gray-500">{item.product.category}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">
                    ₹{item.product.price * item.quantity}
                  </p>
                </div>
              ))
            )}
          </div>

          <hr />

          {/* Price Breakdown */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery / Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <hr />

          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>
              The total reflects the price of your order, including all duties and taxes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
