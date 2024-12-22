import React from "react";

const GetHelp = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0 auto", maxWidth: "1200px", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>GET HELP</h1>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        {/* Left Section */}
        <div style={{ flex: "2" }}>
          <h2>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p>
            We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul>
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p>
            If you enter your PIN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.
          </p>
          <p>
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member, <a href="#">join us today</a>.
          </p>
          <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
            <button style={{ padding: "10px 20px", backgroundColor: "black", color: "white", border: "none", cursor: "pointer" }}>
              JOIN US
            </button>
            <button style={{ padding: "10px 20px", backgroundColor: "white", color: "black", border: "1px solid black", cursor: "pointer" }}>
              SHOP NIKE
            </button>
          </div>

          <h3>FAQs</h3>
          <div>
            <h4>Does my card need international purchases enabled?</h4>
            <p>
              Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if
              international purchases need to be enabled.
            </p>
            <p>
              Please note, some banks may charge a <b>small transaction fee</b> for international orders.
            </p>

            <h4>Can I pay for my order with multiple methods?</h4>
            <p>No, payment for Nike orders can’t be split between multiple payment methods.</p>

            <h4>What payment method is accepted for SNKRS orders?</h4>
            <p>You can use any accepted credit card to pay for your SNKRS order.</p>

            <h4>Why don’t I see Apple Pay as an option?</h4>
            <p>
              To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the
              latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you’ll need to
              use Safari to use Apple Pay on Nike.com.
            </p>
          </div>

          <p>
            Was this answer helpful? <a href="#">Yes</a> / <a href="#">No</a>
          </p>
          <h4>RELATED</h4>
          <ul>
            <li><a href="#">WHAT ARE NIKE'S DELIVERY OPTIONS?</a></li>
            <li><a href="#">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div style={{ flex: "1", borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
          <h3>CONTACT US</h3>
          <p><b>000 800 919 0566</b></p>
          <p>Products & Orders: 24 hours a day, 7 days a week</p>
          <p>Company Info & Enquiries: 07:30 – 16:30, Monday – Friday</p>

          <h3>We’ll reply within five business days</h3>

          <h3>STORE LOCATOR</h3>
          <p>Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
