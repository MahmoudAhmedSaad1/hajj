import { useState } from "react";
import PassengerDetailsLeftFormcodeandmobile from "../PassengerDetailsLeftFormcodeandmobile/PassengerDetailsLeftFormcodeandmobile";
import PassengerDetailsLeftFormNameandemail from "../PassengerDetailsLeftFormNameandemail/PassengerDetailsLeftFormNameandemail";
import PassengerDetailsLeftFormcounters from "../PassengerDetailsLeftFormcounters/PassengerDetailsLeftFormcounters";
import PassengerDetailsLeftFormcountersbutton from "../PassengerDetailsLeftFormcountersbutton/PassengerDetailsLeftFormcountersbutton";
export default function PassengerDetailsLeftForm({
  decrease,
  increase,
  children,
  adults,
  setChildren,
  setAdults,
}) {
  const [infants, setInfants] = useState(0);

  return (
    <>
      <div className="flex-1 bg-white pt-3 px-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-[#003E71] mb-4">
          Passenger Details
        </h2>
        <form className="space-y-6">
          <PassengerDetailsLeftFormNameandemail />
          <PassengerDetailsLeftFormcodeandmobile />
          <PassengerDetailsLeftFormcounters
            decrease={decrease}
            increase={increase}
            children={children}
            adults={adults}
            setChildren={setChildren}
            setAdults={setAdults}
            setInfants={setInfants}
            infants={infants}
          />
          <PassengerDetailsLeftFormcountersbutton title="Continue" />
        </form>
      </div>
    </>
  );
}
