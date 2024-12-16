import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      {/* Header Section */}
      <section className="header">
        <h1>FLIGHT ESSENTIALS</h1>
        <p>Your built-to-last, all-week wears — but with style only Jordan Brand can deliver.</p>
        <button className="shop-btn">Shop</button>
      </section>

      {/* Essentials Section */}
      <section className="essentials">
        <h2>The Essentials</h2>
        <div className="essentials-cards">
          {/* Men's Card */}
          <div className="card">
            <Image
              src="/e-1.png"
              alt="Men's Essentials"
              width={400}
              height={500}
            />
            <button className="card-btn">Men's</button>
          </div>

          {/* Women's Card */}
          <div className="card">
            <Image
              src="/e-2.png"
              alt="Women's Essentials"
              width={400}
              height={500}
            />
            <button className="card-btn">Women's</button>
          </div>

          {/* Kids' Card */}
          <div className="card">
            <Image
              src="/e-3.png"
              alt="Kids' Essentials"
              width={400}
              height={500}
            />
            <button className="card-btn">Kids'</button>
          </div>
        </div>
      </section>


    </div>
  );
}
