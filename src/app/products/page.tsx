import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">New (500)</h1>
        <div className="flex gap-4">
          <span>Hide Filters</span>
          <span>Sort By ▼</span>
        </div>
      </div>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4 border-r">
          <div className="mb-4">
            <h2 className="font-bold">Shoes</h2>
            <ul>
              <li>Sports Bras</li>
              <li>Tops & T-Shirts</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Trousers & Tights</li>
              <li>Shorts</li>
              <li>Accessories & Equipment</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Gender</h3>
            <label><input type="checkbox" /> Men</label><br />
            <label><input type="checkbox" /> Women</label><br />
            <label><input type="checkbox" /> Unisex</label>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-3/4 grid grid-cols-3 gap-8 p-4">
          {/* Product 1 */}
          <div className="text-center">
            <Image
              src="/p-1.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/p-2.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>

              {/* Product 3 */}
              <div className="text-center">
            <Image
              src="/p-3.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <Image
              src="/p-4.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 5 */}
    <div className="text-center">
            <Image
              src="/p-5.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 6 */}
          <div className="text-center">
            <Image
              src="/p-6.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 17 */}
    <div className="text-center">
            <Image
              src="/p-7.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 8 */}
          <div className="text-center">
            <Image
              src="/p-8.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 9 */}
    <div className="text-center">
            <Image
              src="/p-9.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 10 */}
          <div className="text-center">
            <Image
              src="/p-10.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 11 */}
    <div className="text-center">
            <Image
              src="/p-11.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/p-12.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 13 */}
    <div className="text-center">
            <Image
              src="/p-13.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 14 */}
          <div className="text-center">
            <Image
              src="/p-14.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 15 */}
    <div className="text-center">
            <Image
              src="/p-15.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 16 */}
          <div className="text-center">
            <Image
              src="/p-16.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 17 */}
    <div className="text-center">
            <Image
              src="/p-17.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 18 */}
          <div className="text-center">
            <Image
              src="/p-18.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 19 */}
    <div className="text-center">
            <Image
              src="/p-19.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 20 */}
          <div className="text-center">
            <Image
              src="/p-20.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 21 */}
    <div className="text-center">
            <Image
              src="/p-21.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 22 */}
          <div className="text-center">
            <Image
              src="/p-22.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>
    {/* Product 23 */}
    <div className="text-center">
            <Image
              src="/p-23.png" // Add image to public folder
              alt="Nike Air Force 1 Mid '07"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Air Force 1 Mid '07</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 10 795.00</p>
          </div>

          {/* Product 24 */}
          <div className="text-center">
            <Image
              src="/p-24.png"
              alt="Nike Court Vision Low"
              width={300}
              height={300}
            />
            <h3 className="text-orange-600">Just In</h3>
            <p className="font-bold">Nike Court Vision Low</p>
            <p className="text-gray-600">Men's Shoes</p>
            <p>1 Colour</p>
            <p className="font-semibold">MRP: ₹ 4 995.00</p>
          </div>

        </div>
      </div>
    </div>
  );
}
