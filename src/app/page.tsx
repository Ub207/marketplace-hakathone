import AirMaxPulse from "@/components/AirMaxPlus";
import ShoeCard from "@/components/ShoeCard";
import Running from "@/components/Running"
import GearUp from "@/components/GearUp"
import Essential from "@/components/Essential"
import Order from "@/components/Order";
import Last from "@/components/Las";
import Cart from "@/components/Cart";


export default function Home() {
  
  return (
    <div>
  <AirMaxPulse />
  <ShoeCard />
  <Running />
  <GearUp />
  <Essential />
  <Last />
   <Cart /> 
   <Order />

    </div>
  );

  
}
