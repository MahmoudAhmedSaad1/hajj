import { useState } from "react";
import RateYourExperiencefeedbackmodel from "../RateYourExperiencefeedbackmodel/RateYourExperiencefeedbackmodel";

export default function RateYourExperiencebutton() {
   const [showModal, setShowModal] = useState(false);
  return <>
  
   <button  onClick={() => setShowModal(true)} className="w-1/2 mx-auto my-5 block bg-[#003E71] border border-1 border-[#003E71] duration-300 hover:bg-white hover:text-[#003E71] text-white text-center px-8 py-3 rounded-full text-base">
        Rate your experience 
      </button>
      {showModal && <RateYourExperiencefeedbackmodel onClose={() => setShowModal(false)} />}
 
  </>
}
