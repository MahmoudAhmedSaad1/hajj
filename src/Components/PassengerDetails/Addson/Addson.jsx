
import AirportServices from "./AddsonAirportServices/AddsonAirportServices";
import Addsondesignheader from "./Addsondesignheader/Addsondesignheader";
import Addsonlayoutforadd from "./Addsonlayoutforadd/Addsonlayoutforadd";
import Addsonlayoutforsize from "./Addsonlayoutforsize/Addsonlayoutforsize";
import AddsonSpicialActitvity from "./AddsonSpicialActitvity/AddsonSpicialActitvity";
export default function Addson() {
  return (
    
  <div>
      <div className="px-9">
<Addsondesignheader/>
      <div className="bg-white p-6 rounded-lg shadow">
 
      <Addsonlayoutforadd/>
        
       <Addsonlayoutforsize/>
       
      </div>
    </div>
    <AirportServices/>
    <AddsonSpicialActitvity/>
  </div>
  );
}
