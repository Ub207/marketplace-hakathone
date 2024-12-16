import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Featured Section */}
      <section className="featured">
        <h3 className="featured-title">Featured</h3>
        <Image
          src="/running.png"
          alt="Running Person"
          layout="responsive"
          width={1500}
          height={1000}
          priority
        />
      </section>

      {/* Text Section */}
      <section className="text-section">
        <h1 className="heading">STEP INTO WHAT FEELS GOOD</h1>
        <p className="subheading">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <button className="cta-button">Find Your Shoe</button>
      </section>
      </div>
  );
};
