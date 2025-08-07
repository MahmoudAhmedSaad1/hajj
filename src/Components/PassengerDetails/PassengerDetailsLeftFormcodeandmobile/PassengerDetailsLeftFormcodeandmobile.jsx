import PassengerDetailsLeftFormcode from "../PassengerDetailsLeftFormcode/PassengerDetailsLeftFormcode";
import PassengerDetailsLeftFormmobile from "../PassengerDetailsLeftFormmobile/PassengerDetailsLeftFormmobile";

export default function PassengerDetailsLeftFormcodeandmobile() {
  return <>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PassengerDetailsLeftFormcode/>
           <PassengerDetailsLeftFormmobile/>
          </div>
  </>
}
