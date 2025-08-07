import Addsondesignheaderstepgold from "../Addson/Addsondesignheaderstepgold/Addsondesignheaderstepgold";
import Addsondesignheaderstepgray from "../Addson/Addsondesignheaderstepgray/Addsondesignheaderstepgray";

export default function PassengerDetailsheader() {
  return <>
  <div className="flex flex-wrap justify-center items-start md:mb-5">  
  <Addsondesignheaderstepgold  heading={"Passenger Details"} pharagraph={"Please provide your name and email"} />
  
      <Addsondesignheaderstepgray heading={"Adds-On"} pharagraph={"Additional items to be ready"} />
      
    </div>
  </>
}
