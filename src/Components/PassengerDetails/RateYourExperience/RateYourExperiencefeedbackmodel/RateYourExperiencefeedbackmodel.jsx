import { FaTimes } from "react-icons/fa";
import RateYourExperiencefeedbackmodelCommentbox from "../RateYourExperiencefeedbackmodelCommentbox/RateYourExperiencefeedbackmodelCommentbox";
import RateYourExperiencefeedbackmodelRatingbuttons from "../RateYourExperiencefeedbackmodelRatingbuttons/RateYourExperiencefeedbackmodelRatingbuttons";
import RateYourExperiencefeedbackmodeltitleanddescription from "../RateYourExperiencefeedbackmodeltitleanddescription/RateYourExperiencefeedbackmodeltitleanddescription";
import RateYourExperiencefeedbackmodelicon from "../RateYourExperiencefeedbackmodelicon/RateYourExperiencefeedbackmodelicon";
export default function RateYourExperiencefeedbackmodel({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative bg-white rounded-2xl p-8 w-[80%] mx-4">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          <RateYourExperiencefeedbackmodelicon />
          <RateYourExperiencefeedbackmodeltitleanddescription />
          <RateYourExperiencefeedbackmodelRatingbuttons />
          <RateYourExperiencefeedbackmodelCommentbox />

          <button className="w-[50%] mx-auto block py-2 bg-[#053E66] hover:bg-white hover:text-[#003E71] border border-1 border-[#003E71] duration-300 text-white rounded-full">
            Send Feedback
          </button>
        </div>
      </div>
    </>
  );
}
