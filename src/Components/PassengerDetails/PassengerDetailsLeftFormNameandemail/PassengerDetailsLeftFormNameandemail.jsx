import PassengerDetailsLeftFormemail from "../PassengerDetailsLeftFormemail/PassengerDetailsLeftFormemail";
import PassengerDetailsLeftFormName from "../PassengerDetailsLeftFormName/PassengerDetailsLeftFormName";

export default function PassengerDetailsLeftFormNameandemail() {
  return <>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PassengerDetailsLeftFormName/>
           <PassengerDetailsLeftFormemail/>
          </div>
  </>
}
