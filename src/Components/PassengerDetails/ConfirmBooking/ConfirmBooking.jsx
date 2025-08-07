import AddsonSpicialActitvitybutton from "../Addson/AddsonSpicialActitvitybutton/AddsonSpicialActitvitybutton";
import ConfirmBookingHeading from "./ConfirmBookingHeading/ConfirmBookingHeading";
import ConfirmBookingicon from "./ConfirmBookingicon/ConfirmBookingicon";
import ConfirmBookingPhargraph from "./ConfirmBookingPhargraph/ConfirmBookingPhargraph";

export default function ConfirmBooking() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <ConfirmBookingicon />
        <ConfirmBookingHeading
          heading={"Your Booking Has Been Successfully Received!"}
        />
        <ConfirmBookingPhargraph />
      </div>
      <AddsonSpicialActitvitybutton
        pat={"/completeinformatiom"}
        title={"Complete Your Booking"}
      />
    </>
  );
}
