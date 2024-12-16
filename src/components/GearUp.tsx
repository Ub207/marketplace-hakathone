import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Gear Up Section */}
      <section className="gear-up">
        <h2>Gear Up</h2>
        <div className="gear-navigation">
          <span>Shop Men's</span>
          <span>&#8592; &#8594;</span>
          <span>Shop Women's</span>
          <span>&#8592; &#8594;</span>
        </div>

        <div className="gear-items">
          <div className="gear-card">
            <Image src="/g-1.png" alt="Men's Top" width={200} height={250} />
            <p>Nike Dri-FIT ADV TechKnit Ultra</p>
            <p>₹ 3,895</p>
            <p>Men's Short-Sleeve Running Top</p>
          </div>
          <div className="gear-card">
            <Image src="/g-2.png" alt="Men's Shorts" width={200} height={250} />
            <p>Nike Dri-FIT Challenger</p>
            <p>₹ 2,695</p>
            <p>Men's 13cm (approx.) 2-in-1 Versatile Shorts</p>
          </div>
          <div className="gear-card">
            <Image src="/women1.png" alt="Women's Top" width={200} height={250} />
            <p>Nike Dri-FIT ADV Run Division</p>
            <p>₹ 2,295</p>
            <p>Women's Long-Sleeve Running Top</p>
          </div>
          <div className="gear-card">
            <Image src="/g-3.png" alt="Women's Leggings" width={200} height={250} />
            <p>Nike Fast</p>
            <p>₹ 3,795</p>
            <p>Women's Mid-Rise 7/8 Running Leggings</p>
          </div>
        </div>
      </section>

      {/* Don't Miss Section */}
      <section className="dont-miss">
        <h2>Don't Miss</h2>
        <div className="dont-miss-images">
          <Image src="/dont-miss.png" alt="Nike Outfit 1" width={400} height={400} />
          <Image src="/dont-miss.png" alt="Nike Outfit 2" width={400} height={400} />
        </div>
      </section>
    </div>
  );
}
