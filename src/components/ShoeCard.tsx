// pages/index.js

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Best of Air Max</h1>
      <div className="shoe-grid">
        {/* Shoe Card 1 */}
        <div className="shoe-card">
          <Image src="/s-1.png" alt="Nike Air Max Pulse" width={350} height={250} />
          <h3 className="shoe-name">Nike Air Max Pulse</h3>
          <p className="shoe-category">Women's Shoes</p>
          <p className="shoe-price">₹ 13,995</p>
        </div>

        {/* Shoe Card 2 */}
        <div className="shoe-card">
          <Image src="/s-2.png" alt="Nike Air Max Pulse" width={350} height={250} />
          <h3 className="shoe-name">Nike Air Max Pulse</h3>
          <p className="shoe-category">Men's Shoes</p>
          <p className="shoe-price">₹ 13,995</p>
        </div>

        {/* Shoe Card 3 */}
        <div className="shoe-card">
          <Image src="/s-3.png" alt="Nike Air Max 97 SE" width={350} height={250} />
          <h3 className="shoe-name">Nike Air Max 97 SE</h3>
          <p className="shoe-category">Men's Shoes</p>
          <p className="shoe-price">₹ 16,995</p>
        </div>
      </div>

      
    </div>
  );
}
