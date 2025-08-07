import PaymentHeader from "./PaymentHeader/PaymentHeader";
import PaymentBody from "./PaymentBody/PaymentBody";
import AddsonSpicialActitvitybutton from '../Addson/AddsonSpicialActitvitybutton/AddsonSpicialActitvitybutton';

export default function Payment() {
  return <>
  <PaymentHeader/>
 <PaymentBody/>
 <AddsonSpicialActitvitybutton pat={"/successful"} title={"proceed to payment"}/>
  </>
}
