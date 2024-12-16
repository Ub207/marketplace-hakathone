const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-sm">
          {/* Column 1: Icons */}
          <div>
            <h3 className="text-white font-bold mb-2">Icons</h3>
            <ul>
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
  
          {/* Column 2: Shoes */}
          <div>
            <h3 className="text-white font-bold mb-2">Shoes</h3>
            <ul>
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
  
          {/* Column 3: Clothing */}
          <div>
            <h3 className="text-white font-bold mb-2">Clothing</h3>
            <ul>
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
  
          {/* Column 4: Kids */}
          <div>
            <h3 className="text-white font-bold mb-2">Kids'</h3>
            <ul>
              <li>Infant & Toddler Shoes</li>
              <li>Kids' Shoes</li>
              <li>Kids' Jordan Shoes</li>
              <li>Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>
  
        {/* Lower Section */}
        <div className="bg-gray-800 text-gray-400 py-6 px-8 text-xs">
          <div className="flex flex-wrap justify-between items-center">
            {/* Left Section */}
            <div className="space-y-2">
              <p>FIND A STORE</p>
              <p>BECOME A MEMBER</p>
              <p>SIGN UP FOR EMAIL</p>
              <p>Send Us Feedback</p>
              <p>STUDENT DISCOUNTS</p>
            </div>
  
            {/* Middle Section */}
            <div className="space-y-2">
              <p>Order Status</p>
              <p>Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
              <p>Contact Us On Nike.com Inquiries</p>
            </div>
  
            {/* Right Section */}
            <div className="space-y-2">
              <p>News</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Sustainability</p>
            </div>
          </div>
  
          <div className="mt-8 flex justify-between items-center">
            <p>India &copy; 2023 Nike, Inc. All Rights Reserved</p>
            <div className="flex space-x-4">
              <span>Guides</span>
              <span>Terms of Sale</span>
              <span>Terms of Use</span>
              <span>Nike Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  