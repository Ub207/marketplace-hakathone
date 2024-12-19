import React from "react";
import AirMaxPulse from "@/components/AirMaxPlus";
import ShoeCard from "@/components/ShoeCard";
import Running from "@/components/Running"
import GearUp from "@/components/GearUp"
import Essential from "@/components/Essential"
import Last from "@/components/Last";
import SignUpForm from "@/components/SignUp";
import Cart from "@/components/Cart";
import LoginForm from "@/components/loginform";
import Order from "@/components/Order";



export default function Home() {
  
  return (
    <div>
  <AirMaxPulse />
  <ShoeCard />
  <Running />
  <GearUp />
  <Essential />
  <Last />
  <SignUpForm />
  <Cart />
  <LoginForm />
  <Order />
   
  

    </div>
  );

  
}
