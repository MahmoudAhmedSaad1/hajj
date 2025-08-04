import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

import { FiArrowRight, FiMapPin } from "react-icons/fi";
export default function Rdetailshotelcard() {
  return <>
   <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-0">
                 
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="text-[#FCB100] text-[14px]" />
                  ))}
                </div>
               <div className="text-xs text-gray-600 m-0 p-0">5 Stars</div>
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <span><CiStar /></span>
                <h2>Wijha Rating and reviews (140)</h2></div>
            </div>
  </>
}
