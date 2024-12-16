import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="product-wrapper">
        {/* Left Side: Shoe Image */}
        <div className="product-image">
          <Image
            src="/nike-air-force.png" 
            alt="Nike Air Force 1"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="product-details">
          <h1>Nike Air Force 1 <br /> PLT.AF.ORM</h1>
          <p>
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its "inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release
            an artisan finish.
          </p>
          <h2>₹ 8,695.00</h2>
          <button className="add-to-cart">
            <span>🛒</span> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}