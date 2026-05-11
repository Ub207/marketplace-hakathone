import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
export default function Joinn() {
  return (
    <main>
      <section className="my-20">
        <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
          <Image
            src={"/logo/logo2.png"}
            alt="Nike Logo"
            width={65}
            height={35}
          />
          <div className=" items-center justify-center  flex flex-col">
            <h1 className="font-bold text-xl ">BECOME A NIKE MEMBER</h1>
          </div>
          <div className="mt-10 mb-5 max-w-[280px] mx-auto">
            <p className="text-[#BCBCBC] text-[12px] ">
              Create your Nike Member profile and get first access to the very
              best of Nike products, inspiration and community
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-80 border shadow rounded-md p-2 text-gray-400"
            />
            <p className="text-[#BCBCBC] text-[12px]">
              Get a Nike Member Reward every year on your Birthday.
            </p>
            <select className="w-80 border shadow rounded-md p-2 text-gray-500 bg-white">
              <option value="">Select Country/Region</option>
              <option value="PK">Pakistan</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="AE">UAE</option>
            </select>
            <div className="flex justify-between w-full gap-4">
              <div className="w-[50%] text-center bg-white rounded-lg shadow px-7 py-3">
                Male
              </div>
              <div className="w-[50%] text-center bg-white rounded-lg shadow px-7 py-3">
                Female
              </div>
            </div>
          </div>

          <div className="flex justify-between max-w-[280px] mt-6">
          <input type="checkbox" className="p-2 m-2 w-6 h-6" />
            <h1 className="text-[#BCBCBC] text-[12px] flex gap-1 items-center">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-[#BCBCBC] text-[12px]">
              By creating an account, you agree to Nike&apos;s{" "}
              <u>Privacy Policy</u>
            </p>
            <p className="text-[#BCBCBC] text-[12px]">
              and <u>Terms of Use</u>
            </p>
          </div>
          <Link href={"/joinus"}>
            <Button className="w-80 ronded-sm my-6">JOIN US</Button>
          </Link>
          <p className="text-[#BCBCBC] text-[12px]">
            Already a Member{" "}
            <Link href={"/login"}>
              <u className="text-black">Sign In?</u>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}