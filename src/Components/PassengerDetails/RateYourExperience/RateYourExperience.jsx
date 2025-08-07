import AddsonSpicialActitvitybutton from "../Addson/AddsonSpicialActitvitybutton/AddsonSpicialActitvitybutton";
import ConfirmBookingHeading from "../ConfirmBooking/ConfirmBookingHeading/ConfirmBookingHeading";
import ConfirmBookingicon from "../ConfirmBooking/ConfirmBookingicon/ConfirmBookingicon";
import RateYourExperiencebutton from "./RateYourExperiencebutton/RateYourExperiencebutton";
import RateYourExperiencepharagraph from "./RateYourExperiencepharagraph/RateYourExperiencepharagraph";
export default function RateYourExperience() {
    
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <ConfirmBookingicon />
        <ConfirmBookingHeading
          heading={"Your Booking Has Been Successfully Received!"}
        />
        <RateYourExperiencepharagraph />
      </div>
      
      <RateYourExperiencebutton/>
    </>
  );
}
